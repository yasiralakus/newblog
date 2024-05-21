import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function JoinTeam() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="contact-page">

            <div className="contact-page-left">

                <h1>EKİBE KATIL</h1>

                <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus natus expedita pariatur blanditiis voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ab illum officia natus vitae temporibus voluptate? A sit cumque, blanditiis et suscipit temporibus dolorum architecto neque! Facere commodi laboriosam unde.</p>

                <h1>BİZE YAZIN</h1>

                <div className="col-3">
                    <div className="contact-input-box">
                        <h3>Adınız*</h3>
                        <input type="text" />
                    </div>
                    <div className="contact-input-box">
                        <h3>E-posta*</h3>
                        <input type="text" />
                    </div>
                    <div className="contact-input-box">
                        <h3>Website</h3>
                        <input type="text" />
                    </div>
                </div>

                <div className="contact-input-box">
                    <h3>Mesajınız*</h3>
                    <textarea rows={5}></textarea>
                </div>

                <button><i className="fa-solid fa-paper-plane"></i> Giriş Yap</button>

            </div>

            <div className="contact-page-right">

                <div className="contact-page-right-today-featured">

                    <h1>ÖNE ÇIKANLAR</h1>

                    <div className="contact-page-right-today-featured-item">
                        <img src="https://assets.goal.com/images/v3/blt51ce8d8ed3c49261/GOAL%20-%20Blank%20WEB%20-%20Facebook%20(30).jpg?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
                        <Link to={'/post'}>Liverpool'da Jürgen Klopp'un yerini alan isim belli oldu.</Link>
                    </div>
                    <div className="contact-page-right-today-featured-item">
                        <img src="https://cdn.ntvspor.net/0516dd4932e643b98365eb2d45b8883d.jpg?mode=crop&w=940&h=626" alt="" />
                        <Link to={'/post'}>NBA'de ilk sezonunu geçiren oyunculardan oluşan en iyi çaylak 5'leri belirlendi.</Link>
                    </div>
                    <div className="contact-page-right-today-featured-item">
                        <img src="https://cdn-9.motorsport.com/images/amp/2QzqrmJY/s1000/toto-wolff-team-principal-and-.webp" alt="" />
                        <Link to={'/post'}>Wolff, Horner'ın Mercedes'ten Red Bull'a '220' personel geçtiği iddiasını reddetti.</Link>
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