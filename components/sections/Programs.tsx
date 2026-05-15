import { SectionShell } from "@/components/ui/SectionShell";

const programs = [
  {
    title: "1-on-1 Training",
    body: "Personalized coaching for athletes who want focused development.",
  },
  {
    title: "Group Training",
    body: "High-energy sessions for athletes who want to compete and improve together.",
  },
  {
    title: "Youth Performance Camps",
    body: "Structured multi-week programs focused on movement, discipline, and confidence.",
  },
  {
    title: "Football Skill Development",
    body: "Position-aware performance training built from Sewo’s playing experience.",
  },
];

export function Programs() {
  return (
    <SectionShell
      id="programs"
      eyebrow="Training formats"
      title="Programs built for serious athletes"
      description="Pick the structure that fits your athlete—every option is coached with pro-level standards."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((p) => (
          <article
            key={p.title}
            className="clip-path-card group relative overflow-hidden border border-white/10 bg-gradient-to-br from-dsp-surface to-dsp-bg p-8 ring-1 ring-white/5 transition hover:border-dsp-blue/55 hover:shadow-[0_0_40px_rgba(0,212,255,0.16)]"
          >
            <div
              className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rotate-12 bg-dsp-blue/15 blur-3xl transition group-hover:bg-dsp-blue/25"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-sm bg-dsp-blue/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-dsp-blue">
                DSP
              </div>
              <h3 className="font-display text-3xl uppercase tracking-[0.06em] text-white">
                {p.title}
              </h3>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/72">
                {p.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
