"use client";

import {
  formatTrainingPackageLabel,
  TRAINING_PACKAGES_BY_TIER,
  type TrainingPackageId,
} from "@/lib/training-packages";

type Props = {
  error?: string;
  defaultPackageId?: TrainingPackageId;
};

/** Uncontrolled select — remount via parent `key` when `?package=` changes. */
export function PackageSelectField({ error, defaultPackageId }: Props) {
  return (
    <div>
      <label
        htmlFor="packageId"
        className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
      >
        Package interest (optional)
      </label>
      <select
        id="packageId"
        name="packageId"
        defaultValue={defaultPackageId ?? ""}
        className="mt-2 w-full rounded-sm border border-white/15 bg-dsp-bg px-4 py-3 text-sm text-white outline-none ring-dsp-blue/40 focus:border-dsp-blue focus:ring-2"
      >
        <option value="">No package selected</option>
        {TRAINING_PACKAGES_BY_TIER.map((tier) => (
          <optgroup key={tier.tier} label={tier.label}>
            {tier.packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {formatTrainingPackageLabel(pkg)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}
