import { AthleteOfferProofGrid } from "@/components/social/AthleteOfferProofGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { ATHLETE_OFFER_PROOF_POSTS } from "@/lib/site-content";

export function AthleteOffersProof() {
  if (!ATHLETE_OFFER_PROOF_POSTS.length) return null;

  return (
    <SectionShell
      id="offers-proof"
      eyebrow="Offers & commitments"
      title="Proof on the Field. Offers Off It."
      description="Real athletes. Real results. See the moments it happens."
      titleUppercase={false}
      density="default"
      className="relative border-y border-white/[0.06] bg-gradient-to-b from-dsp-bg via-dsp-navy/35 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-64 w-[min(100%,720px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_65%)] blur-2xl"
        aria-hidden
      />

      <div className="relative z-[1]">
        <AthleteOfferProofGrid items={ATHLETE_OFFER_PROOF_POSTS} />

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <ButtonLink
            href="#book"
            className="w-full justify-center sm:w-auto sm:min-w-[220px]"
          >
            Start Your Training Journey
          </ButtonLink>
          <ButtonLink
            href="#instagram"
            variant="outline"
            className="w-full justify-center sm:w-auto sm:min-w-[220px]"
          >
            Watch More Training
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
