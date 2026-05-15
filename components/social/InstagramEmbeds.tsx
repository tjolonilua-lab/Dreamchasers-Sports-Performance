"use client";

import { processInstagramEmbeds } from "@/lib/instagram-embed";
import { useEffect } from "react";

type Props = {
  urls: string[];
  /** Extra classes on the outer wrapper around embed(s) — site-native chrome. */
  className?: string;
};

export function InstagramEmbeds({ urls, className = "" }: Props) {
  useEffect(() => {
    processInstagramEmbeds();
  }, [urls]);

  if (!urls.length) return null;

  const multi = urls.length > 1;

  return (
    <div
      className={`dsp-instagram-embed-host ${className}`.trim()}
    >
        <div
          className={
            multi
              ? "grid gap-6 lg:grid-cols-2"
              : "flex w-full justify-center"
          }
        >
          {urls.map((url) => (
            <div
              key={url}
              className={
                multi
                  ? "flex min-w-0 justify-center"
                  : "w-full min-w-0 max-w-none"
              }
            >
              <blockquote
                className="instagram-media !mx-auto !my-0 max-w-none border-0 !bg-[var(--dsp-surface)] shadow-none"
                data-instgrm-permalink={url}
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
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View post on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
    </div>
  );
}
