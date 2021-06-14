import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import axios from 'axios';
import LoadingSpinner from '../Components/Careers/LoadingSpinner';

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

        & .pending {
            background-color: black;
            color: white;
            font-size: 0.6em;
            padding: 3% 5%;
            border-radius: 50%;
            position: relative;
            bottom: 1em;
        }
    }

    & .navLinks {
        padding: 0 3%;
        display: grid;
        grid-template-columns: 15% 15% 15% 15% 15% 25%;
        text-align: center;
        align-items: center;
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
        }
    }
`;

const Overview = styled.div`
    text-align: center;

    & .totalAppl {
        text-align: center;
        margin: 2%;
        padding: 2%;
        box-shadow: 1px 1px 10px lightgray;
        border-radius: 10px;
    
        & > h3 {
            font-size: 2em;
            margin: 0;
            padding: 2%;
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
        }

        @media (max-width: 450px) {
            font-size: 1em;
        }
    }
`;

const AdminDashboard = () => {

    // DOCUMENT TITLE
    document.title = `dashboard`;

    // DISPLAY WIDTH
    const [width,setWidth] = React.useState("");

    // JSON APPLICATION LINK
    const applUrl = process.env.REACT_APP_JSON_URL_APPLICATION;

    // PENDING APPLICATIONS
    const [selected,setSelected] = React.useState(0);
    const [rejected,setRejected] = React.useState(0);
    const [pending,setPending] = React.useState(0);

    // ACTIONS
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState("");

    // LOADS APPLICATION DATA
    const loadList = () => {
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
    window.addEventListener('resize',checkDimensions);


    React.useEffect(() => {
        loadList();
        checkDimensions();
        // eslint-disable-next-line
    },[]);

    return (
        <Dashboard>
            <Navbar>
                <div className="navLinks">
                    <div>
                        <Link to='/applications' className="link">applications{ pending ? <span className="pending">{pending}</span> : false }</Link>
                    </div>
                    <div>
                        <Link to='' className="link">blog post</Link>
                    </div>
                    <div>
                        <Link to='' className="link">chat</Link>
                    </div>
                    <div>
                        <Link to='/newJobPost' className="link">job post</Link>
                    </div>
                    <div>
                        <Link to='' className="link">something</Link>
                    </div>
                    <div className="logout">
                        <Link to='/login' className="link">logout</Link>
                    </div>
                </div>
            </Navbar>

            {
                loading ? <div className="loading"><LoadingSpinner/></div> : error ? <div>{errorMsg}</div> :
                <Overview>
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
                </Overview>
            }
        </Dashboard>
    )
}

export default AdminDashboard
