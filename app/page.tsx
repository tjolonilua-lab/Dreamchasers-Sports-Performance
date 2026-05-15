import { SiteHeader } from "@/components/layout/SiteHeader";
import { AngledDivider } from "@/components/ui/AngledDivider";
import { AboutSewo } from "@/components/sections/AboutSewo";
import { BookingSection } from "@/components/sections/BookingSection";
import { FilmJourney } from "@/components/sections/FilmJourney";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { InstagramTraining } from "@/components/sections/InstagramTraining";
import { PerformancePillars } from "@/components/sections/PerformancePillars";
import { Programs } from "@/components/sections/Programs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AngledDivider />
        <PerformancePillars />
        <Programs />
        <AboutSewo />
        <FilmJourney />
        <InstagramTraining />
        <BookingSection />
        <FinalCTA />
      </main>
    </>
  );
}
