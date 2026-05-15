"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

const outlineLinkClass =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-200 hover:border-dsp-blue hover:text-dsp-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-sm";

type Props = {
  src: string;
  alt: string;
  downloadFilename: string;
};

export function CampFlyerPreview({ src, alt, downloadFilename }: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/flyer relative block w-full cursor-zoom-in overflow-hidden rounded-sm border border-white/12 bg-dsp-surface/60 text-left shadow-[0_0_40px_rgba(0,212,255,0.08)] transition duration-200 hover:border-dsp-blue/40 hover:shadow-[0_0_48px_rgba(0,212,255,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Open camp flyer full size"
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 280px, 88vw"
            className="object-cover object-top transition duration-300 group-hover/flyer:scale-[1.02] motion-reduce:group-hover/flyer:scale-100"
          />
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-3 pt-10 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 opacity-0 transition duration-200 group-hover/flyer:opacity-100 motion-reduce:opacity-100 sm:text-[11px]"
            aria-hidden
          >
            Tap to enlarge · download below
          </span>
        </div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close flyer"
            className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] flex max-h-[92vh] w-full max-w-[min(92vw,560px)] flex-col overflow-hidden rounded-sm border border-white/12 bg-dsp-surface shadow-[0_0_80px_rgba(0,212,255,0.12)] ring-1 ring-dsp-blue/20"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <h2
                id={titleId}
                className="font-display text-lg uppercase tracking-[0.1em] text-white sm:text-xl"
              >
                Camp flyer
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
              {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution lightbox; public asset */}
              <img
                src={src}
                alt={alt}
                className="mx-auto max-h-[min(78vh,900px)] w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-4 py-3 sm:px-5">
              <a
                href={src}
                download={downloadFilename}
                className={outlineLinkClass}
              >
                Download flyer
              </a>
              <Button type="button" variant="primary" onClick={close}>
                Done
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
