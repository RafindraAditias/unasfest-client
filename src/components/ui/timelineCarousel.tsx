import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "styles/timelineCarousel.css";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

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
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
      className="timeline-swiper"
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
            <div className="w-full text-[#FFF] text-start my-auto px-6">
              <Popover>
                <PopoverTrigger className="text-start">
                  <h1 className="text-[22px] font-bold line-clamp-1">
                    {timeline.title}
                  </h1>
                </PopoverTrigger>
                <PopoverContent className="top-0">
                  <p>{timeline.title}</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger className="text-start">
                  <p className="text-xs font-normal leading-4 my-[10px] text-pretty line-clamp-2">
                    {timeline.description}
                  </p>
                </PopoverTrigger>
                <PopoverContent className="z-[9999]">
                  <p>{timeline.description}</p>
                </PopoverContent>
              </Popover>
              <div className="flex justify-start items-center gap-1 text-lg font-bold">
                <p className="text-base">
                  {timeline.date?.replace("-", "∙∙∙∙∙")}
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
