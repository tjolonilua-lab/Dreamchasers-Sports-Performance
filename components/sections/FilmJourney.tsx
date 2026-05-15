"use client";

import type { AgeBandId } from "@/lib/site-content";
import {
  FILM_JOURNEY_BANDS,
  FILM_JOURNEY_VIDEOS,
} from "@/lib/site-content";
import { HudlEmbed } from "@/components/ui/HudlEmbed";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Fragment, useMemo, useState } from "react";

const TIMELINE_LABEL: Record<AgeBandId, string> = {
  youth: "Youth",
  highSchool: "HS",
  college: "College",
  pro: "Pro",
};

export function FilmJourney() {
  const [band, setBand] = useState<AgeBandId>("youth");

  const picks = useMemo(() => FILM_JOURNEY_VIDEOS[band], [band]);

  return (
    <section id="film" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dsp-blue/30 to-transparent" />
      <RevealOnScroll className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-dsp-blue">
            Film journey
          </p>
          <h2 className="dsp-display-heading font-display text-4xl uppercase leading-[0.98] tracking-[0.028em] text-white sm:text-5xl">
            From youth ball to the NFL
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/58">
            Parents can match age-appropriate inspiration — younger athletes start with the
            Sticka4-era uploads from the late 2000s (including the original{" "}
            <span className="text-white/92">“Sewo Olonilua #4”</span>
            ), while older athletes unlock recruiting tape, TCU film room staples, and pro
            chapters.
          </p>
        </header>

        {/* Progression rail — youth → HS → college → pro */}
        <div className="mb-8 hidden items-center sm:flex sm:max-w-2xl">
          {FILM_JOURNEY_BANDS.map((b, index) => {
            const active = b.id === band;
            const currentIdx = FILM_JOURNEY_BANDS.findIndex((x) => x.id === band);
            const segmentLit = currentIdx >= index;

            return (
              <Fragment key={b.id}>
                {index > 0 ? (
                  <div
                    className={`mx-2 h-0.5 min-w-[28px] flex-1 rounded-full transition-colors duration-300 ${segmentLit ? "bg-gradient-to-r from-dsp-blue/55 to-dsp-blue/15" : "bg-white/12"}`}
                    aria-hidden
                  />
                ) : null}
                <button
                  type="button"
                  onClick={() => setBand(b.id)}
                  className="group/rail flex shrink-0 flex-col items-center gap-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dsp-blue"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold uppercase tracking-wider transition duration-200 ${
                      active
                        ? "scale-110 border-dsp-blue bg-dsp-blue text-dsp-bg shadow-[0_0_28px_rgba(0,212,255,0.45)]"
                        : segmentLit
                          ? "border-dsp-blue/45 bg-dsp-blue/10 text-dsp-blue"
                          : "border-white/15 bg-white/[0.03] text-white/45 group-hover/rail:border-dsp-blue/35 group-hover/rail:text-white/75"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${active ? "text-dsp-blue" : "text-white/40"}`}
                  >
                    {TIMELINE_LABEL[b.id]}
                  </span>
                </button>
              </Fragment>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 border-b border-white/[0.07] pb-6">
          {FILM_JOURNEY_BANDS.map((b) => {
            const active = b.id === band;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setBand(b.id)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-xs ${
                  active
                    ? "scale-[1.02] bg-dsp-blue text-dsp-bg shadow-[0_0_28px_rgba(0,212,255,0.38)]"
                    : "border border-white/12 bg-white/[0.03] text-white/62 hover:border-dsp-blue/40 hover:text-white"
                }`}
              >
                {b.title}
              </button>
            );
          })}
        </div>

        <p className="mt-6 max-w-3xl text-sm font-medium text-white/58">
          {FILM_JOURNEY_BANDS.find((b) => b.id === band)?.pitch}
        </p>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {picks.length ? (
            picks.map((clip, index) => (
              <article
                key={
                  "youtubeId" in clip ? clip.youtubeId : clip.hudlEmbedUrl
                }
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-dsp-surface/45 to-dsp-bg/85 shadow-[0_24px_48px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.05] transition duration-200 ease-out hover:-translate-y-1 hover:border-dsp-blue/35 hover:shadow-[0_28px_56px_rgba(0,212,255,0.14)]"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="transition duration-500 ease-out group-hover/card:scale-[1.04] group-hover/card:brightness-110">
                    {"youtubeId" in clip ? (
                      <YouTubeEmbed
                        videoId={clip.youtubeId}
                        title={clip.title}
                        priority={index === 0}
                        className="rounded-none ring-0"
                      />
                    ) : (
                      <HudlEmbed
                        embedUrl={clip.hudlEmbedUrl}
                        title={clip.title}
                        priority={index === 0}
                        className="rounded-none ring-0"
                      />
                    )}
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dsp-bg/80 via-transparent to-dsp-blue/[0.06] opacity-0 transition duration-300 group-hover/card:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="relative flex flex-1 flex-col gap-3 px-5 py-5">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl uppercase tracking-[0.05em] text-white">
                      {clip.title}
                    </h3>
                    {clip.subtitle ? (
                      <p className="text-sm text-white/55">{clip.subtitle}</p>
                    ) : null}
                  </div>
                  {"youtubeId" in clip ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex text-[11px] font-semibold uppercase tracking-[0.2em] text-dsp-blue underline-offset-4 transition hover:text-white"
                    >
                      Open in YouTube
                    </a>
                  ) : (
                    <a
                      href={clip.hudlPageUrl ?? clip.hudlEmbedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex text-[11px] font-semibold uppercase tracking-[0.2em] text-dsp-blue underline-offset-4 transition hover:text-white"
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
      </RevealOnScroll>
    </section>
  );
}

function EmptyFilmHint() {
  return (
    <div className="rounded-2xl border border-dashed border-white/18 bg-white/[0.03] p-8 text-white/65 sm:col-span-2 lg:col-span-3">
      <p className="font-display text-2xl uppercase tracking-[0.12em] text-white">
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
