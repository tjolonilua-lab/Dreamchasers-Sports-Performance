import { TrainingFilmRoomGrid } from "@/components/sections/TrainingFilmRoomGrid";
import { SectionShell } from "@/components/ui/SectionShell";
import { TRAINING_FILM_ROOM_CLIPS } from "@/lib/training-film-room-clips";

export function TrainingFilmRoom() {
  if (!TRAINING_FILM_ROOM_CLIPS.length) return null;

  return (
    <SectionShell
      id="film-room"
      eyebrow="Training film room"
      title="Train like a Pro"
      description="Real sessions. Real athletes. Real development."
      titleUppercase={false}
      animateEnter
      density="default"
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-dsp-bg via-dsp-navy/25 to-dsp-bg"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />
      <TrainingFilmRoomGrid />
    </SectionShell>
  );
}
