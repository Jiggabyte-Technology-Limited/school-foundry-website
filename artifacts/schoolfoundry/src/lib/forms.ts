const FORMS_API_BASE_URL = import.meta.env.VITE_FORMS_API_BASE_URL?.trim().replace(/\/$/, "");

export function getFormsApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!FORMS_API_BASE_URL) {
    return normalizedPath;
  }

  return `${FORMS_API_BASE_URL}${normalizedPath}`;
}
