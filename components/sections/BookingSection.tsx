"use client";

import { IntakeInquiryForm } from "@/components/sections/IntakeInquiryForm";
import { ScheduleSessionForm } from "@/components/sections/ScheduleSessionForm";
import { SectionShell } from "@/components/ui/SectionShell";
import { trainingInterestValues } from "@/lib/booking-schema";
import type { ReactNode } from "react";
import { useState } from "react";

type TabId = "schedule" | "intake";

type TrainingInterest = (typeof trainingInterestValues)[number];

type BookingSectionProps = {
  /** From `/?inquiry=youth-camp#book` — opens General inquiry with Youth Camp pre-selected. */
  youthCampInquiry?: boolean;
};

export function BookingSection({ youthCampInquiry = false }: BookingSectionProps) {
  const [tab, setTab] = useState<TabId>(() => (youthCampInquiry ? "intake" : "schedule"));
  const [inquiryDefaultInterest] = useState<TrainingInterest | undefined>(() =>
    youthCampInquiry ? "Youth Camp" : undefined,
  );

  return (
    <SectionShell
      id="book"
      eyebrow="Next step"
      title="Ready to Start Training?"
      description="Lock in preferred session times (with automatic confirmations when email is configured) or send a broader inquiry—we respond with availability and the best training fit."
      animateEnter
      density="default"
      className="relative overflow-hidden bg-gradient-to-b from-dsp-bg via-dsp-navy/35 to-dsp-bg"
    >
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
    </SectionShell>
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
