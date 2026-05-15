"use client";

import { InstagramEmbeds } from "@/components/social/InstagramEmbeds";
import type { AthleteOfferProofPost } from "@/lib/site-content";
import { processInstagramEmbeds } from "@/lib/instagram-embed";
import { useEffect } from "react";

type Props = {
  items: AthleteOfferProofPost[];
};

export function AthleteOfferProofGrid({ items }: Props) {
  useEffect(() => {
    processInstagramEmbeds();
    const raf = requestAnimationFrame(() => processInstagramEmbeds());
    const t1 = window.setTimeout(() => processInstagramEmbeds(), 400);
    const t2 = window.setTimeout(() => processInstagramEmbeds(), 1200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((item, index) => (
        <article
          key={`${item.instagramUrl}-${index}`}
          className="group/card flex min-w-0 flex-col rounded-sm border border-white/10 bg-dsp-surface/55 shadow-[0_0_28px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition duration-300 ease-out hover:border-dsp-blue/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.14)]"
        >
          <div className="dsp-instagram-embed-host--offer-proof min-h-[420px] min-w-0 transition duration-300 group-hover/card:shadow-[0_0_28px_rgba(0,212,255,0.12)]">
            <InstagramEmbeds urls={[item.instagramUrl]} />
          </div>

          <div className="flex flex-1 flex-col gap-3 rounded-b-sm border-t border-white/[0.06] px-5 py-4">
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
  );
}
