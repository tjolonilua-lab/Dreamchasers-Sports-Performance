import { SiteHeader } from "@/components/layout/SiteHeader";
import { AngledDivider } from "@/components/ui/AngledDivider";
import { SectionBreather } from "@/components/ui/SectionBreather";
import { AboutSewo } from "@/components/sections/AboutSewo";
import { AthleteOffersProof } from "@/components/sections/AthleteOffersProof";
import { CampAnnouncement } from "@/components/sections/CampAnnouncement";
import { BookingSection } from "@/components/sections/BookingSection";
import { FilmJourney } from "@/components/sections/FilmJourney";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { InstagramTraining } from "@/components/sections/InstagramTraining";
import { PerformancePillars } from "@/components/sections/PerformancePillars";
import { Programs } from "@/components/sections/Programs";
import { TrainingFilmRoom } from "@/components/sections/TrainingFilmRoom";
import { SectionShell } from "@/components/ui/SectionShell";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CampAnnouncement />
        <AngledDivider />
        <PerformancePillars />
        <SectionBreather />
        <Programs />
        <TrainingFilmRoom />
        <AngledDivider flip />
        <AboutSewo />
        <FilmJourney />
        <InstagramTraining />
        <SectionBreather />
        <AthleteOffersProof />
        <SectionShell
          id="book"
          eyebrow="Next step"
          title="Ready to Start Training?"
          description="Lock in preferred session times (with automatic confirmations when email is configured) or send a broader inquiry—we respond with availability and the best training fit."
          animateEnter
          density="default"
          className="relative overflow-hidden bg-gradient-to-b from-dsp-bg via-dsp-navy/35 to-dsp-bg"
        >
          <BookingSection />
        </SectionShell>
        <FinalCTA />
      </main>
    </>
  );
}
