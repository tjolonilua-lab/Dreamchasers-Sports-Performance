"use client";

import type { CampGalleryPhoto } from "@/lib/camp-gallery";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = {
  photos: CampGalleryPhoto[];
};

const AUTO_ADVANCE_MS = 5200;

function sortPhotos(photos: CampGalleryPhoto[]) {
  return [...photos].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
}

export function CampGalleryGrid({ photos }: Props) {
  const ordered = useMemo(() => sortPhotos(photos), [photos]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const active = ordered[index];
  const lightboxPhoto =
    lightboxIndex !== null ? ordered[lightboxIndex] : null;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + ordered.length) % ordered.length);
    },
    [ordered.length],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || ordered.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ordered.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [ordered.length, paused, reduceMotion]);

  useEffect(() => {
    const strip = filmstripRef.current;
    if (!strip) return;
    const thumb = strip.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index, reduceMotion]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i === null ? i : (i + 1) % ordered.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + ordered.length) % ordered.length,
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
  }, [closeLightbox, lightboxIndex, ordered.length]);

  if (!active) return null;

  return (
    <>
      <div
        className="dsp-camp-gallery-showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black/50 shadow-[0_0_48px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-xl sm:max-w-2xl lg:max-w-none lg:aspect-[16/10] lg:max-h-[min(52vh,26rem)]"
            aria-live="polite"
            aria-atomic="true"
          >
            {ordered.map((photo, photoIndex) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(photoIndex)}
                className={`absolute inset-0 cursor-zoom-in transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                  photoIndex === index
                    ? "z-10 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                }`}
                aria-hidden={photoIndex !== index}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={photoIndex === 0}
                  sizes="(min-width: 1024px) 56vw, (min-width: 640px) 72vw, 100vw"
                  className="object-cover object-center"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20"
                  aria-hidden
                />
              </button>
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
              <p
                key={active.caption}
                className="dsp-camp-gallery-caption max-w-xl font-display text-lg uppercase tracking-[0.08em] text-white drop-shadow-md sm:text-xl"
              >
                {active.caption}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                {index + 1} / {ordered.length}
              </p>
            </div>
          </div>

          {ordered.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2.5 text-white/85 backdrop-blur-sm transition hover:border-dsp-blue/50 hover:bg-dsp-blue/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:left-4"
                aria-label="Previous camp photo"
              >
                <ChevronIcon className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2.5 text-white/85 backdrop-blur-sm transition hover:border-dsp-blue/50 hover:bg-dsp-blue/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:right-4"
                aria-label="Next camp photo"
              >
                <ChevronIcon className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        {ordered.length > 1 ? (
          <div className="mt-4 space-y-3">
            <div
              ref={filmstripRef}
              className="dsp-camp-gallery-filmstrip flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Camp photo thumbnails"
            >
              {ordered.map((photo, photoIndex) => {
                const selected = photoIndex === index;
                return (
                  <button
                    key={`thumb-${photo.src}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={photo.caption}
                    onClick={() => setIndex(photoIndex)}
                    className={`relative h-14 w-11 shrink-0 overflow-hidden rounded-sm border transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:h-16 sm:w-12 ${
                      selected
                        ? "border-dsp-blue/70 opacity-100 shadow-[0_0_18px_rgba(0,212,255,0.28)]"
                        : "border-white/10 opacity-55 hover:border-white/25 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-1.5">
              {ordered.map((photo, photoIndex) => (
                <button
                  key={`dot-${photo.src}`}
                  type="button"
                  onClick={() => setIndex(photoIndex)}
                  aria-label={`Show photo ${photoIndex + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    photoIndex === index
                      ? "w-6 bg-dsp-blue"
                      : "w-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {lightboxPhoto ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close gallery photo"
            className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"
            onClick={closeLightbox}
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
                onClick={closeLightbox}
                className="rounded-sm border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-dsp-blue/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-black/40 p-3 sm:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution lightbox */}
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="mx-auto max-h-[min(72vh,860px)] w-auto max-w-full object-contain"
              />
            </div>
            <p className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-white/68 sm:px-5">
              {lightboxPhoto.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
