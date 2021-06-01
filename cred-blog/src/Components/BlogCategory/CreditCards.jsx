import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideNavbar } from '../Sidenav';
import { BlogCategoryNavbar } from './BlogCategoryNav/BlogCategoryNavbar';
import styles from './CreditCards.module.css'

function CreditCards() {
    const [data1, setData1] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


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



    useEffect(() => {
        getCreditCardData();

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
                                        data1.map((item) => {
                                            return <div key={item.id}>
                                                <div className={styles.firstLetter}>
                                                    {item.mainHeaderQuestion[0]}
                                                </div>


                                                <div className={styles.blogHomeHeader}>
                                                    <h1>{item.mainHeaderQuestion}</h1>
                                                </div>

                                                <div className={styles.readTime}>
                                                    <p>{item.raedTime}</p>
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
export { CreditCards }