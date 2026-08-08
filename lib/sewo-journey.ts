/**
 * Visual timeline stages for Sewo's Journey (homepage).
 * Pairs with Film Journey video bands and About copy.
 */

export type JourneyStage = {
  id: string;
  title: string;
  era: string;
  summary: string;
  lesson: string;
  filmHref?: string;
};

export const SEWO_JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "youth",
    title: "Youth football",
    era: "Grassroots",
    summary:
      "Early film and competitive fire — the first chapter of chasing bigger stages.",
    lesson: "Love the work before the spotlight arrives.",
    filmHref: "#film",
  },
  {
    id: "high-school",
    title: "High school",
    era: "Kingwood",
    summary:
      "Kingwood production, national exposure, and a recruiting path that demanded discipline.",
    lesson: "Verified Friday-night tape opens Power Five doors.",
    filmHref: "#film",
  },
  {
    id: "tcu",
    title: "TCU",
    era: "College",
    summary:
      "Horned Frogs workload, bowl-stage moments, and the patience required at the highest college level.",
    lesson: "Production and preparation beat hype.",
    filmHref: "#film",
  },
  {
    id: "nfl",
    title: "NFL",
    era: "Dallas Cowboys",
    summary:
      "Combine invite, undrafted grind, and earning trust in an NFL locker room.",
    lesson: "Standards don’t drop when the jersey changes.",
    filmHref: "#film",
  },
  {
    id: "transition",
    title: "Injury & transition",
    era: "Career turn",
    summary:
      "A career-altering injury forced a new mission — channeling pro experience into coaching.",
    lesson: "The next chapter can still serve the game.",
  },
  {
    id: "dreamchasers",
    title: "Dreamchasers",
    era: "Today",
    summary:
      "Building athletes who chase the next level with speed, strength, skill, and belief.",
    lesson: "Now it’s my turn to pass it on.",
  },
];

/** Large homepage career metric cards (sourced from existing stat modules). */
export const CAREER_STAT_CARDS: {
  label: string;
  value: string;
  hint: string;
}[] = [
  {
    label: "TCU games",
    value: "51",
    hint: "Regular-season appearances",
  },
  {
    label: "Rushing yards",
    value: "1,624",
    hint: "College career (FBS)",
  },
  {
    label: "Rushing TDs",
    value: "18",
    hint: "Horned Frogs production",
  },
  {
    label: "40-yard",
    value: "4.66s",
    hint: "NFL Combine",
  },
  {
    label: "Vertical",
    value: '36"',
    hint: "NFL Combine",
  },
  {
    label: "Bench (225)",
    value: "25",
    hint: "NFL Combine reps",
  },
];
