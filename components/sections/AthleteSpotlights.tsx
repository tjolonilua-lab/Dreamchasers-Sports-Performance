import { SectionShell } from "@/components/ui/SectionShell";
import { ATHLETE_SPOTLIGHTS } from "@/lib/athlete-spotlights";

export function AthleteSpotlights() {
  if (!ATHLETE_SPOTLIGHTS.length) return null;

  return (
    <SectionShell
      id="athletes"
      eyebrow="Athlete results"
      title="Proof on the Path"
      description="Spotlights from Dreamchasers training and camp — expand with names, schools, and accomplishments as athletes opt in."
      density="default"
      animateEnter
      titleUppercase={false}
      className="relative bg-transparent"
    >
      <ul className="grid list-none gap-5 p-0 sm:grid-cols-3">
        {ATHLETE_SPOTLIGHTS.map((athlete) => (
          <li
            key={`${athlete.name}-${athlete.classYear}`}
            className="flex flex-col border border-white/10 bg-dsp-surface/35 p-5 ring-1 ring-white/5"
          >
            {athlete.statusLabel ? (
              <span className="mb-3 inline-flex w-fit text-[10px] font-semibold uppercase tracking-[0.26em] text-dsp-blue">
                {athlete.statusLabel}
              </span>
            ) : null}
            <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white">
              {athlete.name}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              {athlete.position} · {athlete.classYear}
            </p>
            <p className="mt-1 text-sm text-white/70">{athlete.school}</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Focus
            </p>
            <p className="mt-1 text-sm text-white/75">{athlete.focus}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-white/62">
              {athlete.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
