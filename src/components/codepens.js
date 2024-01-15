import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import React from 'react'
import styled from '@emotion/styled'

import 'swiper/css'

const pens = [
  'https://codepen.io/AdiletBaimyrza/embed/XWGmdJj',
  'https://codepen.io/AdiletBaimyrza/embed/xxmNpaj',
  'https://codepen.io/AdiletBaimyrza/embed/eYbwPge',
  'https://codepen.io/AdiletBaimyrza/embed/abPeGJZ',
  'https://codepen.io/AdiletBaimyrza/embed/BaMNOew',
  'https://codepen.io/AdiletBaimyrza/embed/vYbyRpN',
  'https://codepen.io/AdiletBaimyrza/embed/YzdbEXp',
  'https://codepen.io/AdiletBaimyrza/embed/mdoJQvR',
]

const Codepens = () => {
  return (
    <Container>
      <h1>More</h1>
      <CustomSwiper
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
        }}
      >
        {pens.map((pen) => (
          <SwiperSlide>
            <Iframe
              title="100 Days CSS: day #1 "
              src={pen}
              allowFullScreen="true"
            ></Iframe>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  )
}

export default Codepens

const Container = styled.div`
  margin: 0 0.2rem 6.5rem 0.2rem;
`

const CustomSwiper = styled(Swiper)`
  margin-top: 3rem;
`
const Iframe = styled.iframe`
  width: 300px;
  height: 300px;
  @media screen and (max-width: 800px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 500px;
    height: 500px;
  }
`
