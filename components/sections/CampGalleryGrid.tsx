"use client";

import type { CampGalleryPhoto } from "@/lib/camp-gallery";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type Props = {
  photos: CampGalleryPhoto[];
};

export function CampGalleryGrid({ photos }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setActiveIndex((i) =>
          i === null ? i : (i + 1) % photos.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, photos.length]);

  return (
    <>
      <ul className="dsp-camp-gallery-grid list-none p-0">
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            className={
              photo.featured
                ? "dsp-camp-gallery-item dsp-camp-gallery-item--featured"
                : "dsp-camp-gallery-item"
            }
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-sm border border-white/10 bg-black text-left ring-1 ring-white/5 transition hover:border-dsp-blue/45 hover:shadow-[0_0_28px_rgba(0,212,255,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
              aria-haspopup="dialog"
              aria-label={`Open photo: ${photo.caption}`}
            >
              <span
                className={
                  photo.featured
                    ? "relative block aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
                    : "relative block aspect-[3/4] w-full sm:aspect-[4/5]"
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    photo.featured
                      ? "(min-width: 1024px) 42vw, 100vw"
                      : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </span>
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90"
                aria-hidden
              />
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close gallery photo"
            className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] flex max-h-[92vh] w-full max-w-[min(94vw,720px)] flex-col overflow-hidden rounded-sm border border-white/12 bg-dsp-surface shadow-[0_0_80px_rgba(0,212,255,0.12)] ring-1 ring-dsp-blue/20"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <h2
                id={titleId}
                className="min-w-0 font-display text-lg uppercase tracking-[0.1em] text-white sm:text-xl"
              >
                Camp gallery
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="rounded-sm border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-dsp-blue/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-black/40 p-3 sm:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution lightbox */}
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto max-h-[min(72vh,860px)] w-auto max-w-full object-contain"
              />
            </div>
            <p className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-white/68 sm:px-5">
              {active.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
