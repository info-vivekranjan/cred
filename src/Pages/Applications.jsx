import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Components/Careers/LoadingSpinner';

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
    }

    & .totalAppl {
        width: 40%;
        font-size: 1.3em;
        text-align: center;
        color: white;
        background-color: #161616;
        border-radius: 10px;
    }

    & .select {
        font-size: 1.3em;
        padding: 1%;

        & * {
            margin: 1%;
            font-size: 1em;
            padding: 2%;
            width: 20vw;
            border-radius: 3px;
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
        }

    }

    & .listContainer {
        text-align: left;
        border-radius: 3px;
        box-shadow: 1px 1px 10px gray;
        margin: 5% 3%;
        padding: 5%;
    }

    & .heading {
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
    }

    & .appCard {
        display: grid;
        padding: 1% ;
        grid-template-columns: 17.5% 20% 20% 15% 15% 15.5%;
        align-items: center;
        word-wrap: break-word;
        border-bottom: 1px solid lightgray;
        
        & * {
            padding: 1% 3%;
        }

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
    }
`;

const Applications = () => {

    // DOCUMENT TITLE
    document.title = `APPLICATION LIST`;

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

    React.useEffect(() => {
        loadList();
        // eslint-disable-next-line
    },[]);

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
                            <select value={selectDept} onChange={e => handleChange(e.target.value)}>
                                <option>all</option>
                                {
                                    data.length ? data.filter(ele => ele.selected === list).map(ele => <option key={ele.id * 2}>{ele.dept}</option>) : false
                                }
                            </select>
                        </div>
                    </div>

                    {/* SELECT LIST TYPE (PENDING, SELECTED, REJECTED) */}
                    <div className="listsSelect">
                        <label>by status</label>
                        <br/>
                        <button disabled={list === "pending"} onClick={() => handleChangeList("pending")}>pending</button>
                        <button disabled={list === true} onClick={() => handleChangeList("selected")}>selected</button>
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
                            <div className="appCard heading">
                                <h2>name</h2>
                                <h2>mobile number</h2>
                                <h2>email id</h2>
                                <h2>role</h2>
                                <h2>view</h2>
                                <h2>status</h2>
                            </div>
                            
                            {/* LIST DATA */}
                            {
                                data.filter(ele => selectDept === "all" ? ele : ele.dept === selectDept).filter(ele => ele.selected === list).map(ele => 
                                    <div className="appCard" key={ele.id}>
                                        <h3>{ele.firstName + " " + ele.lastName}</h3>
                                        <h3>{ele.mobileNumber}</h3>
                                        <h3>{ele.emailAddress}</h3>
                                        <h3>{ele.role}</h3>

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
