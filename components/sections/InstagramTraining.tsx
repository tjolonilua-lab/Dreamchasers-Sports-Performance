import { InstagramEmbeds } from "@/components/social/InstagramEmbeds";
import { InstagramFeedGrid } from "@/components/social/InstagramFeedGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { getInstagramFeed } from "@/lib/instagram-feed";
import {
  instagramProfileUrl,
  instagramReelsUrl,
  instagramUsername,
  parseInstagramEmbedUrls,
} from "@/lib/site-content";

const mediaColLabel =
  "mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50";

const panelCard =
  "flex h-full min-h-0 flex-col rounded-sm border border-white/10 bg-dsp-surface/55 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] ring-1 ring-white/5 sm:p-8";

export async function InstagramTraining() {
  const feed = await getInstagramFeed();
  const embeds = parseInstagramEmbedUrls();

  return (
    <SectionShell
      id="instagram"
      eyebrow="Training feed"
      title="Latest work on Instagram"
      description="Follow daily drills, athlete wins, camps, and behind-the-scenes training moments."
      className="border-y border-white/5 bg-dsp-navy/20"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
        <div className={panelCard}>
          <div className="inline-flex items-center gap-3 rounded-sm border border-dsp-blue/35 bg-dsp-blue/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-dsp-blue">
            @{instagramUsername}
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Tap into the living resume—speed sessions, youth classes, group energy,
            and pro-level coaching cues updated regularly on Instagram.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <ButtonLink
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full !min-h-[52px] justify-center sm:flex-1"
            >
              Open Instagram profile
            </ButtonLink>
            <ButtonLink
              href={instagramReelsUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full !min-h-[52px] justify-center sm:flex-1"
            >
              Watch reels
            </ButtonLink>
          </div>
          <ul className="mt-8 space-y-3 border-l border-dsp-blue/40 pl-5 text-sm text-white/65">
            <li>Youth-friendly drills & demonstrations</li>
            <li>Camp announcements & schedules</li>
            <li>Athlete transformations & accountability</li>
          </ul>
        </div>

        <div className={panelCard}>
          {feed?.length ? (
            <>
              <p className={mediaColLabel}>
                Latest posts (auto-synced about every hour)
              </p>
              <div className="min-h-0 flex-1">
                <InstagramFeedGrid items={feed} />
              </div>
            </>
          ) : embeds.length ? (
            <>
              <p className={mediaColLabel}>Featured on Instagram</p>
              <div className="flex min-h-0 flex-1 flex-col justify-start">
                <InstagramEmbeds urls={embeds} />
              </div>
            </>
          ) : (
            <div className="clip-path-card border border-dashed border-white/15 bg-white/[0.02] p-6 text-white/65 sm:p-8">
              <p className="font-display text-3xl uppercase tracking-[0.1em] text-white">
                Automatic Instagram grid
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed">
                Connect a{" "}
                <strong className="text-white">Business or Creator</strong> Instagram
                to Meta&apos;s Graph API, then add these{" "}
                <strong className="text-white">server-only</strong> env vars on your host
                (Vercel → Settings → Environment Variables):
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                    INSTAGRAM_ACCESS_TOKEN
                  </code>{" "}
                  — long-lived Page token with access to the linked IG account
                </li>
                <li>
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                    INSTAGRAM_BUSINESS_ACCOUNT_ID
                  </code>{" "}
                  — numeric IG Business Account ID from Graph API / Meta dashboard
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Optional fallback: comma-separated permalinks in{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
                  NEXT_PUBLIC_INSTAGRAM_POST_URLS
                </code>{" "}
                for embedded posts until API credentials are ready.
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
