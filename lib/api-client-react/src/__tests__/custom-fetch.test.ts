import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  customFetch,
  setBaseUrl,
  setAuthTokenGetter,
  applyBaseUrl,
  isTextMediaType,
  hasNoBody,
  getStringField,
  buildErrorMessage,
  parseErrorBody,
  parseSuccessBody,
} from '../custom-fetch';

// Minimal Response/Headers mocks for the test environment
class MockHeaders {
  private map: Record<string, string>;
  constructor(init: Record<string, string> = {}) {
    this.map = {};
    for (const k of Object.keys(init)) this.map[k.toLowerCase()] = init[k];
  }
  get(name: string) {
    return this.map[name.toLowerCase()] ?? null;
  }
}

class MockResponse {
  status: number;
  statusText: string;
  headers: MockHeaders;
  url: string;
  body: unknown;
  private _text: string;
  constructor(text: string, init: { status?: number; statusText?: string; headers?: Record<string, string>; url?: string } = {}) {
    this._text = text;
    this.status = init.status ?? 200;
    this.statusText = init.statusText ?? '';
    this.headers = new MockHeaders(init.headers ?? {});
    this.url = init.url ?? '';
    this.body = text === null ? null : {}; // emulate presence/absence
  }

  get ok() {
    return this.status >= 200 && this.status < 300;
  }

  async text() {
    return this._text;
  }

  async blob() {
    return this._text;
  }
}

const Response = MockResponse as unknown as typeof globalThis.Response;
const originalFetch = globalThis.fetch;

describe('custom-fetch helpers', () => {
  beforeEach(() => {
    setBaseUrl(null);
    setAuthTokenGetter(null);
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('applyBaseUrl prepends base url for relative paths', () => {
    setBaseUrl('https://api.example');
    const out = applyBaseUrl('/foo');
    expect(out).toBe('https://api.example/foo');
    setBaseUrl(null);
  });

  it('isTextMediaType recognizes text and xml types', () => {
    expect(isTextMediaType('text/plain')).toBe(true);
    expect(isTextMediaType('application/xml')).toBe(true);
    expect(isTextMediaType('application/json')).toBe(false);
  });

  it('hasNoBody returns true for HEAD and no-body statuses', () => {
    const mockResp = { status: 204, headers: new Headers(), body: null } as unknown as Response;
    expect(hasNoBody(mockResp, 'GET')).toBe(true);
    const headResp = { status: 200, headers: new Headers(), body: {} } as unknown as Response;
    expect(hasNoBody(headResp, 'HEAD')).toBe(true);
  });

  it('getStringField returns trimmed string or undefined', () => {
    expect(getStringField({ foo: '  bar ' }, 'foo')).toBe('bar');
    expect(getStringField({}, 'foo')).toBeUndefined();
    expect(getStringField(null as unknown as object, 'foo')).toBeUndefined();
  });

  it('buildErrorMessage formats messages from different shapes', () => {
    const resp = { status: 400, statusText: 'Bad Request', headers: new Headers(), url: 'http://x' } as unknown as Response;
    const data1 = 'plain text error';
    expect(buildErrorMessage(resp, data1)).toContain('HTTP 400');
    const data2 = { title: 'T', detail: 'D' };
    expect(buildErrorMessage(resp, data2)).toContain('T — D');
  });

  it('parseErrorBody parses json and falls back to text', async () => {
    const jsonBody = new Response(JSON.stringify({ a: 1 }), { status: 400, headers: { 'content-type': 'application/json' } });
    const parsed = await parseErrorBody(jsonBody as unknown as Response, 'POST');
    expect(parsed).toEqual({ a: 1 });

    const textBody = new Response('plain', { status: 400, headers: { 'content-type': 'text/plain' } });
    const parsed2 = await parseErrorBody(textBody as unknown as Response, 'POST');
    expect(parsed2).toBe('plain');
  });

  it('parseSuccessBody handles json/text/blob', async () => {
    const jsonBody = new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
    const out = await parseSuccessBody(jsonBody as unknown as Response, 'auto', { method: 'GET', url: '/' });
    expect(out).toEqual({ ok: true });

    const textBody = new Response('hello', { status: 200, headers: { 'content-type': 'text/plain' } });
    const out2 = await parseSuccessBody(textBody as unknown as Response, 'auto', { method: 'GET', url: '/' });
    expect(out2).toBe('hello');
  });

  it('customFetch attaches bearer token and applies baseUrl to relative paths', async () => {
    setBaseUrl('https://api.example.com');
    setAuthTokenGetter(() => 'token-123');

    const mockResponse = new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const fetchMock = vi.fn(() => Promise.resolve(mockResponse));
    globalThis.fetch = fetchMock as typeof globalThis.fetch;

    const result = await customFetch<{ ok: boolean }>('/test', {
      responseType: 'json',
      method: 'GET',
    });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledOnce();

    const [url, requestInit] = fetchMock.mock.calls[0] as any as [RequestInfo, RequestInit?];
    expect(url).toBe('https://api.example.com/test');

    const headers = new Headers((requestInit ?? {}).headers || undefined);
    expect(headers.get('authorization')).toBe('Bearer token-123');
    expect(headers.get('accept')).toBe('application/json, application/problem+json');
  });

  it('customFetch sets JSON content-type for string bodies and returns null for empty text responses', async () => {
    const mockResponse = new Response('', {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    });

    const fetchMock = vi.fn(() => Promise.resolve(mockResponse));
    globalThis.fetch = fetchMock as typeof globalThis.fetch;

    const result = await customFetch<string>('/submit', {
      responseType: 'text',
      method: 'POST',
      body: JSON.stringify({ value: 1 }),
    });

    expect(result).toBeNull();
    expect(fetchMock).toHaveBeenCalledOnce();

    const requestInit = (fetchMock.mock.calls[0] as any)[1] as RequestInit | undefined;
    const headers = new Headers((requestInit ?? {}).headers || undefined);
    expect(headers.get('content-type')).toBe('application/json');
  });

  it('customFetch throws ApiError with parsed JSON body on non-ok responses', async () => {
    const mockResponse = new Response(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
      statusText: 'Bad Request',
      headers: { 'content-type': 'application/json' },
    });

    const fetchMock = vi.fn(() => Promise.resolve(mockResponse));
    globalThis.fetch = fetchMock as typeof globalThis.fetch;

    await expect(
      customFetch('/error', {
        responseType: 'json',
        method: 'GET',
      }),
    ).rejects.toMatchObject({
      name: 'ApiError',
      status: 400,
      statusText: 'Bad Request',
      message: expect.stringContaining('Bad request'),
    });
  });
});
