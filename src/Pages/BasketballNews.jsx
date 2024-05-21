import { useState } from "react";
import { Link } from "react-router-dom";

export default function BasketballNews() {

    const [pageOrder, setPageOrder] = useState(1);

    return(
        <div className="blog-page">

            <div className="blog-page-left">

                <h1>BASKETBOL</h1>

                {
                    pageOrder === 1 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/0516dd4932e643b98365eb2d45b8883d.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>NBA'de ilk sezonunu geçiren oyunculardan oluşan en iyi çaylak 5'leri belirlendi.</Link>
                                <p>NBA'den yapılan açıklamaya göre spor yazarları ve yayıncıların katıldığı oylama sonucunda 2023-24 sezonunun en iyi iki çaylak takımı belli oldu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/0b0c1b5eadc7465ea27097925e78ae78.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Burak Gören: "Sürekli büyüyen, kendini geliştiren bir kulüp hüviyetindeyiz".</Link>
                                <p>Aliağa Petkimspor Başantrenörü Burak Gören, Türkiye Sigorta Basketbol Süper Ligi'nde iyi bir sezonu geride bıraktıklarını söyledi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/8410943f956c4f2cb86e08f381a90335.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Dallas Mavericks muhteşem geri dönüşle konferans finalinde!</Link>
                                <p>Dallas Mavericks bir ara 17 sayı geriye düştüğü maçta, Oklahoma City Thunder'ı 117-116 yenerek seriyi 4-2'ye getirdi ve konferans finaline çıktı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/52f695e4632d4ddcad27b04dc0ce7660.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Potada derbi heyecanı: Yarı final eşleşmesi belli oldu.</Link>
                                <p>Türkiye Sigorta Basketbol Süper Ligi play-off çeyrek final ikinci maçında deplasmanda Manisa Büyüşehir Belediyespor'u 83-74 yenerek seriyi 2-0 kazanan Beşiktaş Emlakjet, yarı finale yükseldi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/220a874c042146a0ae27b8aa7142ab31.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Karşıyaka - Galatasaray maçı ne zaman, saat kaçta ve hangi kanalda?</Link>
                                <p>Karşıyaka - Galatasaray maçı ne zaman, saat kaçta ve hangi kanaldan canlı yayınlanacak? İşte ayrıntılar...</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/426b1e4b5cd6416796b9d41c6bd39321.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Pascal Siakam'dan 25 sayı: Pacers seriyi son maça taşıdı.</Link>
                                <p>NBA'de Indiana Pacers, New York Knicks'i 116-103 mağlup ederek seride durumu 3-3'e getirdi. Pacers'ta 25 sayıyla oynayan Pascal Siakam takımının en skorer ismi oldu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/5520c8e161a84de5bb915fff44cfc14e.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Karşıyaka Galatasaray'ı yendi, seriye tutundu.</Link>
                                <p>Pınar Karşıyaka, Galatasaray Ekmas deplasmanında 87-90'lık skorla kazanarak seride durumu 1-1 yaptı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/3171093f401a4b46916e0e17a3ffc6de.jpg?w=1000" alt="" />
                            <div>
                                <Link to={'/post'}>Alperen Şengün'den sakatlığıyla ilgili açıklama.</Link>
                                <p>Sacramento Kings maçında sakatlanan Alperen Şengün'ün durumu belli oldu. Ayak bileği burkulan ve dizinde morarma meydana gelen Alperen Şengün'ün sakatlığının ameliyat gerekmediği belirtildi.</p>
                            </div>
                        </div>

                    </div>
                }

                {
                    pageOrder === 2 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/e5edfb668878443d899a9b88251eb0a1.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>NBA'in son şampiyonundan erken veda.</Link>
                                <p>NBA'de geçen sezonu şampiyon olarak tamamlayan Denver Nuggets, Batı Konferansı yarı final serisinde Minnesota Timberwolves'a 4-3 yenilerek elendi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/eb8079b40dbd4d66b88432c028a81ede.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Doğu Konferansı finalinde Boston Celtics'in rakibi belli oldu.</Link>
                                <p>Indiana Pacers, New York Knicks'i 130-109 yenerek seriyi 4-3'e getirdi ve NBA Doğu Konferansı finalinde Boston Celtics ile rakip oldu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn.ntvspor.net/71191655b0cf4a578386b9f8aa091534.jpg?mode=crop&w=940&h=626" alt="" />
                            <div>
                                <Link to={'/post'}>Olaylı maçta Pınar Karşıyaka, Galatasaray Ekmas'ı devirip Anadolu Efes'in rakibi oldu.</Link>
                                <p>Türkiye Sigorta Basketbol Süper Ligi Play-Off Çeyrek Final 3. maçında Pınar Karşıyaka ile Galatasaray Ekmas karşı karşıya geldi. Mücadelede Galatasaray forması giyen Buğrahan Tuncer'in hareketi sonrası saha karıştı.</p>
                            </div>
                        </div>

                    </div>
                }

                <div className="blog-page-left-navigation">
                    <button onClick={() => (pageOrder > 1 && setPageOrder(pageOrder - 1))}>Prew</button>
                    <button style={pageOrder === 1 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(1))}>1</button>
                    <button style={pageOrder === 2 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(2))}>2</button>
                    <button onClick={() => (pageOrder < 2 && setPageOrder(pageOrder + 1))}>Next</button>
                </div>

            </div>

            <div className="blog-page-right">

                <h1>TODAY FEATURED</h1>

                <div>

                    <div className="blog-page-right-item">
                        <img src="https://cdn.ntvspor.net/0516dd4932e643b98365eb2d45b8883d.jpg?mode=crop&w=940&h=626" alt="" />
                        <Link to={'/post'}>NBA'de ilk sezonunu geçiren oyunculardan oluşan en iyi çaylak 5'leri belirlendi.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://cdn.ntvspor.net/426b1e4b5cd6416796b9d41c6bd39321.jpg?mode=crop&w=940&h=626" alt="" />
                        <Link to={'/post'}>Pascal Siakam'dan 25 sayı: Pacers seriyi son maça taşıdı.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://cdn.ntvspor.net/3171093f401a4b46916e0e17a3ffc6de.jpg?w=1000" alt="" />
                        <Link to={'/post'}>Alperen Şengün'den sakatlığıyla ilgili açıklama.</Link>
                    </div>

                </div>

                <div className="advert">
                    <h3>REKLAM ALANI</h3>
                    <h3>375x600</h3>
                </div>

            </div>

        </div>
    )
}