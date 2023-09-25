import carousel2 from "@/assets/content/carousel2.webp";
import fragment2 from "@/assets/fragments/fragment2.webp";
import fragment3 from "@/assets/fragments/fragment3.webp";
import fragment4 from "@/assets/fragments/fragment4.webp";
import { Button } from "../ui/button";
import Blur from "../ui/blur";

function AboutSection() {
  return (
    <section id="beranda" className="w-full h-fit mt-10 lg:mt-52">
      <div className="flex gap-32 flex-col lg:items-start lg:gap-18 lg:flex-row">
        <div className="relative basis-3/5">
          <p className="text-2xl text-active-blue font-bold leading-normal mb-4">
            Universitas Nasional
          </p>
          <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-[70px] mb-5 font-bold not-italic">
            Bersama Pionir Perubahan Menuju Indonesia Maritim
          </h1>
          <p className="font-inter text-base leading-5 lg:text-2xl text-system-grey-600 capitalize font-normal lg:leading-10 pr-20">
            Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscpit
          </p>

          <Button className="hidden lg:flex mt-36 w-72 bg-active-blue rounded-[40px] py-8 text-2xl">
            Daftar Perlombaan
          </Button>
        </div>

        <div className="relative basis-2/5 w-fit">
          <img
            src={fragment2}
            alt="fragment"
            width={180}
            height={180}
            className="absolute -top-28 -z-10"
          />
          <img
            src={fragment3}
            alt="fragment"
            width={200}
            height={340}
            className="absolute right-12 top-32 -z-10"
          />

          <img
            src={fragment4}
            alt="fragment"
            width={230}
            height={230}
            className="absolute top-[340px] -left-10 -z-10"
          />

          <div className="w-full max-w-[489px] h-full m-auto overflow-hidden rounded-xl before:content-[''] before:w-full before:max-w-[489px] before:h-full before:border-dashed before:absolute before:right-5 lg:before:right-8 before:top-5 before:border-[4px] before:border-[#E79FE1] before:-z-10">
            <img
              src={carousel2}
              alt="image"
              width={489}
              height={336}
              className="object-cover lg:w-[489px] lg:h-[336px] scale-125"
            />
          </div>
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
