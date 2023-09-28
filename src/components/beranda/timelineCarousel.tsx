import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "styles/timelineCarousel.css";
import { timelineData } from "@/data/timeline";

const TimelineCarousel = () => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      freeMode={true}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {timelineData.map((timeline, index) => {
        return (
          <SwiperSlide
            id="slides"
            key={index}
            style={{
              width: "347px",
              height: "135px",
              borderRadius: "10px",
              marginRight: "0px",
            }}
          >
            <div className="absolute w-full h-7 bg-white opacity-20 left-20 -rotate-[55deg]"></div>
            <div className="absolute w-full h-7 bg-white opacity-40 left-32 -rotate-[55deg]"></div>
            <div className="absolute w-full h-7 bg-white opacity-60 left-44 -rotate-[55deg]"></div>
            <div className="w-full text-white text-start my-auto pl-6">
              <h1 className="text-xl font-bold mb-2">{timeline.title}</h1>
              <div className="flex justify-start items-center gap-1 text-3xl">
                <p>
                  {timeline.from.split(" ")[0]}
                  <span className="text-sm">{timeline.from.split(" ")[1]}</span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="2"
                  viewBox="0 0 34 2"
                  fill="none"
                >
                  <path
                    d="M0 1H33.5"
                    stroke="white"
                    stroke-opacity="0.8"
                    stroke-dasharray="2 2"
                  />
                </svg>
                <p>
                  {timeline.to.split(" ")[0]}
                  <span className="text-sm">{timeline.to.split(" ")[1]}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TimelineCarousel;
