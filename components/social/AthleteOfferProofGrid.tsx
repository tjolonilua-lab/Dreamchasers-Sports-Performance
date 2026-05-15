"use client";

import type { AthleteOfferProofPost } from "@/lib/site-content";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type Props = {
  items: AthleteOfferProofPost[];
};

export function AthleteOfferProofGrid({ items }: Props) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [items]);

  if (!items.length) return null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((item, index) => (
          <article
            key={`${item.instagramUrl}-${index}`}
            className="group/card clip-path-card flex min-w-0 flex-col overflow-hidden border border-white/10 bg-dsp-surface/55 shadow-[0_0_28px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition duration-300 ease-out motion-reduce:transform-none hover:-translate-y-1 hover:border-dsp-blue/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.14)] motion-reduce:hover:translate-y-0"
          >
            <div className="dsp-instagram-embed-host min-w-0 transition duration-500 ease-out motion-reduce:transition-none group-hover/card:shadow-[0_0_28px_rgba(0,212,255,0.12)]">
              <div className="min-w-0 overflow-hidden transition duration-500 ease-out will-change-transform motion-reduce:transition-none group-hover/card:scale-[1.02] motion-reduce:group-hover/card:scale-100">
                <blockquote
                  className="instagram-media !mx-auto !my-0 max-w-none border-0 !bg-[var(--dsp-surface)] shadow-none"
                  data-instgrm-permalink={item.instagramUrl}
                  data-instgrm-version="14"
                  style={{
                    background: "var(--dsp-surface)",
                    border: "none",
                    borderRadius: "6px",
                    margin: 0,
                    maxWidth: "100%",
                    minWidth: 0,
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View post on Instagram
                  </a>
                </blockquote>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 border-t border-white/[0.06] px-5 py-4">
              <p className="text-sm leading-relaxed text-white/65 line-clamp-4">
                {item.captionExcerpt}
              </p>
              {item.outcome ? (
                <p className="text-sm font-semibold text-dsp-blue">
                  {item.outcome.kind === "offer" ? (
                    <>
                      Offer:{" "}
                      <span className="font-medium text-white/90">
                        {item.outcome.school}
                      </span>
                    </>
                  ) : (
                    <>
                      Committed:{" "}
                      <span className="font-medium text-white/90">
                        {item.outcome.school}
                      </span>
                    </>
                  )}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
