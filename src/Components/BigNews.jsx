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
                <img src="https://assets.goal.com/images/v3/blt0cf05e5cd2044202/Ads%C4%B1z%20tasar%C4%B1m%20(3).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <h3>Galatasaray - Fenerbahçe derbisini izlemek için servet ödediler.</h3>
                <p>Süper Lig'de şampiyonluk düğümünün çözülme ihtimalinin bulunduğu Galatasaray - Fenerbahçe derbisini izlemek için taraftarlar servet ödedi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://cdn-8.motorsport.com/images/amp/Y99DNN7Y/s1000/valtteri-bottas-stake-f1-team-.webp" alt="" />
                <h3>Williams, Bottas'la mı ilgileniyor?</h3>
                <p>Valtteri Bottas'ın 2025 yılında Williams'ta yarışacağı iddia ediliyor.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/051824-hero-lerone-murphy_GettyImages-2153600801.jpg?h=d1cb525d&itok=lLGb0byz" alt="" />
                <h3>Barboza, Murphy'e karşı!</h3>
                <p>Bir çift ilk tur bitişi ve art arda üç duraklamayla tamamlanan ön elemelerin ardından, savaşçılar ana kartta ivme kazanmaya devam etti.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://assets.goal.com/images/v3/bltff123b8d9fc248bb/Ads%C4%B1z%20tasar%C4%B1m%20(1).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <h3>Volkan Demirel eşi Zeynep Demirel'den boşanıyor mu?</h3>
                <p>Hatayspor'un eski teknik direktörü Volkan Demirel'in eşinden boşanacağı iddia edilmişti ancak bu iddialara yanıt geldi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://cdn.ntvspor.net/8410943f956c4f2cb86e08f381a90335.jpg?mode=crop&w=940&h=626" alt="" />
                <h3>Dallas Mavericks muhteşem geri dönüşle konferans finalinde!</h3>
                <p>Dallas Mavericks bir ara 17 sayı geriye düştüğü maçta, Oklahoma City Thunder'ı 117-116 yenerek seriyi 4-2'ye getirdi ve konferans finaline çıktı.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://cdn.ntvspor.net/0516dd4932e643b98365eb2d45b8883d.jpg?mode=crop&w=940&h=626" alt="" />
                <h3>NBA'de ilk sezonunu geçiren oyunculardan oluşan en iyi çaylak 5'leri belirlendi.</h3>
                <p>NBA'den yapılan açıklamaya göre spor yazarları ve yayıncıların katıldığı oylama sonucunda 2023-24 sezonunun en iyi iki çaylak takımı belli oldu.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://cdn-5.motorsport.com/images/amp/Yv8qlz10/s1000/charles-leclerc-ferrari-sf-24-.webp" alt="" />
                <h3>Sainz: "Leclerc'in temposu ön taraf mücadelesinde olduğumuzun bir kanıtı".</h3>
                <p>Carlos Sainz, Imola'da takım arkadaşı Charles Leclerc'in gösterdiği performansın takım için olumlu olduğunu söyledi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://assets.goal.com/images/v3/bltf9b3effc8096a6d7/xavi.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                <h3>Barcelona'da Xavi giderse, adaylar kimler?</h3>
                <p>Başkan Joan Laporta ile gergin günler yaşayan Xavi Barcelona'daki görevinden ayrılabilir.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://cdn.ntvspor.net/3171093f401a4b46916e0e17a3ffc6de.jpg?w=1000" alt="" />
                <h3>Alperen Şengün'den sakatlığıyla ilgili açıklama.</h3>
                <p>Sacramento Kings maçında sakatlanan Alperen Şengün'ün durumu belli oldu. Ayak bileği burkulan ve dizinde morarma meydana gelen Alperen Şengün'ün sakatlığının ameliyat gerekmediği belirtildi.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="home-page-left-big-news-item">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/052024-Michael-Chandler-HERO-GettyImages-1441078236.jpg?h=d1cb525d&itok=I0O5As0Q" alt="" />
                <h3>Michael Chandler asla tereddüt etmedi.</h3>
                <p>UFC Hafif Sıklet Yarışmacısı Michael Chandler Rotasında Kaldı ve 29 Haziran'da UFC 303'te Conor McGreogr'a Karşı Destansı Bir Zaferle Ödüllerini Almayı Planlıyor.</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
