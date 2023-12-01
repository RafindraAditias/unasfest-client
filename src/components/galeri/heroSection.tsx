import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "@/assets/gallery/frontview_lomba.webp";
import image2 from "@/assets/gallery/para_juara_lomba.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/swiperProgressBar.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HeroSection() {
  return (
    <section className="w-full h-fit">
      <div className="flex w-4/5 max-w-screen-xl mt-16 lg:mt-32 xl:mt-48 justify-between m-auto flex-col items-center gap-12 lg:flex-row lg:items-start ">
        <div className="w-full lg:w-[40%]">
          <p className="text-active-blue text-base md:text-xl font-bold leading-normal md:mb-5">
            KILAS BALIK
          </p>
          <h1 className="text-2xl md:text-4xl mb-4 font-semibold leading-10 md:mb-10">
            UNAS FEST 2022
          </h1>
          <p className="font-inter text-base md:text-xl font-normal leading-8 text-[#00000099]">
            Kilas balik Universitas Nasional yang diadakan pada tanggal (sekian)
            hingga pada tanggal (sekian). Universitas Nasional Festival atau
            Unas Fest 2022 mengusung tema (apa) yang bertujuan untuk (apa)
            sehingga dapat menjadi salah satu pionir perubahan untuk generasi
            muda Indonesia
          </p>
          <Button className="hidden lg:flex mt-36 w-72 bg-active-blue rounded-[40px] py-8 text-2xl px-0">
            Lihat Galeri
          </Button>
        </div>
        <div className="galeri-hero-section max-w-[773px] min-w-[320px] w-full lg:w-1/2">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="!p-6 !pt-0"
            spaceBetween={100}
          >
            <SwiperSlide>
              <img
                src={image1}
                className="object-cover object-center w-full min-h-[228px] lg:h-[480px] aspect-video rounded-2xl shadow-xl"
                width={770}
                height={480}
                loading="lazy"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <img
                src={image2}
                className="object-cover object-center w-full h-[228px] lg:h-[480px] rounded-2xl shadow-xl"
                width={770}
                height={480}
                loading="lazy"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <Button className="flex text-xl lg:hidden mt-14 w-full max-w-[288px] bg-active-blue rounded-[40px] py-8 lg:text-2xl px-0 mx-auto">
            Lihat Galeri
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
