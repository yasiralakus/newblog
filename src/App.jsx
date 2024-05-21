import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function App() {

    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openLoginBox, setOpenLoginBox] = useState(false);

    useEffect(() => {
        setLoading(true);
        setOpenMobileMenu(false)
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const turkishMonths = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthIndex = currentDate.getMonth();
    const currentMonth = turkishMonths[monthIndex];
    const currentDay = currentDate.getDate();

    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setOpenLoginBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="full-page">

            <div className="login-box" style={openLoginBox ? { top: '0' } : {}}>

                <form ref={formRef}>

                    <h1>GİRİŞ YAP</h1>

                    <p>Hoşgeldiniz! Hesabınıza giriş yapın.</p>

                    <div>
                        <h3>Kullanıcı Adı veya E-posta*</h3>
                        <input type="text" />
                    </div>

                    <div>
                        <h3>Şifre*</h3>
                        <input type="text" />
                    </div>

                    <button><i className="fa-solid fa-paper-plane"></i> Giriş Yap</button>

                </form>

            </div>

            <header className="header">

                <div className="container">

                    <div className="header-top">

                        <div>
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                {currentDay} {currentMonth} {currentYear} 
                            </p>

                            <span></span>

                            <Link to={'/iletisim'}>İletişim</Link>
                        </div>

                        <div>
                            <h6 onClick={() => setOpenLoginBox(true)}>Giriş Yap</h6>
                            <span></span>
                            <Link to={'/kayit-ol'}>Kayıt Ol</Link>
                        </div>

                    </div>

                    <div className="header-mid">

                        <h3>NEWBLOG</h3>

                    </div>

                    <div className="header-bottom">

                        <ul>
                            <li>
                                <NavLink to={'/'}>Anasayfa</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/futbol'}>Futbol</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/basketbol'}>Basketbol</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/formula1'}>Formula 1</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/ufc'}>UFC</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/ekibe-katil'}>Ekibe Katıl</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="header-bottom-mobile">

                        <button onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : setOpenMobileMenu(true))}>
                            <span style={openMobileMenu ? {transform: 'rotate(45deg) translateX(6px) translateY(5px)', backgroundColor: '#f44336'} : {}}></span>
                            <span style={openMobileMenu ? {opacity: '0'} : {}}></span>
                            <span style={openMobileMenu ? {transform: 'rotate(135deg) translateX(-5px) translateY(4px)', backgroundColor: '#f44336'} : {}}></span>
                        </button>

                        <ul style={openMobileMenu ? {display: 'block'} : {}}>
                            <li>
                                <NavLink to={'/'}>Anasayfa</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/futbol'}>Futbol</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/basketbol'}>Basketbol</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/formula1'}>Formula 1</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/ufc'}>UFC</NavLink>
                            </li>
                            <span></span>
                            <li>
                                <NavLink to={'/ekibe-katil'}>Ekibe Katıl</NavLink>
                            </li>
                        </ul>

                    </div>

                </div>

            </header>

            <div className="main">
                <div className="container">
                    {loading === true ?
                    <div className="loading-bg">
                        <div className="loading"></div>
                    </div>    
                    :
                    <Outlet />
                    }
                </div>
            </div>

            <footer className="footer">

                <div className="container">

                    <div className="footer-top">

                        <h3>NEWBLOG</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam consequatur dignissimos nemo nulla? Sit eligendi repellendus laborum quia aspernatur placeat ut inventore atque expedita?</p>

                        <ul>
                            <li>
                                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link><i className="fa-brands fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link><i className="fa-brands fa-google-plus-g"></i></Link>
                            </li>
                            <li>
                                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            </li>
                            <li>
                                <Link><i className="fa-brands fa-instagram"></i></Link>
                            </li>
                        </ul>

                    </div>

                    <div className="footer-bottom">

                        <div>
                            <Link to={'/'}>Anasayfa</Link>
                            <Link to={'/hakkimizda'}>Hakkımızda</Link>
                            <Link to={'/iletisim'}>İletişim</Link>
                        </div>

                        <div>
                            <p>© copyright by yasiralakus 2024</p>
                        </div>


                    </div>

                </div>

            </footer>

        </div>
    );
}
