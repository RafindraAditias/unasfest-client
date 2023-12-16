import Footer from "@/components/beranda/footer";
import CommitteSection from "@/components/tentang/committeSection";
import HeroSection from "@/components/tentang/heroSection";
import Unasfest from "@/components/tentang/unasfest";
import Visi_misiSection from "@/components/tentang/visi_misiSection";

export default function Tentang() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <Visi_misiSection />
      <CommitteSection />
      <Unasfest />
      <Footer />
    </main>
  );
}
