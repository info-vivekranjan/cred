import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { BlogCategoryNavbar } from '../BlogCategory/BlogCategoryNav/BlogCategoryNavbar';
import { FooterBlog } from '../Footer/FooterBlog';
import { SideNavbar } from '../Sidenav';
import styles from './RegisterForChat.module.css';


function RegisterForChat() {

    const initVal = {
        name: "",
        email: "",
        mobile: "",
        reason: ""
    }

    const [query, setQuery] = useState(initVal);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setQuery({
            ...query,
            [name]: value
        })

    }

    const postChatRequest = (payload) => {
        setIsLoading(true);
        return axios({
            method: "post",
            url: "https://json-server-mocker-sm2-196.herokuapp.com/registerForChat",
            data: payload
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(query);
        postChatRequest(query);
    }


    return (

        <>


            <BlogCategoryNavbar />

            <div className={styles.blogHomeMainCont}>


                <div className={styles.blogHomeCont}>

                    <h3>Register for one on one chat</h3>
                    <br />
                    <hr />
                    <br />
                    <>
                        {
                            isLoading ? <h3>Loading...</h3> :
                                isError ? <h3>Something Went Wrong...</h3> :

                                    <>

                                        <form onSubmit={handleSubmit}>
                                            <div className={styles.registerChatInputCont} >
                                                <div className={styles.registerChatLabel}> Name</div>
                                                <input className={styles.inputBox} placeholder="Enter Full Name" onChange={handleChange} name="name" />
                                            </div>
                                            <div className={styles.registerChatInputCont} >
                                                <div className={styles.registerChatLabel}> Email</div>
                                                <input className={styles.inputBox} placeholder="Enter Email Id" onChange={handleChange} name="email" />
                                            </div>
                                            <div className={styles.registerChatInputCont} >
                                                <div className={styles.registerChatLabel}> Mobile No.</div>
                                                <input className={styles.inputBox} placeholder="Enter Mobile No." onChange={handleChange} name="mobile" />
                                            </div>
                                            <div className={styles.registerChatInputCont} >
                                                <div className={styles.registerChatLabel}> Reason</div>
                                                <textarea rows="5" cols="30" maxLength="600" className={styles.inputBox} placeholder="Enter Reason, Why do you connect with CRED..." onChange={handleChange} name="reason" />
                                            </div>
                                            <input className={styles.registerChatBtn} type="submit" value="REGISTER" />
                                        </form>


                                    </>
                        }
                    </>


                </div>

                <FooterBlog />

            </div>

            <SideNavbar />

        </>

    );

}

export { RegisterForChat }