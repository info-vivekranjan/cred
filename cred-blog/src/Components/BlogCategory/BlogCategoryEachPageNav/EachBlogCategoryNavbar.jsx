import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../../Context/BlogContextProvider';
import styles from './EachBlogCategoryNavbar.module.css';



function EachBlogCategoryNavbar({ data }) {


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

            burgurBtn: <div onClick={() => setShowNav(!showNav)}>
                <i className="ri-menu-line"></i>
            </div>
        }
    ]

    return (
        <>
            <div className={styles.blogNavbarCont}>



                <>


                    <div className={styles.navImageCont} >

                        {
                            data.mainImg !== "" &&
                            <div className={styles.navImageDiv} >
                                <img src={data.mainImg} alt="BLOG-IMG" />
                            </div>
                        }

                        {
                            data.mainImg === "" &&
                            <div className={styles.navImageDiv}>

                            </div>
                        }


                    </div>

                </>


                <>
                    <div className={styles.navImageBigText} >
                        <h2>
                            {data?.mainHeaderQuestion?.charAt(0)}
                        </h2>
                    </div>
                </>


                <>
                    <div className={styles.navImageTextDive}>

                        <h1>{data.mainHeaderQuestion}</h1>
                        <p>
                            {data.raedTime}
                        </p>
                        <p>
                            {data.category} / {data.mainHeaderQuestion}
                        </p>
                    </div>
                </>

                <>

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



                            {
                                links.map((item) => {
                                    return <div className={styles.navbarLinksCont}>
                                        <div className={styles.navbarBurgurLinks}>

                                            <div className={styles.blogBurgurCont}>
                                                <Link className={styles.blogBurgur} to={item.to}>
                                                    {item.burgurBtn}
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                })
                            }



                        </div>


                    </div>


                </>

            </div>

        </>
    );
}
export { EachBlogCategoryNavbar }