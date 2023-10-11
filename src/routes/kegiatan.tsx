import Footer from "@/components/beranda/footer";
import ContactCard from "@/components/contactCard";
import GuideBook from "@/components/kegiatan/guideBook";
import HeroSection from "@/components/kegiatan/heroSection";
import TimelineSection from "@/components/kegiatan/timelineSection";
import { kegiatanData } from "@/data/kegiatan";
import { useSearchParams } from "react-router-dom";

export default function Kegiatan() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
      {kegiatanData
        .filter((data) => query?.includes(data.title.toLowerCase()))
        .map((data, index) => {
          return (
            <main key={index} className="w-full min-h-screen font-inter">
              <HeroSection data={data} />
              <TimelineSection timlines={data.timeline} />
              <GuideBook />
              <ContactCard />
              <Footer />
            </main>
          );
        })}
    </>
  );
}
