import { Suspense, lazy } from "react";

const AboutSection = lazy(() => import("@/components/beranda/aboutSection"));
const GaleriSection = lazy(() => import("@/components/beranda/galeriSection"));
const CompetitionSection = lazy(
  () => import("@/components/beranda/competitionSection")
);
const TimelineSection = lazy(
  () => import("@/components/beranda/timelineSection")
);
const BenefitSection = lazy(
  () => import("@/components/beranda/benefitSection")
);
const ContactSection = lazy(
  () => import("@/components/beranda/contactSection")
);

export default function Beranda() {
  return (
    <main className="w-full max-w-screen-xl m-auto lg:px-3 lg:w-4/5">
      <Suspense
        fallback={
          <p className="w-full h-screen flex justify-center items-center text-center">
            loading bang...
          </p>
        }
      >
        <AboutSection />
        <GaleriSection />
        <CompetitionSection />
        <TimelineSection />
        <BenefitSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}
