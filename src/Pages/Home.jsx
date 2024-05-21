import { Link } from "react-router-dom";
import BigNews from "../Components/BigNews";
import LatestNews from "../Components/LatestNews";

export default function Home() {



    return (
        <div className="home-page">

            <div className="home-page-left">
                <div className="home-page-left-big-news">
                    <BigNews />
                </div>

                <div className="home-page-left-little-news">

                    <div className="home-page-left-little-news-item">
                        <img src="https://assets.goal.com/images/v3/bltd34970c1421798aa/Ads%C4%B1z%20tasar%C4%B1m%20(5).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <h3>19 Mayıs paylaşımı yapan Samet Akaydin kadro dışı bırakıldı.</h3>
                        <p>Yunanistan'da kiralık olarak forma giyen Samet Akaydin, 19 Mayıs'ta Atatürk paylaşımı yaptığı için Panathinaikos'ta kadro dışı bırakıldı.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://assets.goal.com/images/v3/bltd3d271b27bef44b2/mou(2).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <h3>Jose Mourinho'nun Beşiktaş'tan istediği ücret ortaya çıktı!</h3>
                        <p>Beşiktaş'ın Jose Mourinho ile görüştüğü iddia edilirken bu görüşmenin perde arkası ve Portekizlinin istediği ücret belli oldu.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://assets.goal.com/images/v3/blt57c765577e276a68/Alex_de_Souza.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <h3>Alex de Souza, Süper Lig'e geri dönüyor: "2 yıllık sözleşme imzaladık".</h3>
                        <p>Fenerbahçe efsanesi Alex de Souza, Antalyaspor'u çalıştırmak için iki yıllığına Türkiye'ye geri dönüyor.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://assets.goal.com/images/v3/blte5fd82669f63ca9a/Ads%C4%B1z%20tasar%C4%B1m%20(9).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <h3>Fatih Karagümrük, Süper Lig'e veda etti.</h3>
                        <p>Trendyol Süper Lig'in 37. haftasında aynı saatte başlayan 7 maçın ardından küme düşen takım belli oldu.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://cdn.ntvspor.net/220a874c042146a0ae27b8aa7142ab31.jpg?mode=crop&w=940&h=626" alt="" />
                        <h3>Karşıyaka - Galatasaray maçı ne zaman, saat kaçta ve hangi kanalda?</h3>
                        <p>Karşıyaka - Galatasaray maçı ne zaman, saat kaçta ve hangi kanaldan canlı yayınlanacak? İşte ayrıntılar...</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/imola-winners-losers-header-2024" alt="" />
                        <h3>Imola'dan 6 Kazanan ve 5 Kaybeden – F1 Avrupa'ya dönerken kim başarılı oldu?</h3>
                        <p>Kağıt üzerinde bu bir başka Max Verstappen zaferi gibi görünüyordu, ancak son dünya şampiyonu, Imola'da ganimeti almak için arkadaşı ve McLaren rakibi Lando Norris'in yoğun baskısını göğüslemek zorunda kaldı.</p>
                    </div>

                </div>

                <div className="home-page-left-latest-news">

                    <h1>LATEST NEWS</h1>

                    <LatestNews />

                </div>
            </div>

            <div className="home-page-right">

                <form>
                    <input type="text" placeholder="Search for..."/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <div className="home-page-right-breaking-news">

                    <h1>BREAKING NEWS</h1>

                    <ul>
                        <li><Link>Jose Mourinho'nun Beşiktaş'tan istediği ücret ortaya çıktı!</Link></li>
                        <li><Link>Real Madrid Teknik Direktörü Carlo Ancelotti: Arda Güler bize özel bir şey izletti.</Link></li>
                        <li><Link>Dallas Mavericks muhteşem geri dönüşle konferans finalinde!</Link></li>
                        <li><Link>Vettel: "F1'i bazen özlüyorum ama kararımdan memnunum".</Link></li>
                        <li><Link>Michael Chandler asla tereddüt etmedi.</Link></li>
                    </ul>

                </div>

                <div className="advert-little">
                    <h3>Reklam Alanı</h3>
                    <h3>375x600</h3>
                </div>


            </div>


        </div>
    )
}