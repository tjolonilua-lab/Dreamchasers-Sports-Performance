"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#film", label: "Film" },
  { href: "#instagram", label: "Instagram" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-dsp-bg/88 shadow-[0_12px_48px_rgba(0,0,0,0.42)] backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 sm:gap-3.5"
        >
          <BrandMark
            priority
            className="opacity-95 transition group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.35)]"
          />
          <div className="min-w-0">
            <span className="font-display text-xl tracking-[0.12em] text-white group-hover:text-dsp-blue sm:text-2xl">
              DREAMCHASERS
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55">
              Sports Performance
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-dsp-blue"
            >
              {l.label}
            </a>
          ))}
          <ButtonLink href="#book" className="!py-2.5 !px-6">
            Book a Session
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink href="#book" className="!py-2 !px-3 text-[10px] sm:!px-4">
            Book a Session
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden className="text-lg leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-dsp-navy/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
