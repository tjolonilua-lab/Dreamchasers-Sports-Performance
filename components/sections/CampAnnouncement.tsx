import { ButtonLink } from "@/components/ui/Button";
import { CampFlyerPreview } from "@/components/sections/CampFlyerPreview";
import { YOUTH_SPORTS_PERFORMANCE_CAMP } from "@/lib/site-content";

const registerLinkClass =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] duration-200 ease-out transition-[transform,box-shadow,filter,border-color,color,background-color] will-change-transform hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-sm bg-dsp-blue text-dsp-bg shadow-[0_0_32px_rgba(0,212,255,0.42)] hover:shadow-[0_0_44px_rgba(0,212,255,0.55)] hover:brightness-105 active:brightness-95 clip-path-button";

const camp = YOUTH_SPORTS_PERFORMANCE_CAMP;
const headingId = "youth-sports-performance-camp-heading";
const dateHeading = `${camp.dateStart} – ${camp.dateEnd}, ${camp.year}`;

export function CampAnnouncement() {
  return (
    <section
      id="youth-camp"
      className="scroll-mt-24 border-y border-white/[0.08] bg-gradient-to-r from-dsp-navy/55 via-dsp-bg to-dsp-navy/40 py-10 sm:py-12"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-dsp-blue">
              Now enrolling · {camp.programLengthLabel}
            </p>
            <h2
              id={headingId}
              className="dsp-display-heading font-display text-3xl uppercase leading-[0.98] tracking-[0.028em] text-white sm:text-4xl"
            >
              {camp.title}
            </h2>
            <p className="mt-3 text-base font-semibold text-white/90">{dateHeading}</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/72 sm:text-base">
              <li>
                <span className="font-semibold text-white/88">Schedule: </span>
                {camp.scheduleLine}
              </li>
              <li>
                <span className="font-semibold text-white/88">Location: </span>
                {camp.location}
              </li>
              <li>
                <span className="font-semibold text-white/88">{camp.ageRange}</span>
              </li>
              <li>
                <span className="font-semibold text-white/88">Pricing: </span>
                {camp.pricingOncePerWeekLabel} {camp.pricingOncePerWeek};{" "}
                {camp.pricingTwicePerWeekLabel} {camp.pricingTwicePerWeek}
              </li>
            </ul>
            <p className="mt-2 text-sm text-white/55">
              Call to hold a spot, or send an inquiry—we&apos;ll confirm schedule and pricing.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={`tel:${camp.registerPhoneTel}`} className={registerLinkClass}>
                {camp.registerCtaLabel}: {camp.registerPhoneDisplay}
              </a>
              <ButtonLink
                href={camp.registerInquiryHref}
                variant="outline"
                className="clip-path-button"
              >
                {camp.registerInquiryCtaLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <figure className="w-full max-w-[min(280px,88vw)]">
              <CampFlyerPreview
                src={camp.flyerImageSrc}
                alt={camp.flyerImageAlt}
                downloadFilename={camp.flyerDownloadFilename}
              />
              <figcaption className="mt-2 text-center text-[11px] leading-snug text-white/45">
                Click the flyer to view full size or download. Full camp details are in the
                text beside this image.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
