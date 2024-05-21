import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="about-page">

            <div className="about-page-left">

                <h1>HAKKIMIZDA</h1>

                <img src="https://nunforest.com/politics-demo/upload/others/about1.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h1>TARİHİMİZ</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h1>EKİBİMİZ</h1>

                <div className="col-3">

                    <div className="our-team-item">
                        <img src="https://nunforest.com/politics-demo/upload/others/mem3.jpg" alt="" />
                        <h3>John Doe</h3>
                        <p>Ceo / Founder</p>
                    </div>

                    <div className="our-team-item">
                        <img src="https://nunforest.com/politics-demo/upload/others/mem2.jpg" alt="" />
                        <h3>Michael Origon</h3>
                        <p>Journalist</p>
                    </div>

                    <div className="our-team-item">
                        <img src="https://nunforest.com/politics-demo/upload/others/mem1.jpg" alt="" />
                        <h3>John Doe</h3>
                        <p>Marketing Manager</p>
                    </div>

                </div>



            </div>

            <div className="about-page-right">

                <div className="about-page-right-today-featured">

                    <h1>ÖNE ÇIKANLAR</h1>

                    <div className="about-page-right-today-featured-item">
                        <img src="https://assets.goal.com/images/v3/blt51ce8d8ed3c49261/GOAL%20-%20Blank%20WEB%20-%20Facebook%20(30).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Liverpool'da Jürgen Klopp'un yerini alan isim belli oldu.</Link>
                    </div>

                    <div className="about-page-right-today-featured-item">
                        <img src="https://assets.goal.com/images/v3/blt0cf05e5cd2044202/Ads%C4%B1z%20tasar%C4%B1m%20(3).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Galatasaray - Fenerbahçe derbisini izlemek için servet ödediler.</Link>
                    </div>

                    <div className="about-page-right-today-featured-item">
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