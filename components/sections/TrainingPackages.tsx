import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  packageBookingHref,
  TRAINING_PACKAGES_BY_TIER,
} from "@/lib/training-packages";

function PackageCard({
  pkg,
}: {
  pkg: (typeof TRAINING_PACKAGES_BY_TIER)[number]["packages"][number];
}) {
  return (
    <li
      className={`relative flex flex-col border border-white/10 bg-dsp-surface/40 p-6 ring-1 ring-white/5 transition hover:border-dsp-blue/40 ${
        pkg.popular
          ? "shadow-[0_0_40px_rgba(0,212,255,0.14)] sm:-translate-y-1"
          : ""
      }`}
    >
      {pkg.popular ? (
        <span className="mb-3 inline-flex w-fit text-[10px] font-semibold uppercase tracking-[0.26em] text-dsp-blue">
          Most popular
        </span>
      ) : (
        <span className="mb-3 inline-flex h-[15px]" aria-hidden />
      )}
      <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white">
        {pkg.name}
      </h3>
      <p className="mt-3 font-display text-4xl tracking-[0.04em] text-dsp-blue">
        {pkg.priceLabel}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        {pkg.cadence}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/68">
        {pkg.description}
      </p>
      <ButtonLink
        href={packageBookingHref(pkg.id)}
        variant={pkg.popular ? "primary" : "outline"}
        className="mt-6 w-full justify-center"
      >
        {pkg.ctaLabel}
      </ButtonLink>
    </li>
  );
}

export function TrainingPackages() {
  return (
    <SectionShell
      id="packages"
      eyebrow="Training packages"
      title="Clear Pricing. Clear Next Step."
      description="Group and personal training packages for athletes who want consistent reps. Youth camp weekly pricing is listed separately in the camp section."
      density="default"
      animateEnter
      className="relative overflow-hidden bg-gradient-to-b from-dsp-bg via-dsp-navy/30 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-8 z-0 h-56 w-[min(100%,640px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.1)_0%,transparent_68%)] blur-2xl"
        aria-hidden
      />

      <div className="relative z-[1] space-y-12">
        {TRAINING_PACKAGES_BY_TIER.map((tier) => (
          <div key={tier.tier}>
            <div className="mb-6 max-w-2xl">
              <h3 className="font-display text-xl uppercase tracking-[0.1em] text-white">
                {tier.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {tier.summary}
              </p>
            </div>
            <ul className="grid list-none gap-5 p-0 sm:grid-cols-3 sm:gap-6">
              {tier.packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
