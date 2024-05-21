import { useState } from "react";
import { Link } from "react-router-dom";

export default function FormulaNews() {

    const [pageOrder, setPageOrder] = useState(1);

    return(
        <div className="blog-page">

            <div className="blog-page-left">

                <h1>FORMULA 1</h1>

                {
                    pageOrder === 1 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/GettyImages-2153141790" alt="" />
                            <div>
                                <Link to={'/post'}>Alonso, 'zorlu' Imola haftasonunu 19. sırada tamamladıktan sonra Monaco'ya geri dönmeye istekli.</Link>
                                <p>Fernando Alonso, Emilia-Romagna Grand Prix'sinde zorlu bir hafta sonunun ardından Monaco'da bir dahaki sefere "mükemmel bir Cumartesi" geçirme hedefini belirledi ve İspanyol sürücü Pazar günkü yarışı 19. sırada tamamladı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Emilia_Romagna/2153666476" alt="" />
                            <div>
                                <Link to={'/post'}>Vasseur, Ferrari'nin kendi evinde Imola zaferi şansını nerede kaybettiğini tespit ederken 'biraz hayal kırıklığına uğradı'.</Link>
                                <p>Charles Leclerc, Imola'da Tifosi'yi podyumda tamamladı; seyirciler Ferrari renkleriyle donatıldı ve baştan sona hem Monakolu sürücüye hem de takım arkadaşı Carlos Sainz'a kükredi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/imola-winners-losers-header-2024" alt="" />
                            <div>
                                <Link to={'/post'}>Imola'dan 6 Kazanan ve 5 Kaybeden – F1 Avrupa'ya dönerken kim başarılı oldu?</Link>
                                <p>Kağıt üzerinde bu bir başka Max Verstappen zaferi gibi görünüyordu, ancak son dünya şampiyonu, Imola'da ganimeti almak için arkadaşı ve McLaren rakibi Lando Norris'in yoğun baskısını göğüslemek zorunda kaldı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-4.motorsport.com/images/amp/6AE1R3D6/s1000/1000132660-2.webp" alt="" />
                            <div>
                                <Link to={'/post'}>"İstanbul Park'ın teslimi geciktikçe, Türkiye GP ihtimali uzaklaşıyor".</Link>
                                <p>İstanbul Park'in yeni işletmecisi Lale Cander, pisti devralma süreçleri ve Türkiye GP'nin takvime dönme çalışmalarıyla alakalalı Motorsport.com Türkiye'ye özel açıklamalarda bulundu.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-9.motorsport.com/images/amp/2QzqrmJY/s1000/toto-wolff-team-principal-and-.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Wolff, Horner'ın Mercedes'ten Red Bull'a '220' personel geçtiği iddiasını reddetti.</Link>
                                <p>Toto Wolff, Christian Horner'ın Mercedes'in motor departmanından '220' kişiyi Red Bull'a aldıkları iddiasını reddetti.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-8.motorsport.com/images/amp/6gp5MMn0/s1000/sebastian-vettel-prepares-to-d.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Vettel: "F1'i bazen özlüyorum ama kararımdan memnunum".</Link>
                                <p>Sebastian Vettel Imola'da Formula 1 gridinde 'rekabetçi bir araçla' yer alma özlemini çektiğini itiraf etti ancak geri dönmeyi düşünmediğini açıkladı.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-5.motorsport.com/images/amp/Yv8qlz10/s1000/charles-leclerc-ferrari-sf-24-.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Sainz: "Leclerc'in temposu ön taraf mücadelesinde olduğumuzun bir kanıtı".</Link>
                                <p>Carlos Sainz, Imola'da takım arkadaşı Charles Leclerc'in gösterdiği performansın takım için olumlu olduğunu söyledi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-8.motorsport.com/images/amp/Y99DNN7Y/s1000/valtteri-bottas-stake-f1-team-.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Williams, Bottas'la mı ilgileniyor?</Link>
                                <p>Valtteri Bottas'ın 2025 yılında Williams'ta yarışacağı iddia ediliyor.</p>
                            </div>
                        </div>

                    </div>
                }

                {
                    pageOrder === 2 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://cdn-9.motorsport.com/images/amp/254WWEl0/s1000/valtteri-bottas-kick-sauber-c4.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Sauber, yeni donanım sayesinde "kritik bir soruna" çözüm getirmeye hazırlanıyor.</Link>
                                <p>Sauber'in pist kenarı mühendislik şefi Xevi Pujolar, bu sezon F1 pit stop sorunlarını çözmelerine yardımcı olacak yeni donanımlara sahip olduklarını söyledi.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-5.motorsport.com/images/amp/6gp5Q9V0/s1000/oscar-piastri-mclaren-f1-team-.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Piastri: "McLaren artık hangi piste giderse gitsin kendisine güvenebilir".</Link>
                                <p>McLaren pilotu Oscar Piastri, McLaren'ın çok büyük bir adım attığını ve artık her pistte güçlü olabileceğini düşünüyor.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://cdn-2.motorsport.com/images/amp/6n9xbewY/s1000/yuki-tsunoda-rb-f1-team-vcarb-.webp" alt="" />
                            <div>
                                <Link to={'/post'}>Tsunoda: "Mükemmel bir yarış geçirseydim daha da yukarıda olabilirdim".</Link>
                                <p>AlphaTauri pilotu Yuki Tsunoda, Imola'da kaçan bazı puan fırsatları olduğu görüşünde.</p>
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
                        <img src="https://cdn-9.motorsport.com/images/amp/2QzqrmJY/s1000/toto-wolff-team-principal-and-.webp" alt="" />
                        <Link to={'/post'}>Wolff, Horner'ın Mercedes'ten Red Bull'a '220' personel geçtiği iddiasını reddetti.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://cdn-5.motorsport.com/images/amp/Yv8qlz10/s1000/charles-leclerc-ferrari-sf-24-.webp" alt="" />
                        <Link to={'/post'}>Sainz: "Leclerc'in temposu ön taraf mücadelesinde olduğumuzun bir kanıtı".</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/GettyImages-2153141790" alt="" />
                        <Link to={'/post'}>Alonso, zorlu Imola haftasonunu 19. sırada tamamladıktan sonra Monaco'ya geri dönmeye istekli.</Link>
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