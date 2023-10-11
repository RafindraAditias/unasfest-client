import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "styles/timelineCarousel.css";

export interface timelineCarouselProps {
  timelines: Array<{
    title: string;
    description?: string;
    from?: string;
    to?: string;
    date?: string;
  }>;
}

const TimelineCarousel = ({ timelines }: timelineCarouselProps) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      freeMode={true}
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {timelines?.map((timeline, index) => {
        return (
          <SwiperSlide
            id="slides"
            key={index}
            style={{
              width: "347px",
              height: "150px",
              borderRadius: "10px",
              marginRight: "0px",
            }}
          >
            <div className="absolute w-full h-7 bg-white opacity-10 left-20 -rotate-[55deg]"></div>
            <div className="absolute w-full h-7 bg-white opacity-10 left-32 -rotate-[55deg]"></div>
            <div className="w-full text-[#FFF] text-start my-auto pl-6">
              <h1 className="text-[22px] font-bold">{timeline.title}</h1>
              <p className="text-xs font-normal leading-4 py-[10px] text-pretty">
                {timeline.description}
              </p>
              <div className="flex justify-start items-center gap-1 text-lg font-bold">
                {index === 0 ? (
                  <>
                    <p>
                      {timeline.from?.split(" ")[0]}
                      <span className="text-sm">
                        {timeline.from?.split(" ")[1]}
                      </span>
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
                    <p>{timeline.to}</p>
                  </>
                ) : (
                  <>
                    <p>{timeline.date}</p>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TimelineCarousel;
