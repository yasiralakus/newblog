import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Post() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="post-page">

            <div className="post-page-left">

                <div className="post-page-left-top">

                    <h1>Real Madrid Teknik Direktörü Carlo Ancelotti: Arda Güler bize özel bir şey izletti.</h1>

                    <ul>
                        <li>
                            <i className="fa-regular fa-user"></i>
                            <p>Helena Doe</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-book"></i>
                            <p>20 yorum</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-eye"></i>
                            <p>144 görüntüleme</p>
                        </li>
                    </ul>

                    <div>
                        <div style={{backgroundColor: '#436FEB'}}>
                            <i className="fa-brands fa-facebook-f"></i>
                            <p>Facebook ile paylaş</p>
                        </div>
                        <div style={{backgroundColor: '#43C9EB'}}>
                            <i className="fa-brands fa-twitter"></i>
                            <p>Twitter ile paylaş</p>
                        </div>
                        <div style={{backgroundColor: '#F14133'}}>
                            <i className="fa-brands fa-google-plus-g"></i>
                        </div>
                        <div style={{backgroundColor: '#1879DD'}}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div style={{backgroundColor: '#F0771E'}}>
                            <i className="fa-solid fa-wifi"></i>
                        </div>
                    </div>

                </div>

                <div className="post-page-left-mid">

                    <img src="https://assets.goal.com/images/v3/blt8a8992d7044affce/Goal%20HIC%20-%20LinkedIn%20(61).png?auto=webp&format=pjpg&width=1080&quality=60" alt="" />

                    <p>
                        Real Madrid'in genç yıldızı Arda Güller gollerine Villarreal karşısında da devam etti.
                    </p>

                    <p>
                        La Liga’nın şampiyonu Real Madrid deplasmanda oynadığı maçta Villarreal ile 4-4 berabere kalırken, karşılaşmaya yolu Süper Lig’den geçen iki tanıdık isim damga vurdu.
                    </p>

                    <p>
                        Milli oyuncu Arda Güler 90 dakika sahada kaldığı karşılaşmada iki kez gol sevinci yaşarken, Real Madrid formasıyla ilk defa bir maçta birden fazla kez golle buluştu ve kendi adına bir ilki yaşadı.
                    </p>

                    <p>
                        Villarreal’in bir dönem Trabzonspor’da da forma giyen Norveçli golcüsü Alexander Sörloth ise Villarreal’in attığı dört golün tamamına imzasını atarak kariyerinin en özel gecesini yaşadı.
                    </p>

                    <div className="advert-horizontal">
                        <h3>Reklam Alanı</h3>
                        <h3>750x150</h3>
                    </div>

                    <img src="https://assets.goal.com/images/v3/blt8d67b6397dff71d4/Arda%20Guler%20Real%20Madrid%202023-24.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />

                    <h3>"Özel bir yetenek"</h3>

                    <p>
                        Ligin son haftası öncesinde gol krallığı yarışında zirveye oturan Norveçli golcü böylece yaz transfer dönemimde Villarreal’e katılarak kariyeri açısından ne denli doğru bir karar verdiğini de ortaya koydu. 
                    </p>

                    <p>
                        Öte yandan Real Madrid Teknik Direktörü Carlo Ancelotti maçın ardından yaptığı açıklamada Arda’dan övgüyle bahsederken, “Bence gole ne kadar yakın olursa o kadar iyi. Çok etkili, az alanda çok gol atıyor, özel bir yeteneği var. Bunu kaleye daha yakınken daha iyi gösteriyor. Bugün bize özel bir performans izletti.  Takım olarak amacımız puan değildi, puana ihtiyacımız yok. Sorunlardan ve sakatlıklardan kaçınmak için yoğun bir şekilde iyi bir oyun oynamaktı. Her şey mükemmel gitti” dedi. 
                    </p>

                    <div className="advert-horizontal">
                        <h3>Reklam Alanı</h3>
                        <h3>750x150</h3>
                    </div>

                    <div className="post-page-left-admin-details">

                        <img src="https://nunforest.com/politics-demo/upload/users/avatar6.jpg" alt="" />

                        <div>
                            <h3>Helena Doe <span>/ 14 paylaşım</span> </h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, at harum? Culpa aliquid nisi harum consequatur. Molestias, corporis.</p>
                            <div>
                                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link><i className="fa-brands fa-twitter"></i></Link>
                                <Link><i className="fa-brands fa-instagram"></i></Link>
                                <Link><i className="fa-brands fa-google-plus-g"></i></Link>
                                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="post-page-left-bottom">

                    <h1>BUNLARI DA BEĞENEBİLİRSİN</h1>

                    <div>
                        <div className="post-page-left-bottom-item">

                            <img src="http://file.mackolikfeeds.com/cms/a202e9b2-9e0d-07c9-086f-988d1aa1c6bb?size=header" alt="" />
                            <Link>Toni Kroos'tan emeklilik kararı.</Link>

                        </div>

                        <div className="post-page-left-bottom-item">

                            <img src="http://file.mackolikfeeds.com/cms/3d2f0ed7-558f-4f17-86f8-a68598cd28fc?size=header" alt="" />
                            <Link>Yunus Akgün'den veda.</Link>

                        </div>

                        <div className="post-page-left-bottom-item">

                            <img src="http://file.mackolikfeeds.com/cms/666c3d86-9dec-489e-89fb-0cd7253030bf?size=header" alt="" />
                            <Link>Atalanta'nın hedefi kupa.</Link>

                        </div>
                    </div>

                </div>

            </div>

            <div className="post-page-right">

                <div className="post-page-right-today-featured">

                    <h1>ÖNE ÇIKANLAR</h1>

                    <div>
                        <div className="post-page-right-today-featured-item">
                            <img src="https://assets.goal.com/images/v3/blt51ce8d8ed3c49261/GOAL%20-%20Blank%20WEB%20-%20Facebook%20(30).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <Link to={'/post'}>Liverpool'da Jürgen Klopp'un yerini alan isim belli oldu.</Link>
                        </div>
                        <div className="post-page-right-today-featured-item">
                            <img src="https://cdn.ntvspor.net/3171093f401a4b46916e0e17a3ffc6de.jpg?w=1000" alt="" />
                            <Link to={'/post'}>Alperen Şengün'den sakatlığıyla ilgili açıklama.</Link>
                        </div>
                        <div className="post-page-right-today-featured-item">
                            <img src="https://cdn-9.motorsport.com/images/amp/2QzqrmJY/s1000/toto-wolff-team-principal-and-.webp" alt="" />
                            <Link to={'/post'}>Wolff, Horner'ın Mercedes'ten Red Bull'a '220' personel geçtiği iddiasını reddetti.</Link>
                        </div>
                    </div>
                    

                </div>

                <div className="advert">

                    <h3>Reklam Alanı</h3>
                    <h3>375x600</h3>

                </div>

            </div>

        </div>
    )
}