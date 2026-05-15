import type { ReactNode } from "react";
import { FallbackImg } from "@/components/ui/FallbackImg";
import { SectionShell } from "@/components/ui/SectionShell";
import { SITE_PHOTO_ASSETS } from "@/lib/site-images";

type ProgramItem = {
  title: string;
  body: string;
  /** Cowboys practice photo — contained ratio inside card */
  featuredPracticePhoto?: boolean;
  icon?: () => ReactNode;
  /** Single highlighted lane — social proof */
  badge?: string;
};

const programs: ProgramItem[] = [
  {
    title: "1-on-1 Training",
    body: "Personalized coaching for athletes who want focused development.",
    icon: IconOneOnOne,
  },
  {
    title: "Group Training",
    body: "High-energy sessions for athletes who want to compete and improve together.",
    icon: IconGroup,
    badge: "Most popular",
  },
  {
    title: "Youth Performance Camps",
    body: "Structured multi-week programs focused on movement, discipline, and confidence.",
    icon: IconCamps,
  },
  {
    title: "Football Skill Development",
    body: "Position-aware performance training built from Sewo’s playing experience.",
    featuredPracticePhoto: true,
  },
];

export function Programs() {
  return (
    <SectionShell
      id="programs"
      eyebrow="Training formats"
      title="Programs built for serious athletes"
      description="Pick the structure that fits your athlete—every option is coached with pro-level standards."
      density="airy"
      animateEnter
      className="relative overflow-hidden bg-gradient-to-b from-dsp-bg via-dsp-navy/20 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-[140%] max-w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.11),transparent_55%)] blur-3xl"
        aria-hidden
      />

      <div
        className="dsp-grid-mask relative z-[1] mb-12 h-16 w-full rounded-full opacity-[0.14] ring-1 ring-white/[0.07]"
        style={{
          background:
            "linear-gradient(102deg, transparent 0%, var(--dsp-navy) 38%, rgba(0, 212, 255, 0.09) 62%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] grid gap-7 md:grid-cols-2 md:gap-8">
        {programs.map((p, i) => (
          <article
            key={p.title}
            className={programCardClass(i, Boolean(p.featuredPracticePhoto), Boolean(p.badge))}
          >
            <div
              className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-dsp-blue/12 blur-3xl transition duration-500 group-hover:bg-dsp-blue/22"
              aria-hidden
            />

            {p.badge ? (
              <div className="absolute right-5 top-5 z-20 inline-flex items-center rounded-full border border-dsp-blue/50 bg-dsp-blue/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-dsp-blue shadow-[0_0_24px_rgba(0,212,255,0.25)] backdrop-blur-sm">
                {p.badge}
              </div>
            ) : null}

            {p.featuredPracticePhoto ? (
              <div className="relative mb-6 w-full shrink-0 overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                <div className="relative aspect-[4/3] max-h-[220px] w-full sm:aspect-[3/2] sm:max-h-[240px]">
                  <FallbackImg
                    src={SITE_PHOTO_ASSETS.cowboysPractice}
                    alt="Sewo Olonilua practices with the Dallas Cowboys at training camp"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    fallback={<FeaturedPhotoFallback />}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-black/45"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-dsp-blue/40 via-transparent to-dsp-bg/80"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dsp-bg/95 via-dsp-bg/25 to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            ) : p.icon ? (
              <div
                className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border bg-dsp-bg/60 text-dsp-blue backdrop-blur-sm [&_svg]:h-7 [&_svg]:w-7 ${accentIconBorder(i)}`}
              >
                <p.icon />
              </div>
            ) : null}

            <div className="relative">
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-white/55">
                DSP
              </div>
              <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">
                {p.title}
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/65">
                {p.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function programCardClass(index: number, featured: boolean, hasBadge: boolean) {
  const base =
    "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] via-dsp-surface/35 to-dsp-bg/90 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.05] transition duration-200 ease-out hover:-translate-y-1.5 hover:border-dsp-blue/40 hover:shadow-[0_28px_64px_rgba(0,212,255,0.12)] hover:ring-dsp-blue/20";

  const accents = [
    "lg:translate-y-2 lg:hover:translate-y-1",
    hasBadge
      ? "border-dsp-blue/25 shadow-[0_0_40px_rgba(0,212,255,0.08)] md:ring-2 md:ring-dsp-blue/15"
      : "",
    "",
    featured
      ? "md:-rotate-[0.25deg] hover:border-dsp-blue/50 hover:shadow-[0_32px_70px_rgba(0,212,255,0.16)]"
      : "",
  ];

  return [base, accents[index] ?? ""].filter(Boolean).join(" ");
}

function accentIconBorder(index: number) {
  const borders = [
    "border-dsp-blue/40 shadow-[0_0_20px_rgba(0,212,255,0.12)]",
    "border-dsp-blue/55 shadow-[0_0_28px_rgba(0,212,255,0.18)]",
    "border-cyan-400/35 shadow-[0_0_18px_rgba(34,211,238,0.12)]",
    "border-dsp-blue/40",
  ];
  return borders[index] ?? borders[0];
}

function FeaturedPhotoFallback() {
  return (
    <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-2 bg-dsp-surface/80 px-6 text-center">
      <span className="font-display text-sm uppercase tracking-[0.2em] text-white/35">
        Photo unavailable
      </span>
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
        <code className="rounded bg-white/10 px-1 text-dsp-blue">
          sewo-cowboys-practice.png
        </code>
      </span>
    </div>
  );
}

function IconOneOnOne() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 20v-1c0-2 2-3.5 6-3.5s6 1.5 6 3.5v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="19" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconGroup() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 19v-1c0-1.5 1.5-2.5 5-2.5M20 19v-1c0-1.5-1.5-2.5-5-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconCamps() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 9h16M8 5V3M16 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 13h4M8 16h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
