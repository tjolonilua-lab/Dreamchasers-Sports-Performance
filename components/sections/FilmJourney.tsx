"use client";

import type { AgeBandId } from "@/lib/site-content";
import {
  FILM_JOURNEY_BANDS,
  FILM_JOURNEY_VIDEOS,
  youtubeChannelUrl,
} from "@/lib/site-content";
import { HudlEmbed } from "@/components/ui/HudlEmbed";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { useMemo, useState } from "react";

export function FilmJourney() {
  const [band, setBand] = useState<AgeBandId>("youth");

  const picks = useMemo(() => FILM_JOURNEY_VIDEOS[band], [band]);

  const catalogLabel = youtubeChannelUrl.includes("Sticka4")
    ? "Browse Sticka4 archive (historic uploads)"
    : "Browse YouTube channel";

  return (
    <section id="film" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-dsp-blue">
            Film journey
          </p>
          <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-white sm:text-5xl">
            From youth ball to the NFL
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72">
            Parents can match age-appropriate inspiration — younger athletes start with the
            Sticka4-era uploads from the late 2000s (including the original{" "}
            <span className="text-white">“Sewo Olonilua #4”</span>
            ), while older athletes unlock recruiting tape, TCU film room staples, and pro
            chapters.
          </p>
          {youtubeChannelUrl ? (
            <p className="mt-4">
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-dsp-blue underline-offset-4 hover:underline"
              >
                {catalogLabel}
              </a>
            </p>
          ) : null}
        </header>

        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
          {FILM_JOURNEY_BANDS.map((b) => {
            const active = b.id === band;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setBand(b.id)}
                className={`rounded-sm px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-xs ${
                  active
                    ? "bg-dsp-blue text-dsp-bg shadow-[0_0_24px_rgba(0,212,255,0.35)]"
                    : "border border-white/15 bg-white/5 text-white/65 hover:border-dsp-blue/40 hover:text-white"
                }`}
              >
                {b.title}
              </button>
            );
          })}
        </div>

        <p className="mt-6 max-w-3xl text-sm text-white/65">
          {
            FILM_JOURNEY_BANDS.find((b) => b.id === band)?.pitch
          }
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {picks.length ? (
            picks.map((clip, index) => (
              <article
                key={
                  "youtubeId" in clip ? clip.youtubeId : clip.hudlEmbedUrl
                }
                className="clip-path-card flex flex-col overflow-hidden border border-white/10 bg-dsp-surface/55 shadow-[0_0_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5"
              >
                {"youtubeId" in clip ? (
                  <YouTubeEmbed
                    videoId={clip.youtubeId}
                    title={clip.title}
                    priority={index === 0}
                  />
                ) : (
                  <HudlEmbed
                    embedUrl={clip.hudlEmbedUrl}
                    title={clip.title}
                    priority={index === 0}
                  />
                )}
                <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl uppercase tracking-[0.08em] text-white">
                      {clip.title}
                    </h3>
                    {clip.subtitle ? (
                      <p className="text-sm text-white/60">{clip.subtitle}</p>
                    ) : null}
                  </div>
                  {"youtubeId" in clip ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-dsp-blue underline-offset-4 hover:underline"
                    >
                      Open in YouTube
                    </a>
                  ) : (
                    <a
                      href={clip.hudlPageUrl ?? clip.hudlEmbedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-dsp-blue underline-offset-4 hover:underline"
                    >
                      Open on Hudl
                    </a>
                  )}
                </div>
              </article>
            ))
          ) : (
            <EmptyFilmHint />
          )}
        </div>
      </div>
    </section>
  );
}

function EmptyFilmHint() {
  return (
    <div className="clip-path-card border border-dashed border-white/20 bg-white/[0.03] p-8 text-white/65 sm:col-span-2 lg:col-span-3">
      <p className="font-display text-2xl uppercase tracking-[0.14em] text-white">
        Curate clips for this era
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed">
        Drop age-appropriate picks into{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
          FILM_JOURNEY_VIDEOS
        </code>{" "}
        inside{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-dsp-blue">
          lib/site-content.ts
        </code>
        — YouTube IDs or Hudl embed URLs from Share → Embed. Parents instantly see the
        right motivation layer for their athlete.
      </p>
    </div>
  );
}
