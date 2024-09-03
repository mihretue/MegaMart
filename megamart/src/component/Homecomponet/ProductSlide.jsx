import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Clothe from '../../image/clothe.jpg'
import Furniture from '../../image/furniture.jpg'
import HeadPhone from '../../image/headphone.jpg'
import HeadPhonee from '../../image/headphone1.jpg'
import { EffectCoverflow } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'ionicons/icons';
import "../../index.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Data = [ 
    {photo : Clothe},
    {photo: HeadPhone},
    {photo:Furniture},
    {photo:HeadPhonee},

]
export default function ProductSlide() {
  return (
    <div className='container'>
      <Swiper
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'4'}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0.5,
        }}
        
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
          
            {
              Data.map((item) => {
                return (
                  <SwiperSlide >
                    <img className='w-100 h-100' src={item.photo} alt='product' />
                  </SwiperSlide>
                  )
                  })
            }

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline" className='color-'></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
      </Swiper>
    </div>
  )
}
