import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { swiper, swiperSlide } from './Projects.module.css'
import React from 'react'

import 'swiper/css'
import 'swiper/css/navigation'

const Codepens = () => {
  return (
    <Swiper
      className={swiper}
      loop={true}
      slidesPerView={3}
      spaceBetween={0}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        // when window width is >= 700px
        700: {
          slidesPerView: 3,
        },
        // when window width is < 700px
        0: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/xxmNpaj?tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/eYbwPge?default-tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/abPeGJZ?default-tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/BaMNOew?default-tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/vYbyRpN?default-tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
      <SwiperSlide className={swiperSlide}>
        <iframe
          height="300px"
          style={{ width: '300px' }}
          title="100 Days CSS: day #1 "
          src="https://codepen.io/AdiletBaimyrza/embed/YzdbEXp?default-tab=result"
          allowFullScreen="true"
        ></iframe>
      </SwiperSlide>
    </Swiper>
  )
}

export default Codepens
