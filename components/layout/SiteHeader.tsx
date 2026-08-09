"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { scrollToSectionId, sectionIdFromHref } from "@/lib/scroll-to-section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";

/**
 * Homepage hash links follow on-page section order; dedicated pages sit after
 * the main story sections and before Contact.
 */
const links = [
  { href: "/#youth-camp", label: "Camps" },
  { href: "/#gallery", label: "Media" },
  { href: "/#packages", label: "Training" },
  { href: "/#journey", label: "Journey" },
  { href: "/#athletes", label: "Athletes" },
  { href: "/7v7", label: "7v7" },
  { href: "/recruiting", label: "Recruiting" },
  { href: "/#book", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleInPageNav(e: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = sectionIdFromHref(href);
    if (!id) return;
    // Only intercept when already on the homepage — otherwise let Next route.
    if (pathname !== "/") return;
    e.preventDefault();
    setOpen(false);
    scrollToSectionId(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-dsp-bg/88 shadow-[0_12px_48px_rgba(0,0,0,0.42)] backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
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
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={(e) => handleInPageNav(e, l.href)}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-dsp-blue"
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink
            href="/#book"
            className="!py-2.5 !px-5"
            onClick={(e) => handleInPageNav(e, "/#book")}
          >
            Book Training
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink
            href="/#book"
            className="!py-2 !px-3 text-[10px] sm:!px-4"
            onClick={(e) => handleInPageNav(e, "/#book")}
          >
            Book Training
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
          className="border-t border-white/10 bg-dsp-navy/95 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
                onClick={(e) => {
                  if (sectionIdFromHref(l.href) && pathname === "/") {
                    handleInPageNav(e, l.href);
                  } else {
                    setOpen(false);
                  }
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
