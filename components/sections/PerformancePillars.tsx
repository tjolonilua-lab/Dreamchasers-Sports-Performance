import { SectionShell } from "@/components/ui/SectionShell";

const pillars = [
  {
    title: "Strength",
    description: "Foundational power built for real sport demands.",
    icon: IconStrength,
  },
  {
    title: "Speed",
    description: "Acceleration and mechanics that transfer to game speed.",
    icon: IconSpeed,
  },
  {
    title: "Agility & Footwork",
    description: "Sharp cuts, reactive movement, and clean foot strike.",
    icon: IconAgility,
  },
  {
    title: "Confidence",
    description: "Discipline, body control, and a competitive mindset.",
    icon: IconConfidence,
  },
];

export function PerformancePillars() {
  return (
    <SectionShell
      eyebrow="Training focus"
      title="Performance pillars"
      description="What athletes develop in every session—clear outcomes, elite standards."
      density="tight"
      animateEnter
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-dsp-bg via-dsp-navy/30 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-dsp-blue/[0.06] to-transparent blur-2xl"
        aria-hidden
      />
      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-dsp-blue/35 hover:shadow-[0_22px_48px_rgba(0,212,255,0.12)]"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-dsp-blue/[0.09] blur-2xl transition duration-300 group-hover:bg-dsp-blue/[0.18]"
              aria-hidden
            />
            <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-dsp-blue/30 bg-dsp-bg/50 text-dsp-blue shadow-[0_0_24px_rgba(0,212,255,0.12)] [&_svg]:h-7 [&_svg]:w-7">
              <p.icon />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function IconStrength() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 14h12v2H6v-2Zm2-4h8v2H8v-2Zm-2 8h12v2H6v-2Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M8 6h8v4H8V6Zm1 10h6v4H9v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 17c3-6 9-9 14-10M9 17l2-5 5 2-2 5M14 7l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAgility() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 19 17 5M10 5h7v7M7 19H4v-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconConfidence() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 6 5v6c0 4 3 7 6 8 3-1 6-4 6-8V5l-6-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m10 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
