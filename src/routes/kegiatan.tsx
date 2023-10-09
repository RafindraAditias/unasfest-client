import HeroSection from "@/components/kegiatan/heroSection";
import UnderConstruction from "@/routes/underConstruction";
import { useSearchParams } from "react-router-dom";

export default function Kegiatan() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
      {!query?.includes("debat bahasa indonesia") ? (
        <UnderConstruction />
      ) : (
        <main className="w-full min-h-screen font-inter">
          <HeroSection />
        </main>
      )}
    </>
  );
}
