"use client";

import { processInstagramEmbeds } from "@/lib/instagram-embed";
import Script from "next/script";

/**
 * Single load of Instagram’s embed script for the whole app.
 * Individual grids still call `processInstagramEmbeds()` when their DOM updates.
 */
export function InstagramEmbedScript() {
  return (
    <Script
      src="https://www.instagram.com/embed.js"
      strategy="lazyOnload"
      onLoad={() => processInstagramEmbeds()}
    />
  );
}
