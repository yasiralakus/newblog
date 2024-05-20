import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {

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

    

    return (
        <div className="full-page">

            <header className="header">

                <div className="container">

                    <div className="header-top">

                        <div>
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                {currentDay} {currentMonth} {currentYear} 
                            </p>

                            <span></span>

                            <Link>Contact Us</Link>
                        </div>

                        <div>
                            <Link>Sign In</Link>
                            <span></span>
                            <Link>Register</Link>
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
                                <NavLink to={'/a'}>Ekibe Katıl</NavLink>
                            </li>
                        </ul>

                    </div>

                </div>

            </header>

            <div className="main">
                <div className="container">
                    <Outlet>

                    </Outlet>
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
                            <Link>HOME</Link>
                            <Link>ABOUT US</Link>
                            <Link>CONTACT</Link>
                        </div>

                        <div>
                            <p>© copyright by yasiralakus 2024</p>
                        </div>


                    </div>

                </div>

            </footer>

        </div>
    )
}