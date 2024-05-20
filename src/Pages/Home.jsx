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
                        <img src="https://nunforest.com/politics-demo/upload/blog/s1.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://nunforest.com/politics-demo/upload/blog/s2.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://nunforest.com/politics-demo/upload/blog/s3.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://nunforest.com/politics-demo/upload/blog/s4.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://nunforest.com/politics-demo/upload/blog/s5.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
                    </div>

                    <div className="home-page-left-little-news-item">
                        <img src="https://nunforest.com/politics-demo/upload/blog/s6.jpg" alt="" />
                        <h3>New alternatives are more productive</h3>
                        <p>Eight candidates are seeking to oust Zeman, whose inclination toward far-right groups and cosy relations with Russia and China have split public opinion.</p>
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
                        <li><Link>The Guardian view on Germany’s coalition deal: Merkel in the balance</Link></li>
                        <li><Link>Philip Dunne, sacked after his NHS remarks, must now face his constituents</Link></li>
                        <li><Link>Cameroon’s heartbreaking struggles are a relic of British colonialism</Link></li>
                        <li><Link>India has 600 million young people – and they’re set to change our world</Link></li>
                        <li><Link>Ramaphosa vows to fight corruption in ruling ANC</Link></li>
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