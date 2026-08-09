/**
 * Smooth in-page scroll that accounts for the sticky site header.
 * Avoids Next.js `/#hash` soft-nav (scroll-to-top then jump).
 */
export function scrollToSectionId(id: string): boolean {
  if (typeof window === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;

  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 80) + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

  const nextUrl = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.pushState(null, "", nextUrl);
  return true;
}

/** Parse `/#section` or `#section` into a section id. */
export function sectionIdFromHref(href: string): string | null {
  if (href.startsWith("/#")) return href.slice(2) || null;
  if (href.startsWith("#")) return href.slice(1) || null;
  return null;
}
