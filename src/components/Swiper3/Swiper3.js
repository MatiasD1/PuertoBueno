// Importa los componentes de Swiper necesarios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import parqueSanMartin from "../../img/centroPuerto.jpg";
import centroPuerto from "../../img/centroPuerto.jpg";
import balnearioPuntaMogotes from "../../img/balnearioPuntaMogotes.jpg";

export default () => {
  return (
    <div className="swiper-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Swiper
        modules={[Pagination, A11y, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>    

        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={balnearioPuntaMogotes} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parqueSanMartin} alt="Slide 4" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centroPuerto} alt="Slide 5" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
