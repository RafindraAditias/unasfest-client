import aboutImage from "@/assets/content/about.webp";
import fragment2 from "@/assets/fragments/fragment2.webp";
import fragment3 from "@/assets/fragments/fragment3.webp";
import fragment4 from "@/assets/fragments/fragment4.webp";
import { Button } from "../ui/button";
import Blur from "../ui/blur";

function AboutSection() {
  return (
    <section id="beranda" className="w-full h-fit mt-10 lg:mt-32 xl:mt-48">
      <div className="w-4/5 max-w[1440px] m-auto flex flex-col items-center gap-16 lg:w-full lg:flex-row lg:items-start lg:gap-10">
        <div className="w-full basis-4/6">
          <h2 className="text-2xl leading-normal font-bold text-active-blue mb-3">
            Universitas Nasional
          </h2>
          <h1 className="text-[32px] font-bold leading-[35px] text-black mb-5 lg:text-5xl lg:leading-[70px]">
            Bersama Pionir Perubahan Menuju Indonesia Maritim
          </h1>
          <p className="font-inter text-base font-normal leading-5 text-system-grey-600 mix-blend-difference lg:text-2xl lg:leading-[40px]">
            Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscpit
          </p>
          <Button className="hidden lg:flex mt-36 w-72 bg-active-blue rounded-[40px] py-8 text-2xl">
            Daftar Perlombaan
          </Button>
        </div>

        <div className="relative w-2/3 max-w-[480px] basis-2/6 lg:w-full">
          <div className="w-full lg:w-[480px] h-fit aspect-[163/112] overflow-hidden rounded-xl">
            <div className="absolute w-full h-full border-dashed border-[4px] border-[#E79FE1] top-3 right-3"></div>
            <img
              src={aboutImage}
              alt="about"
              width={250}
              height={170}
              className="w-full object-cover scale-125"
            />
          </div>

          <img
            src={fragment2}
            alt="fragment"
            width={180}
            height={180}
            className="w-1/2 max-w-[192px] absolute -z-10 -top-1/3 lg:w-48 lg:-top-24"
          />
          <img
            src={fragment3}
            alt="fragment"
            width={200}
            height={340}
            className="w-1/2 absolute -z-10 top-16 right-0"
          />

          <img
            src={fragment4}
            alt="fragment"
            width={230}
            height={230}
            className="w-1/2 absolute -z-10 -left-12"
          />
        </div>

        <Blur className="bg-active-blue" />
        <Blur className="bg-[#00BF63] bottom-0 left-[20%]" />
        <Blur className="top-16 left-1/3 bg-[#6CC8FC] " />
        <Blur className="top-[60%] left-[80%] bg-[#FFDE59]" />
        <Blur className="top-0 right-0 bg-[#CB6CE6]" />
      </div>
    </section>
  );
}

export default AboutSection;
