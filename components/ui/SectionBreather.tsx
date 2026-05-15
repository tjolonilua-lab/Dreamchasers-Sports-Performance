/** Atmospheric band between sections — gradient wash, no layout chrome */
export function SectionBreather() {
  return (
    <div
      className="pointer-events-none relative h-20 overflow-hidden bg-dsp-bg sm:h-24"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dsp-navy/45 via-transparent to-dsp-bg" />
      <div className="absolute left-1/2 top-1/2 h-px w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-dsp-blue/35 to-transparent" />
    </div>
  );
}
