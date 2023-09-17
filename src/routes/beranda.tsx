import { Suspense, lazy } from "react";

const AboutSection = lazy(() => import("@/components/beranda/aboutSection"));
const GaleriSection = lazy(() => import("@/components/beranda/galeriSection"));
const CompetitionSection = lazy(
  () => import("@/components/beranda/competitionSection")
);

export default function Beranda() {
  return (
    <main className="w-4/5 max-w-screen-xl m-auto px-3">
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
      </Suspense>
    </main>
  );
}
