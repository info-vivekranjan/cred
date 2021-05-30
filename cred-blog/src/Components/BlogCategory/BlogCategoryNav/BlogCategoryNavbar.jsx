import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../../Context/BlogContextProvider';
import styles from './BlogCategoryNavbar.module.css';



function BlogCategoryNavbar() {


    const { showNav, setShowNav } = useContext(BlogContext);

    const links = [
        {
            to: "/",
            blogLogo: <img style={{ maxWidth: "180px" }} src="https://blog.cred.club/wp-content/uploads/2019/09/cred_theupperdeck_white.png" alt="blog logo" />
        },
        {
            to: "/category/credit-cards",
            title: "Credit Cards"
        },
        {
            to: "/category/best-credit-cards",
            title: "Best Credit Cards"
        },
        {
            to: "/category/money-matters",
            title: "Money Matters"
        },
        {
            to: "/category/credit-card-payment",
            title: "Credit Card Payment"
        },
        {
            to: "/cred-home-page",
            title: "CRED.club"
        },
        {
            to: "/category/tech",
            title: "Tech"
        },
        {

            title: <div onClick={() => setShowNav(!showNav)}>
                <i className="ri-menu-line"></i>
            </div>
        }
    ]

    return (
        <>
            <div className={styles.blogNavbarCont}>


                <div className={styles.blogNavbar}>

                    <div className={styles.blogNavbarLeft}>
                        {
                            links.map((item) => {
                                return <div className={styles.navbarLinksCont}>

                                    <div className={styles.blogNavLogo}>
                                        <Link to={item.to}>
                                            {item.blogLogo}
                                        </Link>

                                    </div>
                                </div>
                            })
                        }

                    </div>

                    <div className={styles.blogNavbarRight}>
                        {
                            links.map((item) => {
                                return <div className={styles.navbarLinksCont}>
                                    <div className={styles.navbarLinks}>

                                        <div className={styles.blogLinksCont}>
                                            <Link className={styles.blogLink} to={item.to}>
                                                {item.title}
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            })
                        }

                    </div>


                </div>


            </div>

        </>
    );
}
export { BlogCategoryNavbar }