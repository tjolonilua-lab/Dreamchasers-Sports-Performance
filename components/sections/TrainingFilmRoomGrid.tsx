"use client";

import { VideoModal } from "@/components/ui/VideoModal";
import type { TrainingFilmRoomClip } from "@/lib/training-film-room-clips";
import { TRAINING_FILM_ROOM_CLIPS } from "@/lib/training-film-room-clips";
import Image from "next/image";
import { useCallback, useState } from "react";

function youtubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}

function clipKey(clip: TrainingFilmRoomClip) {
  return clip.youtubeId;
}

export function TrainingFilmRoomGrid() {
  const [active, setActive] = useState<TrainingFilmRoomClip | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {TRAINING_FILM_ROOM_CLIPS.map((clip) => (
          <FilmRoomCard
            key={clipKey(clip)}
            clip={clip}
            onOpen={() => setActive(clip)}
          />
        ))}
      </div>
      <VideoModal open={active !== null} onClose={close} clip={active} />
    </>
  );
}

function FilmRoomCard({
  clip,
  onOpen,
}: {
  clip: TrainingFilmRoomClip;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group/card relative block w-full min-w-0 cursor-pointer text-left transition duration-300 ease-out motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue"
    >
      <div className="overflow-hidden rounded-sm border border-white/10 bg-dsp-surface/40 shadow-[0_0_28px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition duration-300 group-hover/card:border-dsp-blue/35 group-hover/card:shadow-[0_0_40px_rgba(0,212,255,0.16)]">
        <div className="relative aspect-[9/16] w-full">
          <Image
            src={youtubeThumbnailUrl(clip.youtubeId)}
            alt={`${clip.cardTitle} — video thumbnail`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 ease-out will-change-transform motion-reduce:transition-none group-hover/card:scale-[1.04] motion-reduce:group-hover/card:scale-100"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition duration-300 group-hover/card:from-black/90"
            aria-hidden
          />

          <span
            className="absolute left-1/2 top-[42%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_0_24px_rgba(0,212,255,0.25)] backdrop-blur-sm transition duration-300 group-hover/card:scale-110 group-hover/card:border-dsp-blue/60 group-hover/card:bg-dsp-blue/15 group-hover/card:text-dsp-blue group-hover/card:shadow-[0_0_36px_rgba(0,212,255,0.45)] motion-reduce:group-hover/card:scale-100"
            aria-hidden
          >
            <PlayIcon className="ml-0.5 h-7 w-7" />
          </span>

          <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 sm:p-5">
            {clip.tag ? (
              <span className="inline-block rounded-sm border border-dsp-blue/40 bg-dsp-blue/[0.08] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-dsp-blue">
                {clip.tag}
              </span>
            ) : null}
            <p className="font-display text-xl uppercase tracking-[0.1em] text-white drop-shadow-md sm:text-2xl">
              {clip.cardTitle}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}
