import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function BigNews() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s10.jpg" alt="" />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem mollitia expedita tenetur amet, sunt vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolore perspiciatis magnam atque.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s11.jpg" alt="" />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem mollitia expedita tenetur amet, sunt vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolore perspiciatis magnam atque.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s13.jpg" alt="" />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem mollitia expedita tenetur amet, sunt vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolore perspiciatis magnam atque.</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
