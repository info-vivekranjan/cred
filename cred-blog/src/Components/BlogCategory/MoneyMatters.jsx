import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideNavbar } from '../Sidenav';
import { BlogCategoryNavbar } from './BlogCategoryNav/BlogCategoryNavbar';
import styles from './CreditCards.module.css'

function MoneyMatters() {
    const [data3, setData3] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getMoneyMattersData = () => {
        setIsLoading(true)
        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters")
            .then((res) => {
                console.log(res);
                setData3(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            }).finally(() => {
                setIsLoading(false)
            })

    }


    const toggleBookmark = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getMoneyMattersData()
            }).catch((err) => {
                console.log(err);
            })
    }




    useEffect(() => {
        getMoneyMattersData();

    }, [])



    return (

        <>


            <BlogCategoryNavbar />

            <div className={styles.blogHomeMainCont}>


                <div className={styles.blogHomeCont}>
                    <h4>LATEST STORIES</h4>


                    {
                        isLoading ? <h3>Loading...</h3> :
                            isError ? <h3>Something went wrong...</h3> :
                                <>

                                    {
                                        data3.map((item) => {
                                            return <div>
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
                                                            <i onClick={() => toggleBookmark(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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
                                                    <Link className={styles.readOn} to={`money-matters/${item.id}`}>Read on</Link>
                                                </div>
                                            </div>
                                        })
                                    }

                                </>
                    }




                </div>
            </div>

            <SideNavbar />

        </>
    );
}
export { MoneyMatters }