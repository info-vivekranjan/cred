import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SideNavbar } from '../Sidenav';
import { EachBlogCategoryNavbar } from './BlogCategoryEachPageNav/EachBlogCategoryNavbar';
import styles from './AllCateDataPage.module.css'
import cx from 'classnames';
import { FooterBlog } from '../Footer/FooterBlog';


import { BlogNavSticky } from '../BlogNavSticky/BlogNavSticky';

import { useWindowScroll } from 'react-use';




function MoneyMattersDataPage() {
    const [data1, setData1] = useState("");


    const { y: pageYOffset } = useWindowScroll();
    const [isVisible, setIsVisible] = useState(false);



    useEffect(() => {
        if (pageYOffset > 1300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [pageYOffset])



    console.log(data1?.answer1?.para1)


    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getCreditCardData = () => {
        setIsLoading(true);
        axios.get(`https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters/${id}`)
            .then((res) => {
                // console.log(res);
                setData1(res.data)
            })
            .catch((err) => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }



    useEffect(() => {
        getCreditCardData();

    }, [])



    return (

        <>


            <EachBlogCategoryNavbar data={data1} />



            {


                isVisible &&
                <BlogNavSticky />

            }






            {
                <div className={styles.blogHomeMainCont}>

                    {

                        <div className={styles.blogHomeCont}>


                            {
                                isLoading ? <h3>Loading...</h3> :
                                    isError ? <h3>Something went wrong...</h3> :

                                        <>
                                            <div>

                                                <div className={cx(styles.allParas)}>
                                                    {data1?.headerExplanation?.para1}
                                                </div>

                                                <div className={cx(styles.allParas)}>
                                                    {data1?.headerExplanation?.para2}
                                                </div>

                                                <div className={cx(styles.allParas)}>
                                                    {data1?.headerExplanation?.para3}
                                                </div>

                                                <div className={cx(styles.allParas)}>
                                                    {data1?.headerExplanation?.para4}
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question1}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer1?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer1?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer1?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer1?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question2}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer2?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer2?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer2?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer2?.para4}
                                                    </div>
                                                </div>

                                            </div>



                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question3}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer3?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer3?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer3?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer3?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question4}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer4?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer4?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer4?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer4?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question5}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer5?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer5?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer5?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer5?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question6}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer6?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer6?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer6?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer6?.para4}
                                                    </div>
                                                </div>

                                            </div>



                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question7}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer7?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer7?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer7?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer7?.para4}
                                                    </div>
                                                </div>

                                            </div>




                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question8}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer8?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer8?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer8?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer8?.para4}
                                                    </div>
                                                </div>

                                            </div>




                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question9}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer9?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer9?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer9?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer9?.para4}
                                                    </div>
                                                </div>

                                            </div>



                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.question10}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer10?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer10?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer10?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.answer10?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <h3 className={cx(styles.allHeaders)}>{data1?.conclusion}</h3>


                                                <div>
                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.conclusionAns?.para1}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.conclusionAns?.para2}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.conclusionAns?.para3}
                                                    </div>

                                                    <div className={cx(styles.allParas)}>
                                                        {data1?.conclusionAns?.para4}
                                                    </div>
                                                </div>

                                            </div>


                                        </>

                            }


                        </div>


                    }

                    <FooterBlog />

                </div>}

            <SideNavbar />

        </>
    );
}
export { MoneyMattersDataPage }