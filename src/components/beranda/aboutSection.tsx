import carousel1 from "@/assets/content/carousel1.webp";
import carousel2 from "@/assets/content/carousel2.webp";
import carousel3 from "@/assets/content/carousel3.webp";
import fragment2 from "@/assets/fragments/fragment2.webp";
import fragment3 from "@/assets/fragments/fragment3.webp";
import fragment4 from "@/assets/fragments/fragment4.webp";
import { lazy } from "react";

const Carousel = lazy(() => import("@/components/carousel"));

function AboutSection() {
  const carouselImages: Array<string> = [carousel1, carousel2, carousel3];

  return (
    <section id="beranda" className="w-full h-fit">
      <div className="flex items-center gap-18">
        <div className="relative">
          <div className="w-[250px] h-[250px] absolute bg-active-blue rounded-full blur-[300px]"></div>
          <p className="text-xl text-active-blue font-bold leading-normal mb-4">
            Universitas Nasional
          </p>
          <h1 className="text-5xl leading-[70px] mb-5 font-bold not-italic">
            Bersama Pionir Perubahan Menuju Indonesia Maritim
          </h1>
          <p className="font-inter text-2xl text-system-grey-600 capitalize font-normal leading-10 pr-20">
            Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscpit
          </p>
        </div>

        <div className="w-[250px] h-[250px] absolute left-1/2 top-1/4 bg-[#6CC8FC] rounded-full blur-[200px]"></div>

        <div className="relative">
          <img
            src={fragment2}
            alt="fragment"
            width={180}
            height={180}
            className="absolute left-0 top-0"
          />
          <img
            src={fragment3}
            alt="fragment"
            width={150}
            height={150}
            className="absolute right-5 bottom-0"
          />
          <div className="w-[250px] h-[250px] absolute right-5 bottom-0 bg-[#FFDE59] rounded-full blur-[300px]"></div>
          <img
            src={fragment4}
            alt="fragment"
            width={230}
            height={230}
            className="absolute -bottom-32 left-16"
          />
          <div className="w-[597px] h-[560px]">
            <Carousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
