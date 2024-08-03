import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Clothe from '../../image/clothe.jpg'
import Furniture from '../../image/furniture.jpg'
import HeadPhone from '../../image/headphone.jpg'
import HeadPhonee from '../../image/headphone1.jpg'
import { EffectCoverflow } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "../component.css"

const Data = [ 
    {photo : Clothe},
    {photo: HeadPhone},
    {photo:Furniture},
    {photo:HeadPhonee},

]
export default function ProductSlide() {
  return (
    <div>
      <Swiper
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
          <SwiperSlide>
            {
              Data.map((item) => {
                return (
                  <div >
                    <img src={item.photo} alt="Clothe" />
                  </div>
                  )
                  })
            }

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            <div className="swiper-pagination"></div>
        </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
