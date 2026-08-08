/**
 * Structured athlete results / spotlights for the homepage trust layer.
 * Curate entries here — photos optional (public paths).
 */

export type AthleteSpotlight = {
  name: string;
  position: string;
  classYear: string;
  school: string;
  focus: string;
  accomplishment: string;
  statusLabel?: string;
};

export const ATHLETE_SPOTLIGHTS: AthleteSpotlight[] = [
  {
    name: "Dreamchasers Athlete",
    position: "Skill / RB",
    classYear: "2027",
    school: "Houston-area HS",
    focus: "Speed · explosion · ball security",
    accomplishment:
      "Stacked weekly DSP sessions and posted measurable gains in acceleration and finishing.",
    statusLabel: "Training",
  },
  {
    name: "Camp Standout",
    position: "Youth athlete",
    classYear: "Ages 6–12",
    school: "Kingwood Middle School camp",
    focus: "Strength · speed · confidence",
    accomplishment:
      "Completed Youth Sports Performance Camp reps with game-day energy and coachable habits.",
    statusLabel: "Camp",
  },
  {
    name: "Next-Level Chaser",
    position: "Athlete development",
    classYear: "2026–2028",
    school: "DSP training roster",
    focus: "Football skills · recruiting readiness",
    accomplishment:
      "Building film, footwork, and the discipline it takes to chase the next level.",
    statusLabel: "Development",
  },
];
