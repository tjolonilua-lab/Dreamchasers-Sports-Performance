/**
 * Private training session packages (distinct from Youth Camp weekly pricing).
 * Homepage CTAs deep-link into booking with `?package=<id>#book`.
 */

export type TrainingTier = "group" | "personal";

export const trainingPackageIds = [
  "group-single",
  "group-four",
  "group-eight",
  "personal-single",
  "personal-four",
  "personal-eight",
] as const;

export type TrainingPackageId = (typeof trainingPackageIds)[number];

/** Legacy homepage links used bare size ids — map them to group packages. */
export const LEGACY_TRAINING_PACKAGE_IDS = ["single", "four", "eight"] as const;

export type LegacyTrainingPackageId =
  (typeof LEGACY_TRAINING_PACKAGE_IDS)[number];

export type AnyTrainingPackageId =
  | TrainingPackageId
  | LegacyTrainingPackageId;

const LEGACY_TO_CANONICAL: Record<LegacyTrainingPackageId, TrainingPackageId> =
  {
    single: "group-single",
    four: "group-four",
    eight: "group-eight",
  };

export type TrainingPackage = {
  id: TrainingPackageId;
  tier: TrainingTier;
  tierLabel: string;
  name: string;
  priceLabel: string;
  cadence: string;
  description: string;
  ctaLabel: string;
  popular?: boolean;
};

const GROUP_PACKAGES: TrainingPackage[] = [
  {
    id: "group-single",
    tier: "group",
    tierLabel: "Group",
    name: "Single Session",
    priceLabel: "$40",
    cadence: "1 group training session",
    description: "Try a session and lock in coaching cues for the next level.",
    ctaLabel: "Book now",
  },
  {
    id: "group-four",
    tier: "group",
    tierLabel: "Group",
    name: "4 Sessions",
    priceLabel: "$150",
    cadence: "Train 1× per week for one month",
    description: "Steady weekly reps for speed, strength, and skill carryover.",
    ctaLabel: "Get started",
  },
  {
    id: "group-eight",
    tier: "group",
    tierLabel: "Group",
    name: "8 Sessions",
    priceLabel: "$250",
    cadence: "Train 2× per week for one month",
    description: "Most popular — double the floor time to stack measurable gains.",
    ctaLabel: "Get started",
    popular: true,
  },
];

const PERSONAL_PACKAGES: TrainingPackage[] = [
  {
    id: "personal-single",
    tier: "personal",
    tierLabel: "Personal",
    name: "Single Session",
    priceLabel: "$80",
    cadence: "1 personal session · 50 min",
    description: "One-on-one coaching with full attention on your athlete's goals.",
    ctaLabel: "Book now",
  },
  {
    id: "personal-four",
    tier: "personal",
    tierLabel: "Personal",
    name: "4 Sessions",
    priceLabel: "$300",
    cadence: "Train 1× per week for one month · 50 min sessions",
    description: "Weekly personal reps to build speed, strength, and skill carryover.",
    ctaLabel: "Get started",
  },
  {
    id: "personal-eight",
    tier: "personal",
    tierLabel: "Personal",
    name: "8 Sessions",
    priceLabel: "$550",
    cadence: "Train 2× per week for one month · 50 min sessions",
    description:
      "Most popular — double the floor time for athletes who want faster progress.",
    ctaLabel: "Get started",
    popular: true,
  },
];

export const TRAINING_PACKAGES: TrainingPackage[] = [
  ...GROUP_PACKAGES,
  ...PERSONAL_PACKAGES,
];

export const TRAINING_PACKAGES_BY_TIER: {
  tier: TrainingTier;
  label: string;
  summary: string;
  packages: TrainingPackage[];
}[] = [
  {
    tier: "group",
    label: "Group training",
    summary: "High-energy sessions with other athletes.",
    packages: GROUP_PACKAGES,
  },
  {
    tier: "personal",
    label: "Personal (1-on-1)",
    summary: "50-minute sessions. Multi-session packages run for one month.",
    packages: PERSONAL_PACKAGES,
  },
];

export function normalizeTrainingPackageId(
  id: string | null | undefined,
): TrainingPackageId | undefined {
  if (!id) return undefined;
  if ((trainingPackageIds as readonly string[]).includes(id)) {
    return id as TrainingPackageId;
  }
  if ((LEGACY_TRAINING_PACKAGE_IDS as readonly string[]).includes(id)) {
    return LEGACY_TO_CANONICAL[id as LegacyTrainingPackageId];
  }
  return undefined;
}

export function getTrainingPackage(
  id: string | null | undefined,
): TrainingPackage | undefined {
  const canonical = normalizeTrainingPackageId(id);
  if (!canonical) return undefined;
  return TRAINING_PACKAGES.find((p) => p.id === canonical);
}

export function packageBookingHref(id: TrainingPackageId): string {
  return `/?package=${id}#book`;
}

export function formatTrainingPackageLabel(pkg: TrainingPackage): string {
  return `${pkg.tierLabel} — ${pkg.name} (${pkg.priceLabel})`;
}
