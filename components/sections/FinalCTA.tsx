import { BrandMark } from "@/components/brand/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/contact";
import { instagramProfileUrl, instagramUsername } from "@/lib/site-content";

export function FinalCTA() {
  return (
    <footer className="relative mt-6 pb-12 pt-4">
      <div className="relative overflow-hidden bg-gradient-to-br from-dsp-blue via-dsp-blue to-dsp-blue-deep px-4 py-14 text-dsp-bg sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white, transparent 55%), radial-gradient(circle at 80% 60%, white, transparent 50%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-4xl uppercase tracking-[0.08em] sm:text-5xl">
              Start training this season
            </p>
            <p className="mt-3 max-w-xl text-sm font-medium uppercase tracking-[0.22em] text-dsp-bg/80">
              Elite coaching for athletes who expect more from every rep.
            </p>
          </div>
          <ButtonLink
            href="#book"
            variant="outline"
            className="!scale-100 border-dsp-bg/40 !bg-dsp-bg/10 !text-dsp-bg shadow-[0_0_24px_rgba(0,40,60,0.35)] hover:!scale-[1.03] hover:!border-dsp-bg hover:!bg-dsp-bg hover:!text-white hover:!shadow-[0_0_36px_rgba(255,255,255,0.22)]"
          >
            Book a Session
          </ButtonLink>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4">
            <BrandMark size="lg" className="shrink-0 opacity-90" />
            <div className="min-w-0">
              <p className="font-display text-3xl uppercase tracking-[0.12em] text-white">
                Dreamchasers Sports Performance
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
                Train with intention. Improve your game.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-white/55">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="hover:text-dsp-blue"
            >
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dsp-blue"
            >
              @{instagramUsername}
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.28em] text-white/35">
          © {new Date().getFullYear()} Dreamchasers Sports Performance
        </p>
      </div>
    </footer>
  );
}
