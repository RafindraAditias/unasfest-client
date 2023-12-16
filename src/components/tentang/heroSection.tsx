import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "@/assets/gallery/para_juara_lomba.webp";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/swiperProgressBar.css";

import image1 from "@/assets/gallery/frontview_lomba.webp";
import Blur from "../ui/blur";

function HeroSection() {
  return (
    <section className="relative w-full h-fit">
      <div className="mt-16 lg:mt-32 xl:mt-48">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl m-auto">
          <div className="md:pl-10 w-4/5 lg:w-1/2 lg:pl-0">
            <h1 className="leading-normal">Universitas Nasional</h1>
            <h1 className="bg-active-blue leading-normal text-white w-fit px-10 relative -left-10">
              Festival
            </h1>

            <div className="block lg:flex">
              <p className="basis-5/6 text-base font-inter my-5 lg:text-2xl">
                Kegiatan tahunan yang diadakan untuk memeriahkan serta merayakan
                Dies Natalis Universitas Nasional ke-74 Tahun. UNAS FEST Tahun
                2023 mengusung tema{" "}
                <span className="italic font-semibold">
                  "Implementasi Teknologi Dalam Kebijakan Ekonomi Biru untuk
                  Mengoptimalkan Inovasi Maritim yang Berkelanjutan di
                  Indonesia".
                </span>
              </p>
            </div>
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
          </div>
        </div>
      </div>
      <Blur className="bg-[#FF2E60] top-0 right-1/4" />
      <Blur className="bg-[#00B1D1] top-1/3 left-1/2" />
      <Blur className="bg-[#FEB7A9] top-0 left-1/4" />
      <Blur className="bg-[#00BF63] top-1/4 left-28" />
      <Blur className="bg-[#8757B0] bottom-1/2 right-28" />
    </section>
  );
}

export default HeroSection;
