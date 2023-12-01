import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "styles/aboutCarousel.css";
import { useEffect, useState } from "react";

interface IProps extends SwiperProps {
  images: Array<string>;
}

function AboutCarousel(props: IProps) {
  const { images, ...rest } = props;
  const [carouselImages, setCarouselImages] = useState(images);
  useEffect(() => {
    setCarouselImages((current) => current.concat(images));
  }, [images]);

  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      loop={true}
      navigation={true}
      modules={[Navigation, EffectCoverflow, Autoplay]}
      effect="coverflow"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      className="mySwiper"
      {...rest}
    >
      {carouselImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt="carousel"
            className="object-cover w-full rounded-2xl opacity-50"
            width={597}
            height={521}
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AboutCarousel;
