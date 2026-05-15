import { FallbackImg } from "@/components/ui/FallbackImg";
import { SectionShell } from "@/components/ui/SectionShell";

const bullets = [
  "Former Dallas Cowboys player",
  "TCU football alum",
  "2020 NFL Combine invite",
  "Youth sports performance trainer",
];

/** Optional: `public/images/sewo-about.jpg` — action shot or portrait. */
const ABOUT_IMAGE = "/images/sewo-about.jpg";

export function AboutSewo() {
  return (
    <SectionShell id="about" eyebrow="Coach" title="About Sewo">
      <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative min-h-[280px] overflow-hidden rounded-sm border border-dsp-blue/45 bg-dsp-surface/80 shadow-[0_0_48px_rgba(0,212,255,0.12)] lg:min-h-[420px]">
          <div className="dsp-grid-mask absolute inset-0 z-[1] opacity-40" aria-hidden />
          <div className="absolute inset-0">
            <FallbackImg
              src={ABOUT_IMAGE}
              alt="Sewo Olonilua"
              className="h-full w-full object-cover object-center"
              fallback={<AboutFallback />}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-white/78">
            Sewo Olonilua is a former professional football player and TCU standout
            who brings elite-level experience to youth athlete development. After
            competing at the highest levels of college and professional football,
            Sewo now helps young athletes build the speed, strength, discipline, and
            confidence needed to improve on and off the field.
          </p>
          <ul className="mt-8 space-y-3 border-l-2 border-dsp-blue/50 pl-5">
            {bullets.map((item) => (
              <li
                key={item}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-white/88"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

function AboutFallback() {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-2 px-8 text-center lg:min-h-[420px]">
      <span className="font-display text-2xl uppercase tracking-[0.22em] text-white/30">
        Image placeholder
      </span>
      <span className="max-w-xs text-[11px] uppercase tracking-[0.2em] text-white/45">
        Add{" "}
        <code className="rounded bg-white/10 px-1 text-dsp-blue">
          public/images/sewo-about.jpg
        </code>
      </span>
    </div>
  );
}
