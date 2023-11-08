'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './swiper.css'

export default function SwiperCaroucel() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 6000 }}
      >
        <SwiperSlide>
          <img src="/images/midia/midia1.jpg" alt="Fotos de eventos" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia2.jpg" alt="Fotos de eventos" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia3.jpg" alt="Fotos de eventos" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia4.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia5.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia6.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia7.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia8.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia9.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="max-w-md max-h-[400px]">
          <img src="/images/midia/midia10.jpg" alt="Fotos de eventos" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}