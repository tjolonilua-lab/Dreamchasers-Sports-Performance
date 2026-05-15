import { InstagramEmbeds } from "@/components/social/InstagramEmbeds";
import { InstagramFeedGrid } from "@/components/social/InstagramFeedGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { getInstagramFeed } from "@/lib/instagram-feed";
import {
  instagramReelsUrl,
  instagramUsername,
  parseInstagramEmbedUrls,
} from "@/lib/site-content";

/** Proof-forward layout — media column dominates (~72 / 170 ≈ 70%). */
const layoutGrid =
  "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:items-start lg:gap-14 xl:gap-16";

const proofEyebrow =
  "mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-dsp-blue";

export async function InstagramTraining() {
  const feed = await getInstagramFeed();
  const embeds = parseInstagramEmbedUrls();

  return (
    <SectionShell
      id="instagram"
      eyebrow="Proof & updates"
      title="See Real Training. Real Results."
      description="Clip-length proof from actual DSP sessions — drills, speed work, group energy, and athlete wins posted weekly."
      density="airy"
      animateEnter
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-br from-dsp-bg via-dsp-navy/35 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute -right-20 top-20 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.12)_0%,transparent_62%)] blur-3xl"
        aria-hidden
      />

      <div className={`relative z-[1] ${layoutGrid}`}>
        {/* Copy column — minimal chrome; reads like manifesto */}
        <div className="order-2 flex flex-col justify-center border-l-2 border-dsp-blue/40 pl-6 lg:order-1 lg:max-w-md xl:max-w-lg xl:pl-8">
          <span className={proofEyebrow}>The receipts</span>
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-dsp-blue/35 bg-dsp-blue/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-dsp-blue">
            @{instagramUsername}
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/78">
            Follow along between visits: raw reps, coaching cues, and highlights from
            athletes training here — not polished ads.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
            Real sessions · Real athletes · Real progress
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={instagramReelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center sm:w-auto sm:min-w-[200px]"
            >
              Watch Training Videos
            </ButtonLink>
            <ButtonLink href="#film" variant="outline" className="w-full justify-center sm:w-auto">
              Watch The Journey
            </ButtonLink>
          </div>
          <ul className="mt-10 space-y-3 border-l border-white/[0.08] pl-5 text-sm leading-snug text-white/58">
            <li>Speed &amp; agility drills you&apos;ll recognize from session floor</li>
            <li>Youth groups and camp dates when enrollment opens</li>
            <li>Before/after energy — accountability posts from athletes who show up</li>
          </ul>
        </div>

        <div className="order-1 min-h-0 w-full lg:order-2">
          <div className="dsp-instagram-media-alive relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-dsp-surface/25 via-dsp-bg/55 to-dsp-bg p-4 shadow-[0_32px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.07] sm:p-6">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-dsp-blue/[0.05] via-transparent to-transparent opacity-80"
              aria-hidden
            />
            <div className="relative flex min-h-0 flex-1 flex-col">
              {feed?.length ? (
                <>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-dsp-blue/95">
                    Fresh clips from the feed
                  </p>
                  <div className="min-h-0 flex-1">
                    <InstagramFeedGrid
                      items={feed}
                      className="gap-4 sm:grid-cols-2 sm:gap-5"
                    />
                  </div>
                </>
              ) : embeds.length ? (
                <>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-dsp-blue/95">
                    Train like this every week
                  </p>
                  <div className="flex min-h-[min(72vw,460px)] flex-1 flex-col justify-start lg:min-h-[500px]">
                    <InstagramEmbeds urls={embeds} className="w-full flex-1" />
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-white/65 sm:p-8">
                  <p className="font-display text-2xl uppercase tracking-[0.1em] text-white sm:text-3xl">
                    Connect Instagram for live proof
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed">
                    Wire a{" "}
                    <strong className="text-white/92">Business or Creator</strong> account via
                    Meta&apos;s Graph API so this column auto-fills with reels and posts. Add
                    these{" "}
                    <strong className="text-white/92">server-only</strong> env vars on your host
                    (e.g. Vercel → Environment Variables):
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/68">
                    <li>
                      <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                        INSTAGRAM_ACCESS_TOKEN
                      </code>{" "}
                      — long-lived Page token linked to the IG account
                    </li>
                    <li>
                      <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                        INSTAGRAM_BUSINESS_ACCOUNT_ID
                      </code>{" "}
                      — IG Business Account ID from Graph / Meta
                    </li>
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-white/52">
                    Fallback: permalinks in{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                      NEXT_PUBLIC_INSTAGRAM_POST_URLS
                    </code>{" "}
                    until API keys are live.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
