import { CAREER_STAT_CARDS } from "@/lib/sewo-journey";

/** Large visual metrics — sit above the detailed TCU table in About. */
export function CareerStatCards() {
  return (
    <div className="dsp-story-divider">
      <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
        Career numbers that matter
      </h3>
      <p className="dsp-story-body mt-3 max-w-3xl text-sm">
        Headline production and combine markers — full season tables follow below.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
        {CAREER_STAT_CARDS.map((card) => (
          <div
            key={card.label}
            className="border border-white/10 bg-dsp-surface/30 px-4 py-5 ring-1 ring-white/5 sm:px-5"
          >
            <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
              {card.label}
            </dt>
            <dd className="mt-2 font-display text-4xl tracking-[0.04em] text-dsp-blue sm:text-5xl">
              {card.value}
            </dd>
            <p className="mt-2 text-xs text-white/55">{card.hint}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}
