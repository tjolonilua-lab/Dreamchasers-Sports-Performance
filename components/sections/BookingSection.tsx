"use client";

import { IntakeInquiryForm } from "@/components/sections/IntakeInquiryForm";
import { trainingInterestValues } from "@/lib/booking-schema";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

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

/** Reads `?inquiry=youth-camp` on the client without forcing the homepage to be dynamic. */
function BookingSectionWithSearchParams() {
  const searchParams = useSearchParams();
  const youthCampInquiry = searchParams.get("inquiry") === "youth-camp";
  return <BookingSectionInner youthCampInquiry={youthCampInquiry} />;
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
}: {
  youthCampInquiry: boolean;
}) {
  const [tab, setTab] = useState<TabId>(() =>
    youthCampInquiry ? "intake" : "schedule",
  );
  const [inquiryDefaultInterest] = useState<TrainingInterest | undefined>(() =>
    youthCampInquiry ? "Youth Camp" : undefined,
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex flex-wrap gap-2">
        <TabButton active={tab === "schedule"} onClick={() => setTab("schedule")}>
          Schedule a session
        </TabButton>
        <TabButton active={tab === "intake"} onClick={() => setTab("intake")}>
          General inquiry
        </TabButton>
      </div>

      {tab === "schedule" ? (
        <ScheduleSessionForm />
      ) : (
        <IntakeInquiryForm defaultTrainingInterest={inquiryDefaultInterest} />
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
