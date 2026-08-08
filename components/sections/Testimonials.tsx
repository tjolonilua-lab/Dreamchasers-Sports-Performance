import { SectionShell } from "@/components/ui/SectionShell";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  if (!TESTIMONIALS.length) return null;

  return (
    <SectionShell
      id="testimonials"
      eyebrow="Families & athletes"
      title="What Athletes and Families Are Saying"
      description="Real voices from the Dreamchasers training floor — replace or expand these quotes anytime in lib/testimonials.ts."
      density="default"
      animateEnter
      className="relative border-y border-white/[0.06] bg-gradient-to-b from-dsp-bg via-dsp-navy/25 to-dsp-bg"
    >
      <ul className="grid list-none gap-6 p-0 sm:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <li
            key={`${t.name}-${t.role}`}
            className="flex flex-col border-l-2 border-dsp-blue/45 bg-white/[0.02] px-5 py-5 sm:px-6"
          >
            <p className="flex-1 text-base leading-relaxed text-white/78">
              “{t.quote}”
            </p>
            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {t.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-dsp-blue">
                {t.role}
                {t.detail ? (
                  <span className="text-white/45"> · {t.detail}</span>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
