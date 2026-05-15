"use client";

type Props = {
  embedUrl: string;
  /** Shown in the iframe title for assistive tech */
  title: string;
  /** First player in a tab loads eagerly; others defer until near viewport */
  priority?: boolean;
  className?: string;
};

function isAllowedHudlEmbedUrl(raw: string): boolean {
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== "https:") return false;
    const host = u.hostname.toLowerCase();
    return (
      host === "hudl.com" ||
      host.endsWith(".hudl.com") ||
      host === "www.hudl.com"
    );
  } catch {
    return false;
  }
}

/**
 * Hudl highlight embed — paste the iframe `src` from Hudl Share → Embed (HTTPS only).
 */
export function HudlEmbed({
  embedUrl,
  title,
  priority,
  className = "",
}: Props) {
  const ok = isAllowedHudlEmbedUrl(embedUrl);

  if (!ok) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-sm bg-black/80 px-6 text-center shadow-inner ring-1 ring-white/10">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-white">
          Hudl embed blocked
        </p>
        <p className="max-w-sm text-xs leading-relaxed text-white/55">
          Use the HTTPS embed URL from Hudl (Share → Embed). Only{" "}
          <span className="text-white/75">hudl.com</span> hosts are accepted.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-sm bg-black shadow-inner ring-1 ring-white/10 ${className}`}
    >
      <iframe
        title={title}
        src={embedUrl.trim()}
        allow="fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full border-0"
      />
    </div>
  );
}
