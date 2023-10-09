import AboutSection from "@/components/beranda/aboutSection";
import BenefitSection from "@/components/beranda/benefitSection";
import CompetitionSection from "@/components/beranda/competitionSection";
import ContactSection from "@/components/beranda/contactSection";
import Faq from "@/components/beranda/faq";
import Footer from "@/components/beranda/footer";
import GaleriSection from "@/components/beranda/galeriSection";
import TimelineSection from "@/components/beranda/timelineSection";
import { ScrollRestoration } from "react-router-dom";

export default function Beranda() {
  return (
    <main className="w-full min-h-screen">
      <AboutSection />
      <GaleriSection />
      <CompetitionSection />
      <TimelineSection />
      <BenefitSection />
      <ContactSection />
      <Faq />
      <Footer />

      <ScrollRestoration />
    </main>
  );
}
