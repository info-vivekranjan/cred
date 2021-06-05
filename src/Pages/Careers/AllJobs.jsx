import React from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Thumbnail = styled.div`
    text-align: center;
    /* border: 1px solid blue; */
    margin-bottom: -5em;

    & img {
        width: 100%;
        height: 65vh;
        filter: brightness(40%);
    }

    & h1 {
        position: relative;
        bottom: 5em;
        color: white;
        font-size: 3.5em;
        line-height: 1.3em;
        width: 50%;
        margin: auto;

        @media (max-width: 831px) {
            font-size: 3em;
            width: 70%;
            bottom: 6em
        }
    }
    @media (max-width: 520px) {
        display: none;
    }
`;

const JobsContainer = styled.div`

    .searchBar {
        text-align: center;
        margin: 3% auto;
        margin-left: 7em;

        & input {
            background-color: #ebebeb;
            border-radius: 30px;
            font-size: 1.7em;
            padding: 2.5% 3%;
            font-weight: bolder;
            width: 50%;
            outline: 0;
            border: 5px solid white;

            :focus {
                border-color: #6fc4e6;
            }

            @media (max-width: 1000px) {
                font-size: 1.5em;
                padding: 3% 7%;
            }

            @media (max-width: 500px) {
                font-size: 1.3em;
                padding: 5% 7%;
            }

        }

        & button {
            position: relative;
            right: 15%;
            background-color: #3a44a1;
            color: white;
            cursor: pointer;
            padding: 1% 2%;
            border: none;
            outline: none;
            border-radius: 15px;
            font-size: 1.5em;

            @media (max-width: 1050px) {
                background-color: transparent;
                color: gray;
                right: 10%;
            }
            @media (max-width: 820px) {
                right: 13%;
            }
            @media (max-width: 440px) {
                right: 15%;
            }
            @media (max-width: 330px) {
                display: none;
            }
        }
        @media (max-width: 820px) {
            margin: 3% auto;
        }
        @media (max-width: 500px) {
            width: 110%;
            /* display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column; */
        }
    }

    .filter {
        margin: 1% 13%;

        @media (max-width: 1095px) {
            margin: 1% 5%;
        }

        @media (max-width: 800px) {
            margin: 1%;
        }

        @media (max-width: 750px) {
            margin: 1% 3%;
        }

        /* * {
            border: 1px solid blue;
        } */

        & > div:nth-child(1) {
            border-bottom: 1px solid lightgray;
        }
        
        & > div {
            display: grid;
            grid-template-columns: 30% 70%;
            
            & > div {
                padding: 1% 3%;
            }

            @media (max-width: 750px) {
                grid-template-columns: 100%;
            }
        }

        & .jobCount {
            margin-left: 10%;
            font-weight: 900;
            color: #414141;
            font-size: 1.3em;

            @media (max-width: 750px) {
                margin: 0;
                text-align: center;
            }
        }

        & .filterReset {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            & p:nth-child(1) {
                color: #5e5e5e;
                font-size: 1.2em;

                @media (max-width:750px) {
                    color: gray;
                    cursor: pointer;

                    :hover {
                        color: black;
                    }
                }
            }

            & p:nth-child(2) {
                font-size: 1em;
                color: #010181;
                cursor: pointer;

                :hover {
                    text-decoration: underline;
                }
            }
        }

        & .selectedFilter {
            display: flex;
            flex-wrap: wrap;

            & p {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                border-radius: 30px;
                border: 1px solid gray;
                color: gray;
                cursor: pointer;
                padding: 1% 3%;
                margin: 1% 1%;

                & .filterClose {
                    padding-left: 5%;
                }

                :hover {
                    color: black
                }
            }

            & .emptyBlock {
                visibility: hidden;
                
                @media (max-width: 750px) {
                    padding: 2% 0;
                }
            }
        }

        & .hideFilter {
            display: none;
        }

        & .selectOptions {
            border-right: 1px solid lightgray;

            
            & > div {
                position: sticky;
                top: 1.5em;
            }

            & > div > h3 {
                font-size: 1.7em;
                color:#505050;
            }

            & .department, .time {
                padding-bottom: 3%;
                letter-spacing: 0.1em;
                
                & > div {
                    display: grid;
                    grid-template-columns: 10% 90%;
                    margin: 7% 0;

                    @media (max-width: 750px) {
                        margin: 3% 0;
                        grid-template-columns: 5% 95%;
                    }

                    @media (max-width: 420px) {
                        margin: 3% 0;
                        grid-template-columns: 10% 90%;
                    }

                    @media (max-width: 250px) {
                        margin: 3% 0;
                        grid-template-columns: 13% 87%;
                    }
                }

                & .checkbox {
                    width: 15px;
                    height: 15px;
                    border-radius: 3px;
                }

                & .unchecked {
                    border: 2px solid gray;
                }

                & .uncheckedText {
                    font-weight: 500;
                    color: gray;
                    letter-spacing: 0.1em;
                    cursor: default;
                }

                & .checked {
                    border: 2px solid #010181;
                    background-color: #010181;
                    color: white;
                }

                & .checkedText {
                    font-weight: 600;
                    color: #010181;
                    letter-spacing: 0.1em;
                    cursor: default;
                }

            }

            @media (max-width: 750px) {
                border: none;
                border-bottom: 1px solid lightgray;
            }
        }

        & .jobList {
            
            & .jobCard {
                box-shadow: 1px 1px 10px #eeeeee;
                border-radius: 20px;
                display: grid;
                grid-template-columns: 95% 5%;
                padding: 3% 7%;
                margin: 3%;
                cursor: pointer;

                & div:nth-child(1) {
                    
                    & h3 {
                        font-weight: 900;
                        font-size: 1.3em;
                        letter-spacing: 0.1em;
                        text-shadow: 1px 1px 1px 1px;
                    }

                    @media (max-width: 350px) {
                        font-size: 0.9em;
                    }
                }

                /* arrow container */
                & div:nth-child(2) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                & .jobArrow {
                    font-size: 2em;
                    color: gray;
                }
            }

            & .noResults {
                margin-top: 10%;
                color: gray;
                letter-spacing: 0.1em;
                text-align: center;

                & > h1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 600px) {
                    line-height: 2em;
                }

                @media (max-width: 420px) {
                    font-size: 0.9em;
                }
            }

            & .noResultsLink {
                color: gray;
                text-decoration: underline;
                cursor: pointer;
                font-size: 1.1em;
                color: #5a5a5a;

                :hover {
                    color: black;
                }
            }
        }
    }
`;

const AllJobs = () => {

    const departmentList = [
        {name: "infrastructure & security", filter: false, id: "164aaae0-8060-4797-b671-7aead2d44c9a"},
        {name: "engineering", filter: false, id: "9fa64e73-33d2-433a-9c5c-6ea416f0f4a0"},
        {name: "ea", filter: false, id: "76180dfe-b998-443b-90e3-3778d9fdf801"},
        {name: "business", filter: false, id: "d41afa03-af29-40fd-ae27-1773d7ad61b0"},
        {name: "risk analytics", filter: false, id: "3866232d-3c16-4015-af98-794c45beb5dd"},
        {name: "product", filter: false, id: "b8c42dcc-f0ab-47fa-980e-b10a1b687301"},
        {name: "talent & culture", filter: false, id: "b5b70bd7-b6db-466b-81ee-e81012b6ab9b"},
        {name: "analytics", filter: false, id: "f20d8781-bbd3-4071-9519-511b4bd60f02"},
        {name: "marketing", filter: false, id: "4951a753-4a2d-47f8-9b73-85f133284897"},
        {name: "operations", filter: false, id: "ccdd4a15-6f08-46f3-b3b5-896c2b2d25b4"}
    ];

    const jobList = [

        // infrastructure & security
        {name: "application security engineer", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "e7b7fd7b-3432-48e4-9ab5-351192038920"},
        {name: "data engineer", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "ad0eec0b-4902-4102-a4c8-1a41f1ededce"},
        {name: "database administrator", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "762c6c62-1107-48d8-8bd5-4ac8dc96249c"},
        {name: "infrastructure security engineer", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "c1541fda-1c21-4e76-aba3-f5ee70b2525a"},
        {name: "principal site reliability engineer", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "84b159aa-fb66-46a2-868e-5064d5b3194f"},
        {name: "security compliance", place: "bengaluru", selected: true, time: "full-time", dept: "infrastructure & security", id: "5d8b5cc8-b06f-4a27-a299-cd1fe7ca9b17"},

        // engineering
        {name: "backend developer", place: "bengaluru", selected: true, time: "full-time", dept: "engineering", id: "6e452949-4440-49fe-a6fc-603b10db2f1e"},
        {name: "engineering manager", place: "bengaluru", selected: true, time: "full-time", dept: "engineering", id: "4099243d-c4f2-4ae0-aaeb-934c4e4f7202"},
        {name: "ios developer", place: "bengaluru", selected: true, time: "full-time", dept: "engineering", id: "cfbef182-9bcd-49da-9433-65a06b346b6f"},
        {name: "SDET backend", place: "bengaluru", selected: true, time: "full-time", dept: "engineering", id: "c71bad0f-2668-4471-83c3-fa6cf8e959e4"},
        {name: "technical program manager (TPM)", place: "bengaluru", selected: true, time: "full-time", dept: "engineering", id: "332c9dac-216b-4adf-8869-640c246e3c8e "},

        // ea
        {name: "executive assistant", place: "bengaluru", selected: true, time: "consultant", dept: "ea", id: "a441476e-16e1-48b3-bf66-73de8dee3ad0"},

        // business
        {name: "key accounts - CRED Pay", place: "bengaluru", selected: true, time: "full-time", dept: "business", id: "a75dcaef-4a21-438b-bd2c-a6c8bd9896fc"},
        {name: "regional manager - field collection", place: "bengaluru", selected: true, time: "full-time", dept: "business", id: "85db5ab0-62a1-49cf-94ad-c9c5516ac3fb"},
        {name: "sales operations associate", place: "bengaluru", selected: true, time: "consultant", dept: "business", id: "ac2023e8-31bf-44f1-8838-84807fc5b9dc"},
        {name: "soft collections associate", place: "bengaluru", selected: true, time: "consultant", dept: "business", id: "67288058-f4bb-42de-a65d-d8d9239db599"},
        {name: "soft collections lead", place: "bengaluru", selected: true, time: "full-time", dept: "business", id: "9735f265-9ea9-4c52-b8d3-036a9d7aad80"},
        {name: "territorial lead - field collections", place: "bengaluru", selected: true, time: "full-time", dept: "business", id: "f740df86-b117-467e-b615-82591b426327"},

        // risk analytics
        {name: "lending analytics", place: "bengaluru", selected: true, time: "full-time", dept: "risk analytics", id: "81cd5d5f-2407-4371-a905-d4fa60cac4fa"},

        // product
        {name: "payment product operations", place: "bengaluru", selected: true, time: "full-time", dept: "product", id: "9ddb62f1-f55c-458c-a49c-db8b518250e7"},
        {name: "payment manager - commerce", place: "bengaluru", selected: true, time: "full-time", dept: "product", id: "fff2af20-356d-445a-8d6c-e4a5633593ac"},

        // talent & culture
        {name: "people business partner", place: "bengaluru", selected: true, time: "full-time", dept: "talent & culture", id: "bdec84f6-bc0e-42c3-a66a-55a39355cd89"},
        {name: "principal recruiter", place: "bengaluru", selected: true, time: "full-time", dept: "talent & culture", id: "0b64ba72-3ba3-43e1-8d2f-2c40f8509312"},

        // analytics
        {name: "product analysis", place: "bengaluru", selected: true, time: "full-time", dept: "analytics", id: "c485a1e4-2981-4077-bf77-36643cb1bc86"},

        // marketing
        {name: "product marketing", place: "bengaluru", selected: true, time: "full-time", dept: "marketing", id: "2ccb03d0-03e7-48ce-9b8d-71a3cc9f66d4"},

        // operations
        {name: "quality lead - customer success", place: "bengaluru", selected: true, time: "full-time", dept: "operations", id: "277fcbed-f4e1-40ca-9fb3-f5ad6ba51a7d"},
    ];

    const timeList = [
        {name: "full-time", filter: false, id: "7ba44cac-21f1-44d9-93fe-e04806d1657e"},
        {name: "consultant", filter: false, id: "8711dd1d-2a2a-4eb0-aad2-d2cb8539656d"}
    ];

    const [time,setTime] = React.useState(timeList);

    const [job,setJob] = React.useState(jobList);

    const [department,setDepartment] = React.useState(departmentList);

    const [jobCount,setJobCount] = React.useState(job.length);

    const [query,setQuery] = React.useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        let tempJobs = [];

        if (!query.trim().length) {
            return setJob(jobList);
        }

        for (let i in jobList) {
            const {name} = jobList[i];

            const result = name.includes(query);

            if (result) {
                tempJobs.push(jobList[i]);
            }
        }
        setJob(tempJobs);
    }

    const toggleDeptFilter = (filterId,dept) => {
        setDepartment(department.map(ele => ele.id === filterId ? {...ele, filter: !ele.filter} : ele));
        if (jobCount === jobList.length) {
            setJob(job.map(ele => ele.dept === dept ? ele : {...ele, selected: !ele.selected}));
        }
        else {
            setJob(job.map(ele => ele.dept === dept ? ele : {...ele, selected: !ele.selected}), ...job);
        }
    }

    const toggleTimeFilter = (filterId,name) => {
        setTime(time.map(ele => ele.id === filterId ? {...ele, filter: !ele.filter} : ele));
        setJob(job.map(ele => ele.time === name ? ele : {...ele, selected: !ele.selected}));
    }

    const removeAllFilters = () => {
        setDepartment(departmentList);
        setTime(timeList);
        setJob(jobList);
        setQuery("");
    }

    // ONCLICK ON A JOB CARD
    const handleClick = (job) => {
        console.log(job + " card clicked !");
        if (true) {
            return <Link to={`/careers/allJob/${job.toLowerCase()}`} />
        }
    }

    const [showFilter,setShowFilter] = React.useState(true); 

    const [width,setWidth] = React.useState(window.innerWidth);


    const checkDimensions = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        setJobCount(job.filter(ele => ele.selected === true).length);
        // eslint-disable-next-line
    },[handleSearch,toggleDeptFilter,toggleTimeFilter,removeAllFilters]);

    window.addEventListener('resize',checkDimensions);

    return (
        <div>
            {/* THUMBNAIL IMAGE */}
            <Thumbnail>
                <img src="/Careers/AllJobs/allJob_thumbnail.jpg" alt="thumbnail" />
                <h1>have more impact than you ever imagined.</h1>
            </Thumbnail>

            {/* CONTAINER */}
            <JobsContainer>
                {/* SEARCH BAR FOR SEARCHING JOBS */}
                <form className="searchBar">
                    <input id="query" type="text" name="searchQuery" value={query} onChange={e => setQuery(e.target.value)} placeholder="search for jobs" ></input>
                    <button onClick={handleSearch}>{width >= 1050 ? "search" : <FaSearch/> }</button>
                </form>

                {/* FILTER CONTAINER */}
                <div className="filter">
                    <div>
                        {/* FILTER RESET LINK */}
                        <div className="filterReset">
                            {
                                width <= 750 ? <p onClick={() => setShowFilter(!showFilter)}>{showFilter ? "SHOW FILTER" : "HIDE FILTER"}</p> : <p>filter</p>
                            }
                            <p onClick={removeAllFilters}>reset all</p>
                        </div>

                        {/* SHOWS TOTAL NUMBER OF JOBS AVAILABLE */}
                        <div>
                            <p className="jobCount">viewing {jobCount} jobs related to</p>
                            <div className="selectedFilter">

                                {/* SELECTED DEPARTMENT FILTERS (DEFAULT: EMPTY) */}
                                {
                                    department.filter(ele => ele.filter === true).map(ele => <p key={ele.id} onClick={() => toggleDeptFilter(ele.id,ele.name)}>{ele.name} <IoMdClose className="filterClose"/> </p>)
                                }

                                {/* SELECTED TIME / DURATION FILTERS (DEFAULT: EMPTY) */}
                                {
                                    time.filter(ele => ele.filter === true).map(ele => <p key={ele.id} onClick={() => toggleTimeFilter(ele.id,ele.name)}>{ele.name} <IoMdClose className="filterClose"/> </p>)
                                }

                                {/* EMPTY BLOCK SPACE (USED WHEN FILTERS ARE EMPTY) */}
                                {
                                    !time.filter(ele => ele.filter === true).length && !department.filter(ele => ele.filter === true).length && <p className="emptyBlock">Lorem </p>
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div>

                        {/* FILTERS CHECKBOXES CONTAINER */}
                        <div className={width >= 750 ? "selectOptions" : showFilter ? "hideFilter" : "selectOptions"}>

                            <div>

                                {/* FILTER HEADER */}
                                <h3>by department</h3>
                                <div className="department">

                                    {/* DEPARTMENT FILTERS LIST */}
                                    {
                                        department.map((ele) => 

                                                <div key={ele.id}>
                                                    <div className={ele.filter ? "checked checkbox" : "unchecked checkbox"} onClick={() => toggleDeptFilter(ele.id,ele.name)}>
                                                        {
                                                            ele.filter ? <GoCheck /> : false
                                                        }
                                                    </div>
                                                    <div className={ele.filter ? "checkedText" : "uncheckedText"} onClick={() => toggleDeptFilter(ele.id,ele.name)}>
                                                        {ele.name}
                                                    </div>
                                                </div>
                                            
                                        )
                                    }
                                </div>
                                {/* FILTER HEADER */}
                                <h3>by type</h3>

                                {/* TIME FILTERS LIST */}
                                <div className="time">
                                    {
                                        time.map((ele) => {
                                            return (
                                                <div key={ele.id}>
                                                    <div className={ele.filter ? "checked checkbox" : "unchecked checkbox" } onClick={() => toggleTimeFilter(ele.id,ele.name)}>
                                                        {
                                                            ele.filter ? <GoCheck /> : false
                                                        }
                                                    </div>
                                                    <div className={ele.filter ? "checkedText" : "uncheckedText"} onClick={() => toggleTimeFilter(ele.id,ele.name)}>
                                                        {ele.name}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {/* JOB LIST CONTAINER */}
                        <div className="jobList">
                            {
                                // JOB LIST
                                job.length ? job.filter(ele => ele.selected === true).map(ele => 
                                    <div key={ele.id} className="jobCard" onClick={() => handleClick(ele.name)}>
                                        <div>
                                            <h3>{ele.name}</h3>
                                            <p>{ele.place}</p>
                                            <p>{ele.time}</p>
                                            <p>{ele.dept}</p>
                                        </div>
                                        <div>
                                            <RiArrowRightSLine className="jobArrow" />
                                        </div>
                                    </div>
                                ) :

                                // NO JOBS (JOB COUNT === 0)
                                <div className='noResults'>
                                    <h1><BsFillExclamationCircleFill/> NO RESULTS FOUND</h1>
                                    <br/>
                                    <h2>TRY <span className='noResultsLink' onClick={removeAllFilters}>RESETTING</span> THE FILTERS</h2>
                                    <h2>OR</h2>
                                    <h2>TRY <a href="#query"><span className='noResultsLink'>SEARCHING</span></a> WITH A DIFFERENT QUERY</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </JobsContainer>
        </div>
    )
}

export default AllJobs;