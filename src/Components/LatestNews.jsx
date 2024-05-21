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
                <img src="https://assets.goal.com/images/v3/bltbac425c053d48142/Antonio_Conte.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <Link to={'/post'}>Antonio Conte'den Fenerbahçe cevabı: Görüşmeler tamamlandı.</Link>
                <p>Fenerbahçe'nin teklif götürdüğü iddia edilen Antonio Conte, Sarı-lacivertli kulübe yanıtını bildirdi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://assets.goal.com/images/v3/blt1039fdfe383af0b7/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-05-18T091910.347.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <Link to={'/post'}>Chelsea, Real Madrid'e özendi: 17 yaşındaki oyuncu için 60 milyon Euro ödedi!</Link>
                <p>Premier Lig devi Chelsea, Brezilya'nın 17 yaşındaki genç yıldızını kadrosuna katmaya hazırlanıyor.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://assets.goal.com/images/v3/blt4575523a86cb822a/Kylian-Mbappe.jpeg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <Link to={'/post'}>Kylian Mbappe Madrid'deki yaşam hakkında Vinicius'tan bilgi aldı.</Link>
                <p>Yaz aylarında Real Madrid kadrosuna katılacak olan Kylian Mbappe şehir hakkında bilgi toplamaya başladı.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://assets.goal.com/images/v3/blt6da7351f7184955a/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-05-17T162309.088.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <Link to={'/post'}>Pep Guardiola Manchester City ile olan sözleşmesini tamamlamaya karar verdi.</Link>
                <p>Premier Lig tarihinin ilk dört sene üst üste şampiyonluğuna koşan Manchester City'de teknik direktör Pep Guardiola kararını verdi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://cdn.ntvspor.net/e5edfb668878443d899a9b88251eb0a1.jpg?mode=crop&w=940&h=626" alt="" />
                <Link to={'/post'}>NBA'in son şampiyonundan erken veda.</Link>
                <p>NBA'de geçen sezonu şampiyon olarak tamamlayan Denver Nuggets, Batı Konferansı yarı final serisinde Minnesota Timberwolves'a 4-3 yenilerek elendi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://cdn.ntvspor.net/eb8079b40dbd4d66b88432c028a81ede.jpg?mode=crop&w=940&h=626" alt="" />
                <Link to={'/post'}>Doğu Konferansı finalinde Boston Celtics'in rakibi belli oldu.</Link>
                <p>Indiana Pacers, New York Knicks'i 130-109 yenerek seriyi 4-3'e getirdi ve NBA Doğu Konferansı finalinde Boston Celtics ile rakip oldu.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://cdn-9.motorsport.com/images/amp/2QzqrmJY/s1000/toto-wolff-team-principal-and-.webp" alt="" />
                <Link to={'/post'}>Wolff, Horner'ın Mercedes'ten Red Bull'a '220' personel geçtiği iddiasını reddetti.</Link>
                <p>Toto Wolff, Christian Horner'ın Mercedes'in motor departmanından '220' kişiyi Red Bull'a aldıkları iddiasını reddetti.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-latest-news-item">
                <img src="https://cdn-4.motorsport.com/images/amp/6AE1R3D6/s1000/1000132660-2.webp" alt="" />
                <Link to={'/post'}>"İstanbul Park'ın teslimi geciktikçe, Türkiye GP ihtimali uzaklaşıyor".</Link>
                <p>İstanbul Park'in yeni işletmecisi Lale Cander, pisti devralma süreçleri ve Türkiye GP'nin takvime dönme çalışmalarıyla alakalalı Motorsport.com Türkiye'ye özel açıklamalarda bulundu.</p>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
