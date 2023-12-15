import ContactSection from "@/components/beranda/contactSection";
import Footer from "@/components/beranda/footer";
import GaleriSection from "@/components/galeri/galeriSection";
import HeroSection from "@/components/galeri/heroSection";
import KegiatanSection from "@/components/galeri/kegiatanSection";
import TrailerSection from "@/components/galeri/trailerSection";

export default function Beranda() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <TrailerSection />
      <KegiatanSection />
      <GaleriSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
