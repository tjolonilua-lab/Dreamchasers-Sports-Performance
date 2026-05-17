/** Curated training-room clips (YouTube thumbnails + modal). */
export type TrainingFilmTag = "Youth" | "High School" | "College" | "Advanced";

export type TrainingFilmRoomClip = {
  youtubeId: string;
  cardTitle: string;
  description: string;
  tag?: TrainingFilmTag;
};

export const TRAINING_FILM_ROOM_CLIPS: TrainingFilmRoomClip[] = [
  {
    youtubeId: "GAheeHgZ4XM",
    cardTitle: "Footwork + leverage",
    tag: "Advanced",
    description:
      "College-era footwork and leverage — tempo and balance you can mirror in your own sessions.",
  },
  {
    youtubeId: "R7fHykrgP6Q",
    cardTitle: "Pro footwork tempo",
    tag: "Advanced",
    description:
      "Combine-style detail: crisp steps and violent intent without wasted motion.",
  },
  {
    youtubeId: "tNwL3ksEax8",
    cardTitle: "Burst under control",
    tag: "Youth",
    description:
      "Middle-school movement quality — speed with control so young athletes build clean habits early.",
  },
  {
    youtubeId: "k9ft_V4kaNY",
    cardTitle: "Accelerate in space",
    tag: "High School",
    description:
      "Early high school burst and body control — translating athleticism into confident Friday-night reps.",
  },
  {
    youtubeId: "SIW332SOA8c",
    cardTitle: "Saturday game speed",
    tag: "College",
    description:
      "Official TCU cut-ups — patience, burst, and finishing in live Horned Frogs reps.",
  },
  {
    youtubeId: "XsWgFPTcjyA",
    cardTitle: "Slow Feet Don't Eat",
    tag: "High School",
    description:
      "Under-the-radar feature — Kingwood High reps with two-way pop before the full recruiting spotlight.",
  },
];
