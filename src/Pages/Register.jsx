import { useEffect } from "react";

export default function Register() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="register-page">

            <div className="register-page-left">

                <div className="register-form">

                    <h1>KAYIT OL</h1>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="col-2">
                        <div className="register-input-box">
                            <h6>Adınız*</h6>
                            <input type="text" />
                        </div>
                        <div className="register-input-box">
                            <h6>Soyadınız*</h6>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="register-input-box">
                            <h6>Eposta*</h6>
                            <input type="text" />
                        </div>
                        <div className="register-input-box">
                            <h6>Kullanıcı Adı*</h6>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="register-input-box">
                        <h6>Şifre*</h6>
                        <input type="text" />
                    </div>

                    <div className="register-input-box">
                        <h6>Şifre Tekrar*</h6>
                        <input type="text" />
                    </div>

                    <button><i className="fa-solid fa-paper-plane"></i> Kayıt Ol</button>

                </div>

            </div>

            <div className="register-page-right">

                <div className="advert">
                    <h3>Reklam Alanı</h3>
                    <h3>375x600</h3>
                </div>

            </div>

        </div>
    )
}