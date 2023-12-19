import Footer from "@/components/beranda/footer";
import ContactCard from "@/components/contactCard";
import GuideBook from "@/components/kegiatan/guideBook";
import HeroSection from "@/components/kegiatan/heroSection";
import TimelineSection from "@/components/kegiatan/timelineSection";
import { kegiatanData } from "@/data/kegiatan";
import { useSearchParams, useLocation } from "react-router-dom";

export default function Kegiatan() {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const query = searchParams.get("query");

  return (
    <>
      {kegiatanData
        .filter(
          (data) =>
            query?.includes(data.title.toLowerCase()) ||
            pathname.toLowerCase().includes(data.path.toLowerCase())
        )
        .map((data, index) => {
          return (
            <main key={index} className="w-full min-h-screen font-inter">
              <HeroSection data={data} />
              <TimelineSection
                competitionName={data.title}
                timlines={data.timeline}
              />
              <GuideBook guidebook={data.guidebook} />
              <ContactCard />
              <Footer />
            </main>
          );
        })}
    </>
  );
}
