import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "styles/carousel.css";

interface IProps extends SwiperProps {
  images: Array<string>;
}

function Carousel(props: IProps) {
  const { images, ...rest } = props;

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
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt="carousel"
            className="object-cover w-10 rounded-2xl opacity-50"
            width="200"
            height="500"
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
