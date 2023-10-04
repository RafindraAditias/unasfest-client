import AboutSection from "@/components/beranda/aboutSection";
import BenefitSection from "@/components/beranda/benefitSection";
import CompetitionSection from "@/components/beranda/competitionSection";
import ContactSection from "@/components/beranda/contactSection";
import Faq from "@/components/beranda/faq";
import GaleriSection from "@/components/beranda/galeriSection";
import TimelineSection from "@/components/beranda/timelineSection";
import { ScrollRestoration } from "react-router-dom";

export default function Beranda() {
  return (
    <main className="w-full max-w-screen-xl m-auto lg:px-3 lg:w-4/5">
      <AboutSection />
      <GaleriSection />
      <CompetitionSection />
      <TimelineSection />
      <BenefitSection />
      <ContactSection />
      <Faq />

      <ScrollRestoration />
    </main>
  );
}
