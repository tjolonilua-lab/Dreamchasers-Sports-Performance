import type { IgFeedItem } from "@/lib/instagram-feed";

type Props = {
  items: IgFeedItem[];
  /** Applied to the grid wrapper (e.g. larger gaps for hero-style layouts). */
  className?: string;
};

/** Thumbnail grid — opens Instagram on click (Graph tokens cannot safely inline-play reels here). */
export function InstagramFeedGrid({ items, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`.trim()}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-sm border border-white/10 bg-black ring-1 ring-white/5 transition hover:border-dsp-blue/45 hover:shadow-[0_0_28px_rgba(0,212,255,0.18)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- IG CDN hostnames vary by edge */}
          <img
            src={item.imageUrl}
            alt={item.caption ? truncateAlt(item.caption) : "Instagram post"}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100"
            aria-hidden
          />
          {item.mediaType === "VIDEO" ? (
            <span className="absolute bottom-2 left-2 rounded-sm bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              Reel / Video
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}

function truncateAlt(caption: string, max = 120): string {
  if (caption.length <= max) return caption;
  return `${caption.slice(0, max)}…`;
}
