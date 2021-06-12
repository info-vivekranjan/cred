import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogCategoryNavbar } from '../BlogCategory/BlogCategoryNav/BlogCategoryNavbar';
import { SideNavbar } from '../Sidenav';

import styles from './Bookmarks.module.css';

import { FooterBlog } from '../Footer/FooterBlog';


function BookMarks() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const [data6, setData6] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    // Getting Data from Api


    const getCreditCardData = () => {

        setIsLoading(true)

        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogCreditCards")
            .then((res) => {
                // console.log(res);
                setData1(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }



    const getBestCreditCardData = () => {

        setIsLoading(true)

        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogBestCreditCards")
            .then((res) => {
                // console.log(res);
                setData2(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }



    const getMoneyMattersData = () => {
        setIsLoading(true)
        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters")
            .then((res) => {
                console.log(res);
                setData3(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }



    const getCreditCardsPaymentData = () => {

        setIsLoading(true)

        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogCreditCardPayment")
            .then((res) => {
                // console.log(res);
                setData4(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }




    const getSocialData = () => {

        setIsLoading(true)

        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/blogSocial")
            .then((res) => {
                // console.log(res);
                setData6(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            }).finally(() => {
                setIsLoading(false)
            })

    }





    // Toggle Function 


    const toggleBookmark1 = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogCreditCards/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getCreditCardData()
            }).catch((err) => {
                console.log(err);
            })
    }



    const toggleBookmark2 = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogBestCreditCards/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getBestCreditCardData()
            }).catch((err) => {
                console.log(err);
            })
    }


    const toggleBookmark3 = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getMoneyMattersData()
            }).catch((err) => {
                console.log(err);
            })
    }

    const toggleBookmark4 = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogCreditCardPayment/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getCreditCardsPaymentData();
            }).catch((err) => {
                console.log(err);
            })
    }



    const toggleBookmark6 = (id, bookmark) => {
        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/blogSocial/${id}`, {
            bookmark: !bookmark
        })
            .then((res) => {
                return getSocialData();
            }).catch((err) => {
                console.log(err);
            })
    }



    // UseEffect for Get Data


    useEffect(() => {
        getCreditCardData();

    }, [])



    useEffect(() => {
        getBestCreditCardData();

    }, [])


    useEffect(() => {
        getMoneyMattersData();

    }, [])



    useEffect(() => {
        getCreditCardsPaymentData();

    }, [])



    useEffect(() => {
        getSocialData();

    }, [])



    // Displaying the Data


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

                                        data1.map((item) => {
                                            return <div key={item.id}>

                                                {
                                                    item.bookmark &&


                                                    <>
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
                                                                    <i onClick={() => toggleBookmark1(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                                }

                                                                {
                                                                    item.bookmark &&
                                                                    <i onClick={() => toggleBookmark1(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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
                                                            <Link className={styles.readOn} to={`credit-cards/${item.id}`}>Read on</Link>
                                                        </div>


                                                    </>


                                                }


                                            </div>
                                        })

                                    }

                                </>



                    }




                    {
                        // isLoading ? <h3></h3> :
                        //     isError ? <h3>Something went wrong...</h3> :



                        <>

                            {

                                data3.map((item) => {
                                    return <div key={item.id}>

                                        {
                                            item.bookmark &&


                                            <>
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
                                                            <i onClick={() => toggleBookmark3(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark3(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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


                                            </>


                                        }


                                    </div>
                                })

                            }

                        </>



                    }





                    {
                        // isLoading ? <h3></h3> :
                        //     isError ? <h3>Something went wrong...</h3> :



                        <>

                            {

                                data2.map((item) => {
                                    return <div key={item.id}>

                                        {
                                            item.bookmark &&


                                            <>
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
                                                            <i onClick={() => toggleBookmark2(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark2(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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
                                                    <Link className={styles.readOn} to={`best-credit-cards/${item.id}`}>Read on</Link>
                                                </div>


                                            </>


                                        }


                                    </div>
                                })

                            }

                        </>



                    }



                    {
                        // isLoading ? <h3></h3> :
                        //     isError ? <h3>Something went wrong...</h3> :



                        <>

                            {

                                data4.map((item) => {
                                    return <div key={item.id}>

                                        {
                                            item.bookmark &&


                                            <>
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
                                                            <i onClick={() => toggleBookmark4(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark4(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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
                                                    <Link className={styles.readOn} to={`credit-card-payment/${item.id}`}>Read on</Link>
                                                </div>


                                            </>


                                        }


                                    </div>
                                })

                            }

                        </>



                    }






                    {
                        // isLoading ? <h3></h3> :
                        //     isError ? <h3>Something went wrong...</h3> :



                        <>

                            {

                                data6.map((item) => {
                                    return <div key={item.id}>

                                        {
                                            item.bookmark &&


                                            <>
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
                                                            <i onClick={() => toggleBookmark6(item.id, item.bookmark)} className="ri-bookmark-line"></i>
                                                        }

                                                        {
                                                            item.bookmark &&
                                                            <i onClick={() => toggleBookmark6(item.id, item.bookmark)} className="ri-bookmark-fill"></i>
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
                                                    <Link className={styles.readOn} to={`social-announcement/${item.id}`}>Read on</Link>
                                                </div>


                                            </>


                                        }


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
export { BookMarks }