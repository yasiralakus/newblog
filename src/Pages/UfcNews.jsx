import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UfcNews() {

    const [pageOrder, setPageOrder] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="blog-page">

            <div className="blog-page-left">

                <h1>UFC</h1>

                {
                    pageOrder === 1 &&
                
                    <div>
                        <div className="blog-page-left-item">
                            <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/051824-hero-lerone-murphy_GettyImages-2153600801.jpg?h=d1cb525d&itok=lLGb0byz" alt="" />
                            <div>
                                <Link to={'/post'}>Barboza, Murphy'e karşı!</Link>
                                <p>Bir çift ilk tur bitişi ve art arda üç duraklamayla tamamlanan ön elemelerin ardından, savaşçılar ana kartta ivme kazanmaya devam etti.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2022-06/061022-road-to-ufc-results-and-scorecards-hero.jpg?h=d1cb525d&itok=loL5zRFv" alt="" />
                            <div>
                                <Link to={'/post'}>UFC sonuçlarına ve puan kartlarına giden yol.</Link>
                                <p>Önümüzdeki hafta sonu, Asya'nın en yetenekli MMA adaylarından 40'ı, bir hayali gerçeğe dönüştürebilecek bir yolculuğa başlamak için Şangay UFC Performans Enstitüsü'nde Octagon'a adım atacak.</p>
                            </div>
                        </div>

                        <div className="blog-page-left-item">
                            <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/052024-Michael-Chandler-HERO-GettyImages-1441078236.jpg?h=d1cb525d&itok=I0O5As0Q" alt="" />
                            <div>
                                <Link to={'/post'}>Michael Chandler asla tereddüt etmedi.</Link>
                                <p>UFC Hafif Sıklet Yarışmacısı Michael Chandler Rotasında Kaldı ve 29 Haziran'da UFC 303'te Conor McGreogr'a Karşı Destansı Bir Zaferle Ödüllerini Almayı Planlıyor.</p>
                            </div>
                        </div>

                    </div>
                }

                <div className="blog-page-left-navigation">
                    <button onClick={() => (pageOrder > 1 && setPageOrder(pageOrder - 1), window.scrollTo(0, 0))}>Prew</button>
                    <button style={pageOrder === 1 ? {backgroundColor: '#f44336', color: '#fff'} : {}} onClick={() => (setPageOrder(1), window.scrollTo(0, 0))}>1</button>
                    <button onClick={() => (pageOrder < 1 && setPageOrder(pageOrder + 1), window.scrollTo(0, 0))}>Next</button>
                </div>

            </div>

            <div className="blog-page-right">

                <h1>ÖNE ÇIKANLAR</h1>

                <div>

                    <div className="blog-page-right-item">
                        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/052024-Michael-Chandler-HERO-GettyImages-1441078236.jpg?h=d1cb525d&itok=I0O5As0Q" alt="" />
                        <Link to={'/post'}>Michael Chandler asla tereddüt etmedi.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2022-06/061022-road-to-ufc-results-and-scorecards-hero.jpg?h=d1cb525d&itok=loL5zRFv" alt="" />
                        <Link to={'/post'}>UFC sonuçlarına ve puan kartlarına giden yol.</Link>
                    </div>

                    <div className="blog-page-right-item">
                        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2024-05/051824-hero-lerone-murphy_GettyImages-2153600801.jpg?h=d1cb525d&itok=lLGb0byz" alt="" />
                        <Link to={'/post'}>Barboza, Murphy'e karşı!</Link>
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