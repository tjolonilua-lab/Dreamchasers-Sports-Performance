"use client";

import { IntakeInquiryForm } from "@/components/sections/IntakeInquiryForm";
import { trainingInterestValues } from "@/lib/booking-schema";
import {
  formatTrainingPackageLabel,
  getTrainingPackage,
  type TrainingPackageId,
} from "@/lib/training-packages";
import { scrollToSectionId } from "@/lib/scroll-to-section";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const ScheduleSessionForm = dynamic(
  () =>
    import("@/components/sections/ScheduleSessionForm").then(
      (m) => m.ScheduleSessionForm,
    ),
  {
    loading: () => (
      <p className="text-sm text-white/55" aria-live="polite">
        Loading scheduler…
      </p>
    ),
  },
);

type TabId = "schedule" | "intake";

type TrainingInterest = (typeof trainingInterestValues)[number];

/** Reads inquiry/package query params without forcing the homepage to be dynamic. */
function BookingSectionWithSearchParams() {
  const searchParams = useSearchParams();
  const youthCampInquiry = searchParams.get("inquiry") === "youth-camp";
  const packageId = getTrainingPackage(searchParams.get("package"))?.id;

  // Remount when package/inquiry deep-links change so the select prefills fresh.
  return (
    <BookingSectionInner
      key={`${packageId ?? "none"}-${youthCampInquiry ? "camp" : "std"}`}
      youthCampInquiry={youthCampInquiry}
      defaultPackageId={packageId}
    />
  );
}

export function BookingSection() {
  return (
    <Suspense fallback={<BookingSectionInner youthCampInquiry={false} />}>
      <BookingSectionWithSearchParams />
    </Suspense>
  );
}

function BookingSectionInner({
  youthCampInquiry,
  defaultPackageId,
}: {
  youthCampInquiry: boolean;
  defaultPackageId?: TrainingPackageId;
}) {
  const [tab, setTab] = useState<TabId>(() =>
    youthCampInquiry && !defaultPackageId ? "intake" : "schedule",
  );
  const [inquiryDefaultInterest] = useState<TrainingInterest | undefined>(() =>
    youthCampInquiry ? "Youth Camp" : undefined,
  );
  const pkg = getTrainingPackage(defaultPackageId);

  useEffect(() => {
    if (!defaultPackageId) return;
    scrollToSectionId("book");
  }, [defaultPackageId]);

  return (
    <div className="mx-auto max-w-3xl">
      {pkg ? (
        <p className="mb-6 rounded-sm border border-dsp-blue/30 bg-dsp-blue/[0.08] px-4 py-3 text-sm text-white/80">
          Package selected:{" "}
          <span className="font-semibold text-dsp-blue">
            {formatTrainingPackageLabel(pkg)}
          </span>
          . Confirm details below and we&apos;ll follow up to lock times.
        </p>
      ) : null}

      <div className="mb-8 flex flex-wrap gap-2">
        <TabButton active={tab === "schedule"} onClick={() => setTab("schedule")}>
          Schedule a session
        </TabButton>
        <TabButton active={tab === "intake"} onClick={() => setTab("intake")}>
          General inquiry
        </TabButton>
      </div>

      {tab === "schedule" ? (
        <ScheduleSessionForm defaultPackageId={defaultPackageId} />
      ) : (
        <IntakeInquiryForm
          defaultTrainingInterest={inquiryDefaultInterest}
          defaultPackageId={defaultPackageId}
        />
      )}
    </div>
  );
}

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-xs ${
        active
          ? "scale-[1.02] bg-dsp-blue text-dsp-bg shadow-[0_0_24px_rgba(0,212,255,0.38)]"
          : "border border-white/12 bg-white/[0.04] text-white/65 hover:border-dsp-blue/45 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
