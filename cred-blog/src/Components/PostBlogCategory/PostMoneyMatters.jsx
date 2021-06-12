
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './AllBlogPost.module.css';
import { Link } from 'react-router-dom';

function PostMoneyMatters() {


    const history = useHistory();

    const addData = (payload) => {
        return axios.post("https://json-server-mocker-sm2-196.herokuapp.com/blogMoneyMatters", payload)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    const formik = useFormik({
        initialValues: {
            mainHeaderQuestion: "",
            headerExplanation: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            mainImg: "",
            category: "",
            question1: "",
            answer1: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question2: "",
            answer2: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question3: "",
            answer3: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question4: "",
            answer4: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question5: "",
            answer5: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question6: "",
            answer6: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question7: "",
            answer7: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question8: "",
            answer8: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question9: "",
            answer9: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            question10: "",
            answer10: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            newImg: "",
            raedTime: "",
            conclusion: "",
            conclusionAns: {
                para1: "",
                para2: "",
                para3: "",
                para4: ""
            },
            bookmark: false,
            author: "",
            authorAvatar: ""

        },
        onSubmit: values => {
            // console.log(values);
            addData(values)
        }
    })




    return (

        <>






            <div className={styles.AllBlogFormCont}>


                <div className={styles.BlogFormCont}>

                    <h1 style={{ color: "#420FAA" }}>Post Money Matters Blog</h1>

                    <form onSubmit={formik.handleSubmit}>

                        <div>

                            <hr />

                            <h3 style={{ textAlign: "left" }}>Title Information  {">>"}</h3>


                            <div className={styles.divStyles} className={styles.labelStylesHeader} htmlFor="mainHeaderQuestion">Title</div>
                            <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.mainHeaderQuestion} placeholder="Blog Title" name="mainHeaderQuestion" id="mainHeaderQuestion" />
                            <br /><br />

                            <div>




                                {

                                    <>



                                        <div>


                                            <div className={styles.labelStyles} htmlFor="headerExplanation.para1">Paragraph - 1</div>
                                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.headerExplanation.para1} placeholder="Add Paragraph 1" name="headerExplanation.para1" id="headerExplanation.para1" />
                                            <br /><br />

                                            <div className={styles.labelStyles} htmlFor="headerExplanation.para2">Paragraph - 2</div>
                                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.headerExplanation.para2} placeholder="Add Paragraph 2" name="headerExplanation.para2" id="headerExplanation.para2" />
                                            <br /><br />

                                            <div className={styles.labelStyles} htmlFor="headerExplanation.para3">Paragraph - 3</div>
                                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.headerExplanation.para3} placeholder="Add Paragraph 3" name="headerExplanation.para3" id="headerExplanation.para3" />
                                            <br /><br />

                                            <div className={styles.labelStyles} htmlFor="headerExplanation.para4">Paragraph - 4</div>
                                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.headerExplanation.para4} placeholder="Add Paragraph 4" name="headerExplanation.para4" id="headerExplanation.para4" />
                                            <br /><br />

                                        </div>
                                    </>
                                }




                            </div>


                            <div className={styles.labelStyles} htmlFor="mainImg">Title Image</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.mainImg} placeholder="Add Image Url" name="mainImg" id="mainImg" />
                            <br /><br />

                            <div className={styles.labelStyles} htmlFor="category">Category</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.category} placeholder="Add Category" name="category" id="category" />
                            <br /><br />



                        </div>



                        <hr />


                        <div>

                            <h3 style={{ textAlign: "left" }}>Blog Information {">>"}</h3>




                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 1</div>


                                {

                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question1">Header 1</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question1} placeholder="Add Header 1" name="question1" id="question1" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer1.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer1.para1} placeholder="Add Paragraph 1" name="answer1.para1" id="answer1.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer1.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer1.para2} placeholder="Add Paragraph 2" name="answer1.para2" id="answer1.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer1.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer1.para3} placeholder="Add Paragraph 3" name="answer1.para3" id="answer1.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer1.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer1.para4} placeholder="Add Paragraph 4" name="answer1.para4" id="answer1.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }




                            </div>



                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 2</div>


                                {


                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question2">Header 2</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question2} placeholder="Add Header 2" name="question2" id="question2" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer2.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer2.para1} placeholder="Add Paragraph 1" name="answer2.para1" id="answer2.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer2.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer2.para2} placeholder="Add Paragraph 2" name="answer2.para2" id="answer2.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer2.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer2.para3} placeholder="Add Paragraph 3" name="answer2.para3" id="answer2.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer2.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer2.para4} placeholder="Add Paragraph 4" name="answer2.para4" id="answer2.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }




                            </div>




                            <div>


                                <div className={styles.blogSubtitle} >Blog SubTitle 3</div>



                                {



                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question3">Header 3</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question3} placeholder="Add Header 3" name="question3" id="question3" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer3.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer3.para1} placeholder="Add Paragraph 1" name="answer3.para1" id="answer3.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer3.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer3.para2} placeholder="Add Paragraph 2" name="answer3.para2" id="answer3.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer3.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer3.para3} placeholder="Add Paragraph 3" name="answer3.para3" id="answer3.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer3.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer3.para4} placeholder="Add Paragraph 4" name="answer3.para4" id="answer3.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }



                            </div>



                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 4</div>



                                {




                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question4">Header 4</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question4} placeholder="Add Header 4" name="question4" id="question4" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer4.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer4.para1} placeholder="Add Paragraph 1" name="answer4.para1" id="answer4.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer4.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer4.para2} placeholder="Add Paragraph 2" name="answer4.para2" id="answer4.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer4.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer4.para3} placeholder="Add Paragraph 3" name="answer4.para3" id="answer4.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer4.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer4.para4} placeholder="Add Paragraph 4" name="answer4.para4" id="answer4.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }




                            </div>




                            <div>


                                <div className={styles.blogSubtitle} >Blog SubTitle 5</div>



                                {



                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question5">Header 5</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question5} placeholder="Add Header 5" name="question5" id="question5" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer5.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer5.para1} placeholder="Add Paragraph 1" name="answer5.para1" id="answer5.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer5.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer5.para2} placeholder="Add Paragraph 2" name="answer5.para2" id="answer5.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer5.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer5.para3} placeholder="Add Paragraph 3" name="answer5.para3" id="answer5.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer5.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer5.para4} placeholder="Add Paragraph 4" name="answer5.para4" id="answer5.para4" />
                                                <br /><br />

                                            </div>

                                        </div>



                                    </div>
                                }



                            </div>




                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 6</div>



                                {




                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question6">Header 6</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question6} placeholder="Add Header 6" name="question6" id="question6" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer6.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer6.para1} placeholder="Add Paragraph 1" name="answer6.para1" id="answer6.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer6.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer6.para2} placeholder="Add Paragraph 2" name="answer6.para2" id="answer6.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer6.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer6.para3} placeholder="Add Paragraph 3" name="answer6.para3" id="answer6.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer6.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer6.para4} placeholder="Add Paragraph 4" name="answer6.para4" id="answer6.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }



                            </div>





                            <div>


                                <div className={styles.blogSubtitle} >Blog SubTitle 7</div>


                                {





                                    <div>


                                        <div className={styles.labelStylesHeader} htmlFor="question7">Header 7</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question7} placeholder="Add Header 7" name="question7" id="question7" />
                                        <br /><br />

                                        <div>


                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer7.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer7.para1} placeholder="Add Paragraph 1" name="answer7.para1" id="answer7.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer7.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer7.para2} placeholder="Add Paragraph 2" name="answer7.para2" id="answer7.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer7.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer7.para3} placeholder="Add Paragraph 3" name="answer7.para3" id="answer7.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer7.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer7.para4} placeholder="Add Paragraph 4" name="answer7.para4" id="answer7.para4" />
                                                <br /><br />

                                            </div>

                                        </div>

                                    </div>
                                }



                            </div>




                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 8</div>



                                {



                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question8">Header 8</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question8} placeholder="Add Header 8" name="question8" id="question8" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer8.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer8.para1} placeholder="Add Paragraph 1" name="answer8.para1" id="answer8.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer8.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer8.para2} placeholder="Add Paragraph 2" name="answer8.para2" id="answer8.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer8.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer8.para3} placeholder="Add Paragraph 3" name="answer8.para3" id="answer8.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer8.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer8.para4} placeholder="Add Paragraph 4" name="answer8.para4" id="answer8.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }



                            </div>



                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 9</div>


                                {




                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question9">Header 9</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question9} placeholder="Add Header 9" name="question9" id="question9" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer9.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer9.para1} placeholder="Add Paragraph 1" name="answer9.para1" id="answer9.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer9.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer9.para2} placeholder="Add Paragraph 2" name="answer9.para2" id="answer9.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer9.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer9.para3} placeholder="Add Paragraph 3" name="answer9.para3" id="answer9.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer9.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer9.para4} placeholder="Add Paragraph 4" name="answer9.para4" id="answer9.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }




                            </div>



                            <div>

                                <div className={styles.blogSubtitle} >Blog SubTitle 10</div>



                                {




                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="question10">Header 10</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.question10} placeholder="Add Header 10" name="question10" id="question10" />
                                        <br /><br />

                                        <div>


                                            <div>


                                                <div className={styles.labelStyles} htmlFor="answer10.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer10.para1} placeholder="Add Paragraph 1" name="answer10.para1" id="answer10.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer10.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer10.para2} placeholder="Add Paragraph 2" name="answer10.para2" id="answer10.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="answer10.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer10.para3} placeholder="Add Paragraph 3" name="answer10.para3" id="answer10.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="answer10.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.answer10.para4} placeholder="Add Paragraph 4" name="answer10.para4" id="answer10.para4" />
                                                <br /><br />

                                            </div>

                                        </div>



                                    </div>
                                }


                            </div>




                        </div>



                        <hr />


                        <div>

                            <h3 style={{ textAlign: "left" }}>Extra Information and Conclusion {">>"}</h3>


                            <div className={styles.labelStyles} htmlFor="newImg">Paragraph Image</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.newImg} placeholder="Add Para Img Url" name="newImg" id="newImg" />
                            <br /><br />


                            <div className={styles.labelStyles} htmlFor="raedTime">Read Time</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.raedTime} placeholder="Add Read Time" name="raedTime" id="raedTime" />
                            <br /><br />

                            <div>


                                <div className={styles.blogSubtitle} >Conclusion</div>



                                {



                                    <div>

                                        <div className={styles.labelStylesHeader} htmlFor="conclusion">Conclusion</div>
                                        <textarea row="2" col="30" className={styles.allInputsPostingHeader} onChange={formik.handleChange} value={formik.values.conclusion} placeholder="Add Conclusion" name="conclusion" id="conclusion" />
                                        <br /><br />

                                        <div>



                                            <div>


                                                <div className={styles.labelStyles} htmlFor="conclusionAns.para1">Paragraph - 1</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.conclusionAns.para1} placeholder="Add Paragraph 1" name="conclusionAns.para1" id="conclusionAns.para1" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="conclusionAns.para2">Paragraph - 2</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.conclusionAns.para2} placeholder="Add Paragraph 2" name="conclusionAns.para2" id="conclusionAns.para2" />
                                                <br /><br />


                                                <div className={styles.labelStyles} htmlFor="conclusionAns.para3">Paragraph - 3</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.conclusionAns.para3} placeholder="Add Paragraph 3" name="conclusionAns.para3" id="conclusionAns.para3" />
                                                <br /><br />

                                                <div className={styles.labelStyles} htmlFor="conclusionAns.para4">Paragraph - 4</div>
                                                <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.conclusionAns.para4} placeholder="Add Paragraph 4" name="conclusionAns.para4" id="conclusionAns.para4" />
                                                <br /><br />

                                            </div>

                                        </div>


                                    </div>
                                }




                            </div>


                        </div>

                        <hr />

                        <div>

                            <h3 style={{ textAlign: "left" }}>Author Information  {">>"}</h3>


                            <div className={styles.labelStyles} htmlFor="author">Author</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.author} placeholder="Add Author Name" name="author" id="author" />
                            <br /><br />

                            <div className={styles.labelStyles} htmlFor="authorAvatar">Author Avatar</div>
                            <textarea row="2" col="30" className={styles.allInputsPosting} onChange={formik.handleChange} value={formik.values.authorAvatar} placeholder="Add Author Profile" name="authorAvatar" id="authorAvatar" />
                            <br /><br />



                        </div>



                        <input className={styles.submitBtnBlogPost} type="submit" />


                    </form>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px" }}>


                        <Link style={{ marginTop: "30px" }} onClick={() => history.goBack()} className={styles.goBackBtnBlogPost}>Go Back</Link>

                        <Link to="/" style={{ marginTop: "30px" }} className={styles.goBackBtnBlogPost}>Go to Blog Home</Link>

                    </div>




                </div>


            </div>

        </>

    )
}
export { PostMoneyMatters }