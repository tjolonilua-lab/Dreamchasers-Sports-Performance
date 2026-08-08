/**
 * Private training session packages (distinct from Youth Camp weekly pricing).
 * Homepage CTAs deep-link into booking with `?package=<id>#book`.
 */

export const trainingPackageIds = ["single", "four", "eight"] as const;

export type TrainingPackageId = (typeof trainingPackageIds)[number];

export type TrainingPackage = {
  id: TrainingPackageId;
  name: string;
  priceLabel: string;
  cadence: string;
  description: string;
  ctaLabel: string;
  popular?: boolean;
};

export const TRAINING_PACKAGES: TrainingPackage[] = [
  {
    id: "single",
    name: "Single Session",
    priceLabel: "$40",
    cadence: "1 training session",
    description: "Try a session and lock in coaching cues for the next level.",
    ctaLabel: "Book now",
  },
  {
    id: "four",
    name: "4 Sessions",
    priceLabel: "$150",
    cadence: "Train 1× per week for one month",
    description: "Steady weekly reps for speed, strength, and skill carryover.",
    ctaLabel: "Get started",
  },
  {
    id: "eight",
    name: "8 Sessions",
    priceLabel: "$250",
    cadence: "Train 2× per week for one month",
    description: "Most popular — double the floor time to stack measurable gains.",
    ctaLabel: "Get started",
    popular: true,
  },
];

export function getTrainingPackage(
  id: string | null | undefined,
): TrainingPackage | undefined {
  if (!id) return undefined;
  return TRAINING_PACKAGES.find((p) => p.id === id);
}

export function packageBookingHref(id: TrainingPackageId): string {
  return `/?package=${id}#book`;
}
