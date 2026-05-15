"use client";

type Props = {
  videoId: string;
  /** Shown in the iframe title for assistive tech */
  title: string;
  /** First player in a tab loads eagerly; others defer until near viewport */
  priority?: boolean;
};

/**
 * Inline YouTube embed — keeps visitors on-site while watching curated clips.
 */
export function YouTubeEmbed({ videoId, title, priority }: Props) {
  const src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?modestbranding=1&rel=0`;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-sm bg-black shadow-inner ring-1 ring-white/10">
      <iframe
        title={title}
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full border-0"
      />
    </div>
  );
}
