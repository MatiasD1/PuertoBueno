import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';

import flechaDer from "../../img/icons/flechaDer.png";
import flechaIzq from "../../img/icons/flechaIzq.png";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import parqueSanMartin from "../../img/parqueSanMartin.jpg";
import centroPuerto from "../../img/centroPuerto.jpg";
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg";

const Swiper2 = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay, A11y, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={balnearioPuntaMogotes} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 4" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 5" className="slide-image" />
        </SwiperSlide>
      </Swiper>
      
      {/* Imágenes para las flechas de navegación */}
      <img 
        src={flechaDer} 
        alt="Next" 
        className="swiper-button-next-custom swiper-button-custom" 
      />
      <img 
        src={flechaIzq} 
        alt="Prev" 
        className="swiper-button-prev-custom swiper-button-custom" 
      />
    </div>
  );
};

export default Swiper2;
