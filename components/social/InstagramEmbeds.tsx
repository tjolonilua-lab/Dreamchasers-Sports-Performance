"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type Props = {
  urls: string[];
};

export function InstagramEmbeds({ urls }: Props) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [urls]);

  if (!urls.length) return null;

  const multi = urls.length > 1;

  return (
    <>
      <div
        className={
          multi
            ? "grid gap-8 lg:grid-cols-2"
            : "flex w-full justify-center"
        }
      >
        {urls.map((url) => (
          <div
            key={url}
            className={
              multi ? "flex justify-center" : "w-full max-w-[min(100%,420px)]"
            }
          >
            <blockquote
              className="instagram-media !mx-auto !my-0"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
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
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
