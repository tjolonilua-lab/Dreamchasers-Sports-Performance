"use client";

import { IntakeInquiryForm } from "@/components/sections/IntakeInquiryForm";
import { ScheduleSessionForm } from "@/components/sections/ScheduleSessionForm";
import { SectionShell } from "@/components/ui/SectionShell";
import type { ReactNode } from "react";
import { useState } from "react";

type TabId = "schedule" | "intake";

export function BookingSection() {
  const [tab, setTab] = useState<TabId>("schedule");

  return (
    <SectionShell
      id="book"
      eyebrow="Next step"
      title="Ready to Start Training?"
      description="Lock in preferred session times (with automatic confirmations when email is configured) or send a broader inquiry—we respond with availability and the best training fit."
      className="bg-gradient-to-b from-dsp-bg via-dsp-navy/35 to-dsp-bg"
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

        {tab === "schedule" ? <ScheduleSessionForm /> : <IntakeInquiryForm />}
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
      className={`rounded-sm px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-xs ${
        active
          ? "bg-dsp-blue text-dsp-bg shadow-[0_0_20px_rgba(0,212,255,0.35)]"
          : "border border-white/15 bg-white/5 text-white/65 hover:border-dsp-blue/45 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
