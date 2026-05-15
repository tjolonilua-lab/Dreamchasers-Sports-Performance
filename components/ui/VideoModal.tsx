"use client";

import type { TrainingFilmRoomClip } from "@/lib/site-content";
import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  clip: TrainingFilmRoomClip | null;
};

export function VideoModal({ open, onClose, clip }: Props) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !clip) return null;

  const title = clip.cardTitle;
  const description = clip.description;
  const src = `https://www.youtube.com/embed/${encodeURIComponent(clip.youtubeId)}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close video"
        className="absolute inset-0 bg-black/82 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-[1] w-full max-w-3xl overflow-hidden rounded-sm border border-white/12 bg-dsp-surface shadow-[0_0_80px_rgba(0,212,255,0.12)] ring-1 ring-dsp-blue/20"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <h2
            id={titleId}
            className="min-w-0 font-display text-xl uppercase tracking-[0.08em] text-white sm:text-2xl"
          >
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-sm border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:border-dsp-blue/50 hover:text-dsp-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
          >
            Close
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          <iframe
            key={clip.youtubeId}
            title={title}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full border-0"
          />
        </div>

        <p
          id={descId}
          className="px-4 py-4 text-sm leading-relaxed text-white/65 sm:px-5 sm:py-5"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
