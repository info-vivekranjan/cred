import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideNavbar } from '../Sidenav';
import { BlogCategoryNavbar } from './BlogCategoryNav/BlogCategoryNavbar';
import styles from './CreditCards.module.css'
import { FooterBlog } from '../Footer/FooterBlog'



import { BlogNavSticky } from '../BlogNavSticky/BlogNavSticky';

import { useWindowScroll } from 'react-use';




// Using styles of Credit Cards Component


function Tech() {
    const [data5, setData5] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);




    const { y: pageYOffset } = useWindowScroll();
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        if (pageYOffset > 1300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [pageYOffset])




    const getTechData = () => {

        setIsLoading(true)

        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogTech")
            .then((res) => {
                // console.log(res);
                setData5(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }


    const toggleBookmark = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogTech/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getTechData()
            }).catch((err) => {
                console.log(err);
            })
    }



    useEffect(() => {
        getTechData();

    }, [])



    React.useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (

        <>


            <BlogCategoryNavbar />


            {


                isVisible &&
                <BlogNavSticky />

            }



            <div className={styles.blogHomeMainCont}>


                <div className={styles.blogHomeCont}>
                    <h4 style={{ textAlign: "center" }}>CATEGORY - TECH</h4>

                    {
                        isLoading ? <h3>Loading...</h3> :
                            isError ? <h3>Something went wrong...</h3> :
                                <>

                                    {
                                        data5.map((item) => {
                                            return <div key={item.id}>
                                                <div className={styles.firstLetter}>
                                                    {item.mainHeaderQuestion[0]}
                                                </div>


                                                <div className={styles.blogHomeHeader}>
                                                    <h1>{item.mainHeaderQuestion}</h1>
                                                </div>


                                                <div className={styles.blogBottomBtnCont}>
                                                    <div className={styles.readTime}>
                                                        <p>{item.raedTime}</p>
                                                    </div>
                                                    <div>
                                                        {
                                                            !item.bookmark &&
                                                            <i onClick={() => toggleBookmark(item.id, item.bookmark)} id={styles.bookmarkTooltip} className="ri-bookmark-line">
                                                                <span className={styles.bookmarkTooltipText}>
                                                                    Bookmark it
                                                                </span>
                                                            </i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark(item.id, item.bookmark)} id={styles.bookmarkTooltip} className="ri-bookmark-fill">
                                                                <span className={styles.bookmarkTooltipText}>
                                                                    Remove from Bookmark
                                                                </span>
                                                            </i>
                                                        }
                                                    </div>
                                                </div>



                                                {
                                                    item.mainImg !== "" &&
                                                    <div className={styles.blogHomeImg}>
                                                        <img src={item.mainImg} alt="BLOG-IMG" />
                                                    </div>
                                                }

                                                {
                                                    item.mainImg[0] === "" &&
                                                    <div className={styles.blogHomeImg}>

                                                    </div>
                                                }


                                                <div className={styles.blogHomePara}>
                                                    <p>{item.headerExplanation.para1}</p>
                                                </div>

                                                <div className={styles.readOnCont}>
                                                    <Link className={styles.readOn} to={`tech/${item.id}`}>Read on</Link>
                                                </div>



                                            </div>
                                        })
                                    }

                                </>



                    }


                </div>

                <FooterBlog />

            </div>

            <SideNavbar />

        </>
    );
}
export { Tech }