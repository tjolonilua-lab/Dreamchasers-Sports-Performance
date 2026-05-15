"use client";

import type { ReactNode } from "react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Density = "default" | "tight" | "airy";

const densityPadding: Record<Density, string> = {
  default: "py-20 sm:py-24",
  tight: "py-14 sm:py-20",
  airy: "py-24 sm:py-32",
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Vertical rhythm — vary across sections */
  density?: Density;
  /** Fade / lift content once when scrolled into view */
  animateEnter?: boolean;
  /** When false, keep title casing as written (default heading is uppercase). */
  titleUppercase?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  density = "default",
  animateEnter = false,
  titleUppercase = true,
}: Props) {
  const pad = densityPadding[density];

  const body = (
    <>
      <header className="mb-10 max-w-3xl sm:mb-12">
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-dsp-blue">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`dsp-display-heading font-display text-4xl leading-[0.98] tracking-[0.028em] text-white sm:text-5xl sm:tracking-[0.024em] ${
            titleUppercase ? "uppercase" : "normal-case font-bold"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/58">
            {description}
          </p>
        ) : null}
      </header>
      {children}
    </>
  );

  return (
    <section id={id} className={`relative scroll-mt-24 ${pad} ${className}`}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {animateEnter ? <RevealOnScroll>{body}</RevealOnScroll> : body}
      </div>
    </section>
  );
}
