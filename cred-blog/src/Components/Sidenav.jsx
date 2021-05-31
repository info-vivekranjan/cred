import React, { useContext } from 'react';
import { BlogContext } from '../Context/BlogContextProvider';
import style from './Sidenav.module.css';
import { Link } from 'react-router-dom';

function SideNavbar() {

    const { showNav, setShowNav } = useContext(BlogContext);


    return (
        <>
            {
                showNav &&
                <div className={style.sideNavMainCont} onClick={() => setShowNav(!showNav)}>

                    {/* used **style** for SIDENAV */}

                    {

                        <div className={style.sideNavCont}>
                            {
                                <>
                                    <div className={style.sideNavUpside}>
                                        <div>
                                            <Link to="/">
                                                <img style={{ maxWidth: "180px" }} src="https://blog.cred.club/wp-content/uploads/2019/09/cred_theupperdeck_white.png" alt="blog logo" />

                                            </Link>

                                        </div>
                                        <div className={style.sideNavClose}>
                                            <i onClick={() => setShowNav(!setShowNav)} className="ri-close-line"></i>
                                        </div>
                                    </div>

                                    <div className={style.sideNavMiddleSide}>

                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/category/credit-cards">Credit Cards</Link>
                                        </div>


                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/category/best-credit-cards">Best Credit Cards</Link>
                                        </div>


                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/category/money-matters">Money Matters</Link>
                                        </div >


                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/category/credit-card-payment">Credit Card Payment</Link>
                                        </div>


                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/cred-home-page">CRED.club</Link>
                                        </div>


                                        <div className={style.sideNavLinkDiv}>
                                            <Link className={style.sideNavLink} to="/category/tech">Tech</Link>
                                        </div>

                                    </div>


                                    {/* Bottom Part */}

                                    <div className={style.sideNavBottomSide}>
                                        <div>
                                            about CRED
                        </div>
                                        <div>
                                            CRED is a members-only platform that
                                            rewards the creditworthy individuals
                                            of India with exclusive experiences,
                                            rewards and upgrades.
                        </div>
                                    </div>


                                    {/* Footer Part */}

                                    <div className={style.sideNavFooterSide}>

                                        <div>
                                            follow us on
                        </div>

                                        <div>
                                            <div onClick={() => alert("Welcome to facebook")}>
                                                <i class="ri-facebook-fill"></i>
                                            </div>
                                            <div onClick={() => alert("Welcome to twitter")}>
                                                <i class="ri-twitter-fill"></i>
                                            </div>
                                            <div onClick={() => alert("Welcome to linkedIn")}>
                                                <i class="ri-linkedin-fill"></i>
                                            </div>
                                            <div onClick={() => alert("Welcome to Instagram")}>
                                                <i class="ri-instagram-line"></i>
                                            </div>
                                        </div>

                                    </div>


                                </>
                            }
                        </div>
                    }
                </div>

            }
        </>



    );
}
export { SideNavbar }