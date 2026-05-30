/**
 * Returns the absolute path to a public asset, correctly prefixed
 * with the Vite base URL (e.g., `/<repo-name>/` on GitHub Pages).
 *
 * Usage:  <img src={asset("/logo.svg")} />
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Ensure no double slashes: base always ends with `/`, path may start with `/`
  return base + path.replace(/^\//, "");
}
