"use client";

import { SITE_PHOTO_ASSETS } from "@/lib/site-images";
import Image from "next/image";
import { useState } from "react";

const heroClasses =
  "dsp-hero-photo-mask dsp-hero-photo-motion object-cover object-[center_26%]";

export function HeroAthleteImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <HeroFallbackSlot />;
  }

  return (
    <Image
      src={SITE_PHOTO_ASSETS.heroCowboysGame}
      alt="Sewo Olonilua carries the football in a Dallas Cowboys game"
      fill
      priority
      sizes="(max-width: 640px) 94vw, (max-width: 1024px) 52vw, 640px"
      className={`${heroClasses} z-10`}
      onError={() => setFailed(true)}
    />
  );
}

function HeroFallbackSlot() {
  return (
    <div className="dsp-hero-photo-mask pointer-events-none flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-3 px-6 text-center sm:gap-4 sm:min-h-[300px]">
      <span className="font-display text-3xl uppercase tracking-[0.2em] text-white/35">
        Photo slot
      </span>
      <span className="max-w-[14rem] text-xs uppercase tracking-[0.22em] text-white/45">
        Photo missing — add{" "}
        <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] tracking-normal text-dsp-blue">
          public/images/sewo-cowboys-game.png
        </code>
      </span>
    </div>
  );
}
