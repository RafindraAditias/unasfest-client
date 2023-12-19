import { benefitData } from "@/data/benefit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "styles/benefitCarousel.css";

const BenefitCarousel = () => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          grid: { rows: 1, fill: "row" },
        },
        1280: {
          slidesPerView: 2,
          grid: { rows: 2, fill: "row" },
        },
      }}
      spaceBetween={30}
      freeMode={true}
      modules={[Pagination, Grid]}
      pagination={{
        clickable: true,
      }}
      className="w-full h-full mx-auto"
    >
      {benefitData.map(({ Icon, title }) => (
        <SwiperSlide key={title}>
          <div className="w-full text-center p-5 lg:basis-96">
            <div className="w-16 h-16 rounded-full bg-primary-light-a8 m-auto mb-[22px] flex justify-center items-center">
              <Icon color="#004AAD" size={30} />
            </div>
            <h1 className="text-[22px] font-semibold tracking-normal mb-4">
              {title}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BenefitCarousel;
