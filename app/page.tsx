import { SiteHeader } from "@/components/layout/SiteHeader";
import { AngledDivider } from "@/components/ui/AngledDivider";
import { SectionBreather } from "@/components/ui/SectionBreather";
import { AboutSewo } from "@/components/sections/AboutSewo";
import { AthleteOffersProof } from "@/components/sections/AthleteOffersProof";
import { BookingSection } from "@/components/sections/BookingSection";
import { FilmJourney } from "@/components/sections/FilmJourney";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { InstagramTraining } from "@/components/sections/InstagramTraining";
import { PerformancePillars } from "@/components/sections/PerformancePillars";
import { Programs } from "@/components/sections/Programs";
import { TrainingFilmRoom } from "@/components/sections/TrainingFilmRoom";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
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
        <BookingSection />
        <FinalCTA />
      </main>
    </>
  );
}
