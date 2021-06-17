import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import LoadingSpinner from '../../Components/Careers/LoadingSpinner';
import { BsFileText, BsFillChatSquareDotsFill } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import { BiNotepad } from "react-icons/bi";
import { AiOutlineLogout } from 'react-icons/ai';
import AuthContext from '../../Context/AuthContext';


const Dashboard = styled.div`
    & .loading {
        display: flex;
        padding: 5%;
        justify-content: center;
        font-size: 2em;
    }
`;

const Navbar = styled.div`
    background-color: #3a44a1;
    padding: 3%;
    /* text-align: right; */

    & .link {
        font-size: 1.6em;
        font-weight: bolder;
        color: #e2e2e2;
        text-decoration: none;
        cursor: pointer;
        margin: 1%;
        padding: 2%;

        :hover {
            color: white;
        }

        /* & .pending {
            background-color: black;
            color: white;
            font-size: 0.6em;
            padding: 3%;
            border-radius: 50%;
            position: relative;
            bottom: 1em;
            
            @media (max-width: 800px) {
                padding: 5%;
            }
        } */
    }

    & .navLinks {
        padding: 0;
        display: grid;
        grid-template-columns: 16% 16% 16% 16% 16% 16%;
        text-align: center;
        align-items: center;

        @media (max-width: 950px) {
            grid-template-columns: 20% 20% 20% 20% 20% ;
        }
    }

    & .logout {
        text-align: right;

        & .link {
            background-color: #0f1658;
            color: white;
            border-radius: 10px;
            padding: 5% 10%;

            :hover {
                color: red;
            }

            @media (max-width: 600px) {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

const Overview = styled.div`
    text-align: center;

    & .totalAppl,
      .totalChats {
        text-align: center;
        margin: 2%;
        padding: 2%;
        box-shadow: 1px 1px 10px lightgray;
        border-radius: 10px;

        :hover {
            box-shadow: 1px 1px 10px gray;
        }
    
        & > h3 {
            font-size: 2em;
            margin: 0;
            padding: 2%;

            @media (max-width: 370px) {
                font-size: 1.3em;
            }
        }

        & .stats {
            display: grid;
            grid-template-columns: 33.33% 33.33% 33.33%;
            padding: 0 5%;
            font-size: 1.3em;

            & h3 {
                color: gray;
            }

            @media (max-width: 450px) {
                /* grid-template-columns: 100%; */
                font-size: 1em;

                & h3,h2 {
                    margin: 5%;
                }
            }

            @media (max-width: 340px) {
                grid-template-columns: 100%;
            }
        }

        @media (max-width: 450px) {
            font-size: 1em;
            padding: 10% 3%;
            margin: 3%;
        }
    }
`;

const AdminDashboard = () => {

    // DOCUMENT TITLE
    document.title = `Dashboard`;

    // AUTH STATUS FROM AUTH CONTEXT
    const { auth, handleAuth } = React.useContext(AuthContext);

    // DISPLAY WIDTH
    const [width, setWidth] = React.useState("");

    // JSON APPLICATION LINK
    const applUrl = process.env.REACT_APP_JSON_URL_APPLICATION;

    // PENDING APPLICATIONS
    const [selected, setSelected] = React.useState(0);
    const [rejected, setRejected] = React.useState(0);
    const [pending, setPending] = React.useState(0);

    // ACTIONS
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    // LOGOUT
    const handleLogout = () => {
        handleAuth();
    }

    // LOADS APPLICATION DATA
    const loadList = () => {

        // DEFAULT ACTIONS
        setLoading(true);
        setError(false);
        setErrorMsg("");

        axios.get(applUrl)
            .then(res => {
                setPending(res.data.filter(ele => ele.selected === "pending").length);
                setSelected(res.data.filter(ele => ele.selected === true).length);
                setRejected(res.data.filter(ele => ele.selected === false).length);
            })
            .catch(err => {
                console.log(err.message);
                setError(true);
                setErrorMsg(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // CHECKS SCREEN SIZE ON SCREEN RESIZE
    const checkDimensions = () => {
        setWidth(window.innerWidth);
    }

    // EVENT LISTENER FOR WINDOW RESIZE
    window.addEventListener('resize', checkDimensions);


    React.useEffect(() => {
        loadList();
        checkDimensions();
        // eslint-disable-next-line
    }, []);

    // ADMIN NOT LOGGED IN THEN REDIRECT TO LOGIN PAGE 
    if (!auth) {
        return <Redirect to='/login' />
    }

    return (
        <Dashboard>

            {/* NAVBAR */}
            <Navbar>

                {/* LINKS */}
                <div className="navLinks">

                    {/* APPLICATIONS LIST LINK */}
                    <div>
                        <Link to='/applications' className="link">
                            <span className="icon"><BsFileText /> </span>
                            {
                                width >= 950 ? <span>applications</span> : false
                            }
                            {/* { pending ? <span className="pending">{pending}</span> : false } */}
                        </Link>
                    </div>

                    {/* BLOG POST LINK */}
                    <div>
                        <Link to='/category/postblogs' className="link">
                            <span className="icon"><FaBloggerB /> </span>
                            {
                                width >= 950 ? <span>blog post</span> : false
                            }
                        </Link>
                    </div>

                    {/* CHAT MANAGEMENT LINK */}
                    <div>
                        <Link to='/admin/chatrequests' className="link">
                            <span className="icon"><BsFillChatSquareDotsFill /> </span>
                            {
                                width >= 950 ? <span>chat</span> : false
                            }
                            {/* { pending ? <span className="pending">{1}</span> : false } */}
                        </Link>
                    </div>

                    {/* NEW JOB POST LINK */}
                    <div>
                        <Link to='/newJobPost' className="link">
                            <span className="icon"><BiNotepad /> </span>
                            {
                                width >= 950 ? <span>job post</span> : false
                            }
                        </Link>
                    </div>

                    {/* JOIN MEETING */}

                    <div>
                        <Link to='/joinmeeting' className="link">
                            <span className="icon"><BiNotepad /> </span>
                            {
                                width >= 950 ? <span>Join Meeting</span> : false
                            }
                        </Link>
                    </div>



                    {/* LOGOUT LINK */}
                    <div className="logout">
                        <Link to='/login' className="link">
                            {
                                width >= 600 ? <span onClick={handleLogout}>logout</span> : <span className="icon" onClick={handleLogout}><AiOutlineLogout /> </span>
                            }
                        </Link>
                    </div>
                </div>
            </Navbar>

            {
                // LOADING 
                loading ? <div className="loading"><LoadingSpinner /></div> :

                    // ERROR
                    error ? <div>ERROR: {errorMsg}</div> :

                        // OVERVIEW
                        <Overview>

                            {/* APPLICATION OVERVIEW */}
                            <div className="totalAppl">
                                <h3>total applications - {selected + rejected + pending}</h3>
                                <div className="stats">
                                    <div>
                                        <h3>selected</h3>
                                        <h2>{selected}</h2>
                                    </div>
                                    <div>
                                        <h3>rejected</h3>
                                        <h2>{rejected}</h2>
                                    </div>
                                    <div>
                                        <h3>pending</h3>
                                        <h2>{pending}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* CHATS OVERVIEW */}
                            <div className="totalChats">
                                <h3>total chatrooms - 0</h3>
                                <div className="stats">
                                    <div>
                                        <h3>active</h3>
                                        <h2>0</h2>
                                    </div>
                                    <div>
                                        <h3>closed</h3>
                                        <h2>0</h2>
                                    </div>
                                    <div>
                                        <h3>requests</h3>
                                        <h2>0</h2>
                                    </div>
                                </div>
                            </div>
                        </Overview>
            }
        </Dashboard>
    )
}

export default AdminDashboard;