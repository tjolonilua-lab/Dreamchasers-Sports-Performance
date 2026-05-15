/**
 * Canonical origin for Open Graph, Twitter cards, and `metadataBase`.
 * Prefer `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://dreamchasers.com`).
 * On Vercel, `VERCEL_URL` is used as a fallback when the public URL env is unset.
 */
export function getMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      const normalized = explicit.replace(/\/+$/, "");
      return new URL(normalized);
    } catch {
      // fall through
    }
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return new URL(`https://${vercel.replace(/^https?:\/\//, "")}`);
  }
  return new URL("http://localhost:3000");
}
