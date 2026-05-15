import { BRAND_MONOGRAM_SRC } from "@/lib/brand-assets";
import { ButtonLink } from "@/components/ui/Button";
import { FallbackImg } from "@/components/ui/FallbackImg";
import Image from "next/image";

const credibility = [
  "Former Dallas Cowboy",
  "TCU Football",
  "Youth Performance Coach",
];

/** Add `public/images/sewo-hero-cutout.png` (transparent PNG/WebP) when ready. */
const HERO_IMAGE = "/images/sewo-hero-cutout.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        className="dsp-grid-mask pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.045] sm:top-1/2 sm:opacity-[0.06]"
        aria-hidden
      >
        <Image
          src={BRAND_MONOGRAM_SRC}
          alt=""
          width={560}
          height={560}
          className="w-full object-contain"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
      >
        <svg viewBox="0 0 800 800" className="h-full w-full text-white">
          <title>Graphic accent</title>
          <g stroke="currentColor" strokeWidth="2">
            <line x1="120" y1="-40" x2="680" y2="840" />
            <line x1="-40" y1="120" x2="840" y2="680" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="relative z-10 lg:col-span-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.38em] text-dsp-blue">
            Dreamchasers Sports Performance
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8vw,4.75rem)] uppercase leading-[0.95] tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(0,212,255,0.12)]">
            Train With a Former NFL Athlete
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Speed, strength, agility, and confidence training for young athletes
            ready to level up.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="#book">Book a Session</ButtonLink>
            <ButtonLink href="#programs" variant="outline">
              View Programs
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {credibility.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:col-span-6 lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none">
            <div
              className="dsp-glow pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,420px)] w-[min(90vw,420px)] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            <div
              className="dsp-smoke pointer-events-none absolute inset-6 rounded-full"
              aria-hidden
            />

            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:max-w-[460px]">
              <div className="clip-path-card absolute inset-0 rounded-sm bg-gradient-to-br from-dsp-navy via-dsp-surface to-dsp-bg ring-1 ring-white/10" />
              <div className="relative flex h-full w-full items-end justify-center p-4 pt-10">
                <div className="relative z-10 flex h-full min-h-[280px] w-full flex-col items-center justify-end sm:min-h-[340px]">
                  <div className="relative h-[85%] w-full max-w-[380px]">
                    <FallbackImg
                      src={HERO_IMAGE}
                      alt="Sewo Olonilua — performance coach"
                      className="h-full w-full object-contain object-bottom drop-shadow-[0_12px_48px_rgba(0,212,255,0.22)]"
                      fallback={<HeroFallbackSlot />}
                    />
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFallbackSlot() {
  return (
    <div className="pointer-events-none flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-white/20 bg-white/[0.03] px-6 text-center sm:gap-4 sm:min-h-[300px]">
      <span className="font-display text-3xl uppercase tracking-[0.2em] text-white/35">
        Photo slot
      </span>
      <span className="max-w-[14rem] text-xs uppercase tracking-[0.22em] text-white/45">
        Drop a transparent cutout at{" "}
        <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] tracking-normal text-dsp-blue">
          public/images/sewo-hero-cutout.png
        </code>
      </span>
    </div>
  );
}
