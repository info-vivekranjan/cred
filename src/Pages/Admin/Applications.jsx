import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import LoadingSpinner from '../../Components/Careers/LoadingSpinner';
import AuthContext from '../../Context/AuthContext';

const ApplicationsContainer = styled.div`
    text-align: center;

    & h1 {
        padding: 3% 0;
    }

    & .spinner {
        padding: 10%;
        display: flex;
        justify-content: center;
        font-size: 3em;

        * {
            color: #3a44a1;
        }
    }

    & .filter {
        padding: 1% 10%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        @media (max-width: 850px) {
            flex-direction: column;
        }
        @media (max-width: 500px) {
            padding: 1%;
        }
        @media (max-width: 350px) {
            font-size: 0.8em;
        }
    }

    & .totalAppl {
        width: 40%;
        font-size: 1.3em;
        text-align: center;
        color: white;
        background-color: #161616;
        border-radius: 10px;

        @media (max-width: 850px) {
            width: 80%;
        }
        @media (max-width: 350px) {
            font-size: 1em;
        }
    }

    /* department filter */
    & .select {
        width: 40%;
        font-size: 1.3em;
        padding: 1%;
        outline: none;
        /* border: 1px solid red; */

        & * {
            margin: 1%;
            font-size: 1em;
            padding: 2%;
            width: 80%;
            border-radius: 3px;

            @media (max-width: 850px) {
                width: 80%;
            }
        }

        @media (max-width: 850px) {
            width: 100%;
            margin: 5% 0;
        }
    }

    & .listsSelect {
        margin: 2%;

        & label {
            font-size: 1.3em;
        }

        & button {
            padding: 1% 3%;
            font-size: 1.3em;
            font-weight: 600;
            border-radius: 10px;
            margin: 1%;
            color: gray;
            cursor: pointer;

            :disabled {
                background-color: black;
                color: white !important;
            }

            :hover {
                color: black;
            }

            @media (max-width: 295px) {
                width: 60%;
                padding: 3%;
            }
        }

        @media (max-width: 360px) {
            font-size: 0.8em;
        }

        @media (max-width: 295px) {
            /* font-size: 1em; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

    }

    & .listContainer {
        text-align: left;
        border-radius: 3px;
        box-shadow: 1px 1px 10px gray;
        margin: 5% 3%;
        padding: 5%;

        & .noData {
            text-align: center;
            font-size: 1.3em;
        }

        @media (max-width: 900px) {
            margin: 1%;
            padding: 2%;
            box-shadow: none;
        }
    }

    & .heading {
        display: grid;
        padding: 1% ;
        grid-template-columns: 17.5% 20% 20% 15% 15% 15.5%;
        align-items: center;
        background-color: white;
        font-weight: bolder;
        position: sticky;
        font-size: 1.1em;
        color: #3a44a1;
        top: 0;
        border-bottom: 3px solid lightgray;

        :hover {
            background-color: white !important;
        }

        @media (max-width: 900px) {
            display: none;
        }
    }

    & .appCard {
        display: grid;
        padding: 1%;
        grid-template-columns: 17.5% 20% 20% 15% 15% 15.5%;
        align-items: center;
        word-wrap: break-word;
        border-bottom: 1px solid lightgray;
        
        & * {
            padding: 1% 3%;

            @media (max-width: 600px) {
                font-size: 1em;
                padding: 1%;
                margin: 1%;
            }
        }

        label {
            color: #263086;
            padding: 0%;
        }

        /* VIEW RESUME BUTTON */
        & .view {
            width: 80%;
            font-weight: 700;
            letter-spacing: 0.1em;
            background-color: #3a44a1;
            color: white;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            padding: 10% 3%;
            cursor: pointer;

            :hover {
                background-color: #263086;
            }

            @media (max-width: 900px) {
                width: 60%;
                padding: 5%;
            }

            @media (max-width: 600px) {
                width: 90%;
                padding: 5%;
            }
        }

        & .statusContainer {
            /* border: 1px solid red; */
            display: flex;
            flex-direction: column;

            * {
                width: 80%;
                letter-spacing: 0.1em;
                margin: 5% 0;
                font-size: 1.2em;
                border-width: 1px;
                border-style: solid;
                outline: none;
                padding: 7%;
                border-radius: 10px;
                font-weight: bolder;
                cursor: pointer;

                @media (max-width: 900px) {
                    font-size: 1em;
                    padding: 5%;
                    width: 40%;
                }

                @media (max-width: 600px) {
                    padding: 3%;
                }
            }

            @media (max-width: 900px) {
                flex-direction: row;
                justify-content: space-between;
            }
            

            & .select {
                border-color: gray;
                background-color: #eeeeee;
                
                :hover {
                    background-color: white;
                }
            }

            & .reject {
                border-color: black;
                color: white;
                background-color: #000000;

                :hover {
                    color: red
                }
            }
        }

        :hover {
            background-color: #f5f5f5;
        }

        @media (max-width: 900px) {
            grid-template-columns: 50% 50%;
            border: none;
            box-shadow: 1px 1px 10px gray;
            border-radius: 10px;
            padding: 5%;
            margin: 5% 0;
        }

        @media (max-width: 600px) {
            grid-template-columns: 100%;
        }
    }
`;

const Applications = () => {

    // DOCUMENT TITLE
    document.title = `Application List`;

    // AUTH STATUS FROM AUTH CONTEXT
    const {auth} = React.useContext(AuthContext);

    // DISPLAY WIDTH
    const [width,setWidth] = React.useState("");

    // JSON APPLICATION LINK
    const applUrl = process.env.REACT_APP_JSON_URL_APPLICATION;

    // DATA FROM JSON
    const [data,setData] = React.useState([]);

    // LIST TYPE (DEFAULT: "pending") 
    // [TYPES: "pending", "selected", "rejected"] 
    const [list,setList] = React.useState("pending");

    // DEPARTMENT SELECTED (DEFAULT: "all")
    const [selectDept,setSelectDept] = React.useState("all");

    // ACTIONS
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState("");

    // FILTER DEPARTMENTS
    const handleChange = (val) => {
        setSelectDept(val.toLowerCase());
    }

    // CHANGING LIST TYPE
    const handleChangeList = (type) => {
        if (type === "pending") {
            setList("pending");
        }
        else if (type === "selected") {
            setList(true);
        }
        else {
            setList(false);
        }

        // SETTING DEPARTMENT TO "all"
        setSelectDept("all");
    }

    // HANDLES APPLICATION SELECTED / REJECTED
    const handleSelect = (ele,bool) => {
        setLoading(true);

        const payload = {
            ...ele,
            selected: bool
        }

        axios.patch(applUrl + ele.id,payload)
            .then (res => {

                // LOADS LIST
                loadList()
            })
            .catch (err => {
                console.log(err.message);
            })
    }

    // LOADS THE LIST FROM JSON SERVER 
    const loadList = () => {
        setLoading(true);
        setError(false);
        setErrorMsg("");

        axios.get(applUrl)
            .then(res => {
                setData(res.data);
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

    // ADMIN NOT LOGGED IN THEN REDIRECT TO LOGIN PAGE 
    if (!auth) {
        return <Redirect to='/login' />
    }

    return (
        <ApplicationsContainer>
            {
                <>  
                    {/* HEADING OF THE PAGE */}
                    <h1>applications</h1>

                    {/* CONTAINER */}
                    <div className="filter">

                        {/* TOTAL APPLICATIONS */}
                        <div className="totalAppl">
                            <h3>total applications: {selectDept === 'all' ? data.filter(ele => ele.selected === list).length : data.filter(ele => ele.dept === selectDept).filter(ele => ele.selected === list).length}</h3>
                        </div>

                        {/* SELECT DEPARTMENT */}
                        <div className="select">
                            <label>by department</label>
                            <br/>
                            <select value={selectDept} onChange={e => handleChange(e.target.value)}>
                                <option>all</option>
                                {
                                    data.length ? data.filter(ele => ele.selected === list).map(ele => <option key={ele.id}>{ele.dept}</option>) : false
                                }
                            </select>
                        </div>
                    </div>

                    {/* SELECT LIST TYPE (PENDING, SELECTED, REJECTED) */}
                    <div className="listsSelect">
                        <label>by status</label>
                        <br/>

                        {/* PENDING LIST BUTTON*/}
                        <button disabled={list === "pending"} onClick={() => handleChangeList("pending")}>pending</button>

                        {/* SELECTED LIST BUTTON */}
                        <button disabled={list === true} onClick={() => handleChangeList("selected")}>selected</button>

                        {/* REJECTED LIST BUTTON */}
                        <button disabled={list === false} onClick={() => handleChangeList("rejected")}>rejected</button>
                    </div>

                    {
                        // LOADING SPINNER
                        loading ? <div className="spinner"><LoadingSpinner/></div> : 

                        // ERROR STATE
                        error ? <div className="errorMsg">ERROR: {errorMsg}</div> :

                        // CONTAINS THE APPLICATION LIST
                        <div className="listContainer">

                            {/* LIST HEADING */}
                            {
                                data.filter(ele => ele.selected === list).length === 0 ? 

                                // NO DATA
                                <div className="noData">
                                    <h2>list contains no {list === "pending" ? "pending" : list ? "selected" : "rejected"} applications !</h2>
                                </div> :

                                // LIST HEADING
                                <div className="heading">
                                    <h2>name</h2>
                                    <h2>mobile number</h2>
                                    <h2>email id</h2>
                                    <h2>role</h2>
                                    <h2>view</h2>
                                    <h2>status</h2>
                                </div>
                            }
                            
                            {/* LIST DATA */}
                            {
                                data.filter(ele => selectDept === "all" ? ele : ele.dept === selectDept).filter(ele => ele.selected === list).map(ele => 

                                    // LIST / CARD ITEM
                                    <div className="appCard" key={ele.id}>
                                        <h3>{width <= 900 ? <label>name: </label> : false} {ele.firstName + " " + ele.lastName}</h3>
                                        <h3>{width <= 900 ? <label>mobile: </label> : false} {ele.mobileNumber}</h3>
                                        <h3>{width <= 900 ? <label>email: </label> : false} {ele.emailAddress}</h3>
                                        <h3>{width <= 900 ? <label>role: </label> : false} {ele.role}</h3>

                                        {/* LINK TO VIEW RESUME IN ANOTHER TAB */}
                                        <Link className="view" target="_blank" to={`/applications/resume/${ele.firstName}/${ele.id}`}>view resume</Link>

                                        {/* STATUS BUTTONS CONTAINER */}
                                        <div className="statusContainer">
                                            {
                                                list === false || list === "pending" ? <button className="select" onClick={() => handleSelect(ele,true)}>select</button> : false
                                            }
                                            {
                                                list === true || list === "pending" ? <button className="reject" onClick={() => handleSelect(ele,false)}>reject</button> : false
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    }
                </>
            }
        </ApplicationsContainer>
    )
}

export default Applications
