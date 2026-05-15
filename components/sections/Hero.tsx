import { HeroAthleteImage } from "@/components/sections/HeroAthleteImage";
import { BRAND_MONOGRAM_SRC } from "@/lib/brand-assets";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

const credibility = [
  "Former Dallas Cowboy",
  "TCU Football",
  "Youth Performance Coach",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
      <div
        className="dsp-grid-mask pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] z-0 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] sm:top-1/2 sm:opacity-[0.065]"
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
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
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

      {/* Cyan wash behind athlete column */}
      <div
        className="pointer-events-none absolute right-[-18%] top-[18%] z-0 h-[min(120vw,780px)] w-[min(120vw,780px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.22)_0%,rgba(0,149,199,0.08)_38%,transparent_68%)] blur-3xl sm:right-[-12%]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        <div className="relative z-10 lg:col-span-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-dsp-blue">
            Dreamchasers Sports Performance
          </p>
          <h1 className="dsp-display-heading font-display text-[clamp(2.85rem,8.5vw,5.35rem)] uppercase leading-[0.92] tracking-[0.022em] text-white drop-shadow-[0_0_48px_rgba(0,212,255,0.14)]">
            Train Like An NFL Athlete
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-white/82">
            Speed, strength, agility, and confidence training for young athletes ready to
            level up.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="#book">Book a Session</ButtonLink>
            <ButtonLink href="#programs" variant="outline">
              View Programs
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {credibility.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:col-span-7 lg:-mr-6 lg:justify-end xl:-mr-12">
          <div className="relative w-full max-w-[min(94vw,620px)] lg:max-w-[min(118%,640px)] lg:translate-x-2">
            <div
              className="dsp-glow pointer-events-none absolute left-[56%] top-[48%] z-0 h-[min(118vw,620px)] w-[min(118vw,620px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.48]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[52%] top-[50%] z-0 h-[min(100vw,520px)] w-[min(100vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.35)_0%,rgba(0,80,120,0.12)_42%,transparent_70%)] blur-2xl opacity-80"
              aria-hidden
            />

            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-visible sm:max-w-[520px] lg:max-w-none">
              <HeroAthleteImage />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
