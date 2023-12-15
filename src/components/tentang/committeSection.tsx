import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "styles/timelineCarousel.css";

import pm from "@/assets/committee/project_manager.png";
import bidang_semnas from "@/assets/committee/bidang_semnas.png";
import bidang_it from "@/assets/committee/bidang_it.png";
import deputy_pm from "@/assets/committee/deputy_project_manager.png";

function CommitteSection() {
  return (
    <section className="w-full h-fit font-inter">
      <div className="max-w-screen-xl w-4/5 m-auto">
        <div className="text-[#000] leading-10 mb-24">
          <h1 className="text-3xl font-bold leading-7 lg:text-6xl lg:leading-10">
            STEERING COMMITTE
          </h1>
          <p className="text-xl font-semibold opacity-50 py-2 leading-7 lg:py-5 lg:text-4xl lg:leading-10">
            UNIVERSITAS NASIONAL Festival
          </p>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            freeMode={true}
            modules={[Pagination, Grid]}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            className="w-full h-full mx-auto pb-10"
          >
            {committees.map(({ image, name, position }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-h-[350px] flex justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    width={500}
                    className="w-[300px] h-[350px] object-cover"
                  />
                </div>
                <div className="text-black text-center leading-normal">
                  <h1 className="text-2xl md:text-3xl font-semibold pt-2">
                    {name}
                  </h1>
                  <p className="text-lg md:text-xl font-medium">{position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-[#000] leading-10 mb-24">
          <h1 className="text-3xl font-bold leading-7 lg:text-6xl lg:leading-10">
            UNIVERSITAS NASIONAL FESTIVAL 2023
          </h1>
          <p className="text-xl font-semibold opacity-50 py-2 leading-7 lg:py-5 lg:text-4xl lg:leading-10">
            ANGGOTA ORGANISASI
          </p>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            freeMode={true}
            modules={[Pagination, Grid]}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            className="w-full h-full mx-auto pb-10"
          >
            {committees.map(({ image, name, position }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-h-[350px] flex justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    width={500}
                    className="w-[300px] h-[350px] object-cover"
                  />
                </div>
                <div className="text-black text-center leading-normal">
                  <h1 className="text-2xl md:text-3xl font-semibold pt-2">
                    {name}
                  </h1>
                  <p className="text-lg md:text-xl font-medium">{position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const committees = [
  {
    image: pm,
    name: "Shafa Sabrina",
    position: "Project Manager UNAS FEST 2023",
  },
  {
    image: deputy_pm,
    name: "Emma",
    position: "Deputy Project Manager UNAS FEST 2023",
  },
  {
    image: bidang_it,
    name: "Hansen C",
    position: "Asistem Project Manager UNAS FEST 2023",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
  },
];
export default CommitteSection;
