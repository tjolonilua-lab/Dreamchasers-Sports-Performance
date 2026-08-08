import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { SEWO_JOURNEY_STAGES } from "@/lib/sewo-journey";

export function SewoJourneyTimeline() {
  return (
    <SectionShell
      id="journey"
      eyebrow="Sewo’s journey"
      title="From Youth Fields to the NFL — Then Back to the Next Generation"
      description="A visual path through the chapters that shape how Dreamchasers athletes are coached today."
      density="airy"
      animateEnter
      tone="story"
      className="relative overflow-hidden bg-transparent"
    >
      <ol className="relative m-0 list-none space-y-0 border-l border-dsp-blue/35 pl-6 sm:pl-8">
        {SEWO_JOURNEY_STAGES.map((stage, index) => (
          <li key={stage.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[1.55rem] top-1 flex h-3 w-3 items-center justify-center sm:-left-[2.05rem]"
              aria-hidden
            >
              <span className="h-3 w-3 rounded-full bg-dsp-blue shadow-[0_0_16px_rgba(0,212,255,0.55)]" />
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-dsp-blue">
              {String(index + 1).padStart(2, "0")} · {stage.era}
            </p>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
              {stage.title}
            </h3>
            <p className="dsp-story-body mt-3 max-w-2xl text-sm text-white/70">
              {stage.summary}
            </p>
            <p className="mt-3 max-w-2xl text-sm font-medium text-white/88">
              Lesson: {stage.lesson}
            </p>
            {stage.filmHref ? (
              <a
                href={stage.filmHref}
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-dsp-blue transition hover:text-white"
              >
                Watch film from this era
              </a>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="dsp-story-lead mt-12 max-w-2xl text-lg text-white/85">
        Now it&apos;s my turn to pass it on.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="/#book">Book training</ButtonLink>
        <ButtonLink href="/#film" variant="outline">
          Watch the film journey
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
