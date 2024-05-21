import { useState } from "react";
import { Link } from "react-router-dom";

export default function FootballNews() {

    const [pageOrder, setPageOrder] = useState(1);

    return(
        <div className="blog-page">

            <div className="blog-page-left">

                <h1>FUTBOL</h1>

                {
                    pageOrder === 1 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt51ce8d8ed3c49261/GOAL%20-%20Blank%20WEB%20-%20Facebook%20(30).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Liverpool'da Jürgen Klopp'un yerini alan isim belli oldu.</Link>
                                <p>Liverpool, Jürgen Klopp'un ayrılığının ardından teknik direktörlük koltuğuna Arne Slot'un getirildiğini açıkladı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt0cf05e5cd2044202/Ads%C4%B1z%20tasar%C4%B1m%20(3).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Galatasaray - Fenerbahçe derbisini izlemek için servet ödediler.</Link>
                                <p>Süper Lig'de şampiyonluk düğümünün çözülme ihtimalinin bulunduğu Galatasaray - Fenerbahçe derbisini izlemek için taraftarlar servet ödedi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltd3d271b27bef44b2/mou(2).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Jose Mourinho'nun Beşiktaş'tan istediği ücret ortaya çıktı!</Link>
                                <p>Beşiktaş'ın Jose Mourinho ile görüştüğü iddia edilirken bu görüşmenin perde arkası ve Portekizlinin istediği ücret belli oldu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltff123b8d9fc248bb/Ads%C4%B1z%20tasar%C4%B1m%20(1).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Volkan Demirel eşi Zeynep Demirel'den boşanıyor mu?</Link>
                                <p>Hatayspor'un eski teknik direktörü Volkan Demirel'in eşinden boşanacağı iddia edilmişti ancak bu iddialara yanıt geldi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt8a8992d7044affce/Goal%20HIC%20-%20LinkedIn%20(61).png?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Real Madrid Teknik Direktörü Carlo Ancelotti: Arda Güler bize özel bir şey izletti.</Link>
                                <p>Real Madrid'in genç yıldızı Arda Güller gollerine Villarreal karşısında da devam etti.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt8600e6bfaa5cae85/GOAL_-_Blank_WEB_-_Facebook_-_2024-04-30T154343.775.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Chelsea’nin deneyimli stoperi Thiago Silva, genç takım arkadaşlarının kulüp için daha fazlasını yapması gerektiğini düşünüyor.</Link>
                                <p>Chelsea’den ayrılmaya hazırlanan Thiago Silva takımdaki son sezonundan duyduğu rahatsızlığı dile getirdi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltd34970c1421798aa/Ads%C4%B1z%20tasar%C4%B1m%20(5).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>19 Mayıs paylaşımı yapan Samet Akaydin kadro dışı bırakıldı.</Link>
                                <p>Yunanistan'da kiralık olarak forma giyen Samet Akaydin, 19 Mayıs'ta Atatürk paylaşımı yaptığı için Panathinaikos'ta kadro dışı bırakıldı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltf9b3effc8096a6d7/xavi.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Barcelona'da Xavi giderse, adaylar kimler?</Link>
                                <p>Başkan Joan Laporta ile gergin günler yaşayan Xavi Barcelona'daki görevinden ayrılabilir.</p>
                            </div>
                        </div>

                    </div>
                }

                {
                    pageOrder === 2 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt62e721b3cadd8cf0/GettyImages-1486606968.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Şenol Güneş sürpriz bir ülkenin başına geçiyor.</Link>
                                <p>Milli takımın eski teknik direktörü Şenol Güneş teknik direktörlük kariyerinde ikinci kez yurt dışı deneyimi yaşayacak.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt1ea49b6871d33982/GOAL_-_Blank_WEB_-_Facebook_-_2024-05-11T195220.454.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Ederson sakatlığı nedeniyle Copa America'da Brezilya'nın kadrosunda yer almayacak.</Link>
                                <p>Tottenham deplasmanında ciddi bir sakatlık yaşayan deneyimli kaleci Copa America'da forma giyemeyecek.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt3497376e54c51ab6/GOAL_-_Blank_WEB_-_Facebook_-_2024-04-11T133158.319.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Diego Simeone genç oyuncusu Arthur Vermeeren'e Real Madrid'in yıldızı Arda Güler'i örnek gösterdi.</Link>
                                <p>Dünyaca ünlü teknik direktör devre arasında 22 milyon euroya aldırdığı genç oyuncuya Arda Güler'i örnek gösterdi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltc03f989c2392b9d7/GettyImages-1669254785-fotor-20240205212722.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Real Madrid sözleşmesi bitecek Nacho'nun yerine Leny Yoro'yu transfer etmek istiyor.</Link>
                                <p>Yaz transfer dönemini hareketli bir şekilde geçirmesi beklenen Real Madrid Fransız savunmacı için düğmeye bastı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt417ad076c6f5621b/sarri.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Beşiktaş'a Maurizio Sarri mi geliyor? Hasan Arat görüştü.</Link>
                                <p>Beşiktaş teknik direktör arayışını sürdürürken siyah-beyazlıların başkanı Hasan Arat'ın Maurizio Sarri ile görüştüğü iddia edildi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blte5fd82669f63ca9a/Ads%C4%B1z%20tasar%C4%B1m%20(9).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Fatih Karagümrük, Süper Lig'e veda etti.</Link>
                                <p>Trendyol Süper Lig'in 37. haftasında aynı saatte başlayan 7 maçın ardından küme düşen takım belli oldu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt57c765577e276a68/Alex_de_Souza.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Alex de Souza, Süper Lig'e geri dönüyor: "2 yıllık sözleşme imzaladık".</Link>
                                <p>Fenerbahçe efsanesi Alex de Souza, Antalyaspor'u çalıştırmak için iki yıllığına Türkiye'ye geri dönüyor.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt7ef461a966273308/Ads%C4%B1z%20tasar%C4%B1m%20(4).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Kayserispor Başkanı Ali Çamlı maç sırasında sahaya indi.</Link>
                                <p>Kayserispor Başkanı Ali Çamlı gördükleri kırmızı kartın ardından sahaya girmeye çalıştı ancak güvenlik güçleri engel oldu.</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    pageOrder === 3 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt6da7351f7184955a/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-05-17T162309.088.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Pep Guardiola Manchester City ile olan sözleşmesini tamamlamaya karar verdi.</Link>
                                <p>Premier Lig tarihinin ilk dört sene üst üste şampiyonluğuna koşan Manchester City'de teknik direktör Pep Guardiola kararını verdi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt4575523a86cb822a/Kylian-Mbappe.jpeg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Kylian Mbappe Madrid'deki yaşam hakkında Vinicius'tan bilgi aldı.</Link>
                                <p>Yaz aylarında Real Madrid kadrosuna katılacak olan Kylian Mbappe şehir hakkında bilgi toplamaya başladı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/blt1039fdfe383af0b7/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-05-18T091910.347.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Chelsea, Real Madrid'e özendi: 17 yaşındaki oyuncu için 60 milyon Euro ödedi!</Link>
                                <p>Premier Lig devi Chelsea, Brezilya'nın 17 yaşındaki genç yıldızını kadrosuna katmaya hazırlanıyor.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://assets.goal.com/images/v3/bltbac425c053d48142/Antonio_Conte.jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                            <div>
                                <Link to={'/post'}>Antonio Conte'den Fenerbahçe cevabı: Görüşmeler tamamlandı.</Link>
                                <p>Fenerbahçe'nin teklif götürdüğü iddia edilen Antonio Conte, Sarı-lacivertli kulübe yanıtını bildirdi.</p>
                            </div>
                        </div>

                    </div>
                }

                <div className="blog-page-left-navigation">
                    <button onClick={() => (pageOrder > 1 && setPageOrder(pageOrder - 1))}>Prew</button>
                    <button style={pageOrder === 1 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(1))}>1</button>
                    <button style={pageOrder === 2 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(2))}>2</button>
                    <button style={pageOrder === 3 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(3))}>3</button>
                    <button onClick={() => (pageOrder < 3 && setPageOrder(pageOrder + 1))}>Next</button>
                </div>

            </div>

            <div className="blog-page-right">

                <h1>TODAY FEATURED</h1>

                <div>

                    <div className="blog-page-right-item">
                        <img src="https://assets.goal.com/images/v3/blt51ce8d8ed3c49261/GOAL%20-%20Blank%20WEB%20-%20Facebook%20(30).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Liverpool'da Jürgen Klopp'un yerini alan isim belli oldu.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://assets.goal.com/images/v3/blt0cf05e5cd2044202/Ads%C4%B1z%20tasar%C4%B1m%20(3).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Galatasaray - Fenerbahçe derbisini izlemek için servet ödediler.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://assets.goal.com/images/v3/bltd3d271b27bef44b2/mou(2).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Jose Mourinho'nun Beşiktaş'tan istediği ücret ortaya çıktı!</Link>
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