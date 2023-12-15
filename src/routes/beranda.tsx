import AboutSection from "@/components/beranda/aboutSection";
import BenefitSection from "@/components/beranda/benefitSection";
import CompetitionSection from "@/components/beranda/competitionSection";
import ContactSection from "@/components/beranda/contactSection";
import Faq from "@/components/beranda/faq";
import Footer from "@/components/beranda/footer";
import GaleriSection from "@/components/beranda/galeriSection";
import TimelineSection from "@/components/beranda/timelineSection";
import Reveal from "@/components/reveal";

export default function Beranda() {
  return (
    <main className="w-full min-h-screen">
      <AboutSection />
      <Reveal>
        <GaleriSection />
      </Reveal>
      <Reveal>
        <CompetitionSection />
      </Reveal>
      <Reveal>
        <TimelineSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Reveal>
        <BenefitSection />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Footer />
    </main>
  );
}
