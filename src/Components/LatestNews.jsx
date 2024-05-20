import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function LatestNews() {
  return (
    <>
      <Swiper
        slidesPerView={3}
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
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s10.jpg" alt="" />
                <Link>5 Key Things to Know About Haiti After Donald Trump's Insult</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s27.jpg" alt="" />
                <Link>These Are All the Sam's Club Locations That Are Closing</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s25.jpg" alt="" />
                <Link>H&M Stores Trashed in Anti-Racism Protest</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s26.jpg" alt="" />
                <Link>Commentary: Spotify’s Unusual IPO Came at the Perfect Time</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s28.jpg" alt="" />
                <Link>The targeted stores are in shopping malls in Johannesburg’s</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://nunforest.com/politics-demo/upload/blog/s29.jpg" alt="" />
                <Link>These Are All the Sam's Club Locations That Are Closing</Link>
                <p>63 Sam's Club locations across the U.S. are closing their doors.</p>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
