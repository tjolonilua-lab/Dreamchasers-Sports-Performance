/** Instagram oEmbed script — call after blockquotes mount or when the script finishes loading. */
export function processInstagramEmbeds(): void {
  if (typeof window === "undefined") return;
  window.instgrm?.Embeds.process();
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}
