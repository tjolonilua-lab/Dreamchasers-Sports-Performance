import { SiteHeader } from "@/components/layout/SiteHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Football Recruiting Hub | Dreamchasers Sports Performance",
  },
  description:
    "Football recruiting Houston — highlight film, contacting coaches, camps, 7v7, college visits, and what coaches look for. Guided by Sewo Olonilua.",
  alternates: { canonical: "/recruiting" },
  openGraph: {
    title: "Football Recruiting Hub | Dreamchasers Sports Performance",
    description:
      "Practical recruiting education from a coach who lived youth → college → NFL.",
    url: "/recruiting",
    images: [
      {
        url: "/images/sewo-cowboys-game.png",
        alt: "Recruiting hub — Dreamchasers Sports Performance",
      },
    ],
  },
};

const topics = [
  {
    title: "How recruiting works",
    body: "Timeline basics, evaluation windows, and what “interest” actually means at different levels.",
  },
  {
    title: "Building a highlight film",
    body: "What belongs on tape, what to cut, and how to keep film coachable and honest.",
  },
  {
    title: "Contacting coaches",
    body: "Professional outreach — who to email, what to include, and how parents can support without overstepping.",
  },
  {
    title: "What college coaches look for",
    body: "Athleticism, production, character, and academic readiness — the full evaluation picture.",
  },
  {
    title: "Camps & exposure",
    body: "How camps, combines, and verified competition fit into a smart recruiting plan.",
  },
  {
    title: "College visits",
    body: "What athletes should notice on campus — culture, coaching, and fit beyond the facilities tour.",
  },
  {
    title: "7v7",
    body: "Competitive environments that sharpen skills and create film — paired with training standards at DSP.",
  },
  {
    title: "Athlete profile (coming)",
    body: "Future shareable profiles with measurables, film, and achievements — content structure is ready for Phase 2.",
  },
];

export default function RecruitingPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <div className="dsp-cinematic-spine fixed inset-0 -z-10" aria-hidden />

        <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-dsp-blue">
              Recruiting hub
            </p>
            <h1 className="dsp-display-heading mt-3 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-white sm:text-6xl">
              Recruiting Without the Guesswork
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Practical guidance for athletes and parents — grounded in a coach who walked
              the path from Kingwood to TCU to the NFL.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/#book">Book training</ButtonLink>
              <ButtonLink href="/7v7" variant="outline">
                View 7v7
              </ButtonLink>
              <ButtonLink href="/#journey" variant="outline">
                Sewo’s journey
              </ButtonLink>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Resources"
          title="Topics We Cover"
          description="Start here, then book training to build the athletic traits and film that recruiting conversations require."
          density="default"
          className="bg-gradient-to-b from-transparent via-dsp-navy/25 to-transparent"
        >
          <ul className="grid list-none gap-5 p-0 sm:grid-cols-2">
            {topics.map((topic) => (
              <li
                key={topic.title}
                className="border border-white/10 bg-dsp-surface/35 p-5 ring-1 ring-white/5"
              >
                <h2 className="font-display text-xl uppercase tracking-[0.1em] text-white">
                  {topic.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {topic.body}
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
