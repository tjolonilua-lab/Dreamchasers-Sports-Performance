import { SiteHeader } from "@/components/layout/SiteHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "DreamChasers 7v7 | Compete. Develop. Get Exposure.",
  },
  description:
    "DreamChasers 7v7 football Houston — compete, develop, and earn exposure with coaching rooted in college and NFL experience. Join the team.",
  alternates: { canonical: "/7v7" },
  openGraph: {
    title: "DreamChasers 7v7 | Compete. Develop. Get Exposure.",
    description:
      "Compete, develop, and get recruiting exposure with DreamChasers 7v7.",
    url: "/7v7",
    images: [
      {
        url: "/images/sewo-cowboys-game.png",
        alt: "DreamChasers 7v7 — Dreamchasers Sports Performance",
      },
    ],
  },
};

const pillars = [
  {
    title: "Team",
    body: "Mission-first football — compete hard, protect the brand, and develop together under coaching that has lived the next level.",
  },
  {
    title: "Tournaments",
    body: "Schedule and results will live here as the season calendar locks. Parents get clear dates, locations, and expectations.",
  },
  {
    title: "Highlights",
    body: "Team and individual film from competition — the same standard we bring to training and camp media.",
  },
  {
    title: "College visits",
    body: "Experiences at universities that help athletes understand campus culture, coaching, and what it takes to compete in college.",
  },
  {
    title: "Recruiting education",
    body: "How film, camps, 7v7, and coach contact fit together — without empty promises.",
  },
  {
    title: "Join the team",
    body: "Ready to compete with DreamChasers? Start with an inquiry and we’ll follow up on tryouts, roster spots, and next steps.",
  },
];

export default function SevenV7Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <div className="dsp-cinematic-spine fixed inset-0 -z-10" aria-hidden />

        <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-dsp-blue">
              DreamChasers 7v7
            </p>
            <h1 className="dsp-display-heading mt-3 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-white sm:text-6xl">
              Compete. Develop. Get Exposure.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              A dedicated platform for DreamChasers 7v7 — built for athletes who want
              competitive reps, coaching standards, and a clearer path through the
              recruiting process.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/#book">Join the team</ButtonLink>
              <ButtonLink href="/recruiting" variant="outline">
                Explore recruiting
              </ButtonLink>
              <ButtonLink href="/#book" variant="outline">
                Book training
              </ButtonLink>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Program"
          title="What 7v7 Delivers"
          description="Roster details, tournament calendars, and visit galleries will grow here as the program publishes them — the foundation is ready."
          density="default"
          className="bg-gradient-to-b from-transparent via-dsp-navy/25 to-transparent"
        >
          <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <li
                key={item.title}
                className="border border-white/10 bg-dsp-surface/35 p-5 ring-1 ring-white/5"
              >
                <h2 className="font-display text-xl uppercase tracking-[0.1em] text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>

        <FinalCTA />
      </main>
    </>
  );
}
