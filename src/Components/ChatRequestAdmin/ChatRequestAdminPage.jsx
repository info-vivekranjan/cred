import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './ChatRequestAdminPage.module.css';
import cx from 'classnames';

function ChatRequestAdminPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    const getChatRequest = () => {
        setIsLoading(true);
        axios.get("https://json-server-mocker-sm2-196.herokuapp.com/registerForChat")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    useEffect(() => {
        getChatRequest();
    }, [])

    const toggleChatRequest = (id, status) => {

        axios.patch(`https://json-server-mocker-sm2-196.herokuapp.com/registerForChat/${id}`, {
            status: !status
        })
            .then((res) => {
                return getChatRequest();
            })
            .catch((err) => {
                console.log(err);
            })

    }


    const deleteChatRequest = (id) => {
        axios.delete(`https://json-server-mocker-sm2-196.herokuapp.com/registerForChat/${id}`)
            .then((res) => {
                const updatedValue = data.filter((item) => item.id !== id)
                return getChatRequest();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={styles.ChatRequestAdminPageCont}>

            <div className={styles.ChatRequestAdminPage}>

                <h2>Chat Requests</h2>

                {
                    data.length === 0 &&
                    <h1>Their is No chat Requests</h1>
                }

                {
                    data.length > 0 &&
                    <>


                        {


                            isLoading ? <h3>Loading...</h3> :
                                isError ? <h3>Something Went Wrong...</h3> :

                                    <div className={styles.ChatRequestTableCont}>

                                        <div className={styles.ChatRequestHeader}>
                                            <div className={styles.ChatRequestHeaderBlockSrNo} >Sr No.</div>
                                            <div className={styles.ChatRequestHeaderBlock} >Name</div>
                                            <div className={cx(styles.ChatRequestHeaderBlockEmail)} >Email Id</div>
                                            <div className={styles.ChatRequestHeaderBlock} >Mobile</div>
                                            <div className={cx(styles.ChatRequestHeaderBlock, styles.ChatRequestHeaderBlockReason)} >Reason</div>
                                            <div className={styles.ChatRequestHeaderBlock} >Status</div>
                                            <div className={styles.ChatRequestHeaderBlock}>Change</div>
                                        </div>

                                        {
                                            data.map((item) => {
                                                return <div key={item.id} className={styles.ChatRequestBodyCont}>
                                                    <div className={styles.ChatRequestBody}>
                                                        <div className={styles.ChatRequestHeaderBlockSrNo} >{item.id}</div>
                                                        <div className={styles.ChatRequestHeaderBlock} >{item.name}</div>
                                                        <div className={cx(styles.ChatRequestHeaderBlockEmail)}>{item.email}</div>
                                                        <div className={styles.ChatRequestHeaderBlock} >{item.mobile}</div>

                                                        <div className={cx(styles.ChatRequestHeaderBlock, styles.ChatRequestHeaderBlockReason)}>{item.reason}</div>
                                                        <div className={styles.ChatRequestHeaderBlock} >{item.status ? "Done" : "Pending"}</div>
                                                        <div className={styles.ChatRequestHeaderBlock}>

                                                            <div onClick={() => toggleChatRequest(item.id, item.status)}>

                                                                {
                                                                    !item.status &&
                                                                    <i style={{ fontSize: "28px", color: "orange", cursor: "pointer" }} className="ri-checkbox-fill"></i>

                                                                }

                                                                {
                                                                    item.status &&
                                                                    <i style={{ fontSize: "28px", color: "green", cursor: "pointer" }} className="ri-checkbox-fill"></i>

                                                                }
                                                            </div>

                                                            <br />


                                                            <div onClick={() => deleteChatRequest(item.id)}>
                                                                <i style={{ fontSize: "28px", color: "red", cursor: "pointer" }} className="ri-delete-bin-2-fill"></i>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>

                        }

                    </>
                }

            </div>

        </div>
    );
}
export { ChatRequestAdminPage }