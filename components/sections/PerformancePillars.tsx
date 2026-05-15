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
      className="border-y border-white/5 bg-dsp-navy/25"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-sm border border-dsp-blue/35 bg-dsp-surface/60 p-6 shadow-[0_0_0_1px_rgba(0,212,255,0.08)] transition hover:border-dsp-blue hover:shadow-[0_0_32px_rgba(0,212,255,0.18)]"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-dsp-blue/10 blur-2xl transition group-hover:bg-dsp-blue/20"
              aria-hidden
            />
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded border border-dsp-blue/40 bg-dsp-bg/80 text-dsp-blue [&_svg]:h-7 [&_svg]:w-7">
              <p.icon />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
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
