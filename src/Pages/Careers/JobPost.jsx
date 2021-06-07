import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../../Components/Careers/LoadingSpinner';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const JobDetails = styled.div`

    & .errorMessage {
        text-align: center;
        font-size: 1.5em;
        color: #f03232 !important;
        font-weight: bolder;
    }

    & .buttonContainer {
        text-align: center;

        & .applyButton1 {
            color: #3a44a1;
            background-color: white;

            :hover {
                background-color: #dadada;
            }

            @media (max-width: 470px) {
                margin: 3% 0;
                font-size: 1.5em;
            }
        }

        & .applyButton2 {
            background-color: #3a44a1;
            color: white;

            :hover {
                background-color: #5e6ad4;
            }

            @media (max-width: 360px) {
                margin: 5% 3% 10%;
                font-size: 1.2em;
            }
        }

        & button {
            font-size: 1.3em;
            padding: 1% 3%;
            border-radius: 10px;
            border: none;
            outline: none;
            font-weight: bolder;
            cursor: pointer;
        }
    }


    & .applyContainer {
        background-color: #3a44a1;
        color: white;
        text-align: center;
        padding: 10% 0;

        * {
            margin: 1%;
        }

        & div:nth-child(1) {
            font-size: 3em;
            font-weight: bolder;
        }
        & div:nth-child(2) {
            font-size: 1.5em;
            color: #c2c2c2;
            font-weight: bolder;
        }
        & .spinner {
            display: flex;
            justify-content: center;

            * {
                color: white;
            }
        }

        @media (max-width: 700px) {
            font-size: 0.8em;
        }
        @media (max-width: 470px) {
            font-size: 0.6em;
        }
    }
    & .details {
        padding: 5% 20%;
        font-size: 1.2em;

        /* BACK TO ALL JOBS LINK */
        & .link {
            display: flex;
            text-decoration: none;
            font-weight: bolder;
            margin: 5% 0;

            & span {

                :hover {
                    text-decoration: underline;
                }
            }
        }

        & .credIntro, 
          .work,
          .expected,
          .lifeInCred {

            & div {
                line-height: 1.7em;
                padding: 2% 0;
                word-wrap: break-word;
            }

            & .bold {
                font-weight: bolder;
                letter-spacing: 0.1em;
            }

            & .listContainer {
                padding-left: 2.5%;

                & > li {
                    margin: 2% 0;
                }

                & .spinner {
                    display: flex;
                    justify-content: center;

                    * {
                        color: #3a44a1;
                    }
                }
            }
        }

        @media (max-width: 1050px) {
            padding: 5% 10%;
            font-size: 1.1em;
        }
    }

    & .shareContainer {
        box-shadow: 1px 1px 10px #e7e7e7;
        padding: 3%;
        text-align: center;
        width: 60%;
        margin: 5% auto;

        & p {
            color: gray;
        }

        & .shareIcons {
            display: flex;
            justify-content: center;
            align-items: center;

            & > div {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5em;
                width: 25px;
                height: 25px;
                margin: 1%;
                padding: 1%;
                border-radius: 50%;
                color: #ffffff;

                :hover {
                    cursor: pointer;
                    filter: brightness(150%);
                }

                @media (max-width: 720px) {
                    font-size: 1em;
                    width: 20px;
                    height: 20px;
                }
            }

            & > div:nth-child(1) {
                background-color: darkblue;
            }
            & > div:nth-child(2) {
                background-color: #00d9ff;
            }
            & > div:nth-child(3) {
                background-color: #2344b3;
            }
            & > div:nth-child(4) {
                background-color: #1060f5;
            }
        }
        @media (max-width: 650px) {
            width: 80%;
        }
        @media (max-width: 360px) {
            display: none;
        }
    }

`;

const JobPost = () => {
    // ID OF THE JOB
    const {jobId} = useParams();

    const history = useHistory();

    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState(false);

    const [data,setData] = React.useState([]);

    const handleApply = () => {
        history.push(`/careers/form/${jobId}`);
    }

    const getData = () => {
        setLoading(true);
        setError(false);
        setErrorMsg("");

        axios.get(`https://young-mountain-65223.herokuapp.com/jobList/${jobId}`)
            .then (res => {
                // console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                setError(true);
                setErrorMsg(err.message);
                console.log(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    
    React.useEffect(() => {
        getData();
        // eslint-disable-next-line
    },[]);
    
    return  (
        <JobDetails>
            <div className='applyContainer'>
                {
                    loading || error ? <div className="spinner"><LoadingSpinner/></div> :
                    <>  
                        <div>{data.name}</div>
                        <div>for {data.place}</div>
                        <div className="buttonContainer">
                            <button className="applyButton1" onClick={handleApply}>apply for this job</button>
                        </div>
                    </>
                }
                {
                    error ? <div className="errorMessage">ERROR: {errorMsg}</div> : false
                }
            </div>
            <div className="details">
                <div>
                    <Link to='/careers/allJob' className="link"><AiOutlineArrowLeft/> <span>back to jobs</span></Link>
                </div>
                <div className='credIntro'>
                    <div className='bold'>what is cred?</div>
                    {
                        error ? <div>ERROR LOADING CONTENT</div> :
                        <>
                            <div>
                                CRED is an exclusive community for India’s most trustworthy and creditworthy individuals, where the members are rewarded for good financial behaviour. CRED was born out of a need to bring back the focus on a long lost virtue, one of trust, the idea is to create a community centered around this virtue. a community that constantly strives to become more virtuous in this regard till they finally scale their behaviour to create a utopia where being trustworthy is the norm and not the exception. to build a community like this requires a community of its own; a community special in its own way, working towards making this vision come true. 
                            </div>
                            <div>
                                here’s a thought experiment: what do you get when you put a group of incredibly passionate and driven people and entrust them with the complete freedom to chase down their goals in a completely uninhibited manner? answer: you get something close to what we have at CRED; CRED just has it better. 
                            </div>
                            <div>
                                here’s what will be in store for you at CRED once you join as a security engineer.
                            </div>
                        </>
                    }
                </div>
                <div className="work">
                    <div className='bold'>what you will do:</div>
                    <ul className="listContainer">
                        {
                            loading || !data.name ? <div className="spinner"><LoadingSpinner/></div> : data.work.map((ele,index) => <li key={index}>{ele}</li>)
                        }
                        {
                            error ? <div className="errorMessage">ERROR: {errorMsg}</div> : false
                        }
                    </ul>
                </div>
                <div className="expected">
                    <div className='bold'>you should apply if:</div>
                    <ul className="listContainer">
                        {
                            loading || !data.name ? <div className="spinner"><LoadingSpinner/></div> : data.expected.map((ele,index) => <li key={index * 2}>{ele}</li>)
                        }
                        {
                            error ? <div className="errorMessage">ERROR: {errorMsg}</div> : false
                        }
                    </ul>
                </div>
                <div className="lifeInCred">
                    <div className='bold'>how is life at CRED?</div>
                    {
                        error ? <div>ERROR LOADING CONTENT</div> :
                        <>
                            <div>
                                working at CRED would instantly make you realize one thing: you are working with the best talent around you. not just in the role you occupy, but everywhere you go. talk to someone around you; most likely you will be talking to a singer, standup comic, artist, writer, athlete, maybe a magician. at CRED people always have talent up their sleeves. with the right company, even conversations can be rejuvenating. at CRED, we guarantee a good company.
                            </div>
                            <div>
                                hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, with lunch and dinner provided for all the team members, paid sick leaves and comprehensive health insurance. 
                            </div>
                            <div>
                                to make things smoother and to make sure you spend time and energy only on the most important things,  CRED strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity, your work should speak for you. there are no job designations because you will be expected to hold down roles that cannot be described in one word. since trust is a major virtue in the community we have built, we make it a point to highlight it in the community behind CRED: all our employees get their salaries before their joining date. a show of trust that speaks volumes because of the skin in the game. 
                            </div>
                            <div>
                                there are many more such eccentricities that make CRED what it is but that’s for one to discover. if you feel at home reading this, get in touch.
                            </div>
                        </>
                    }
                </div>
            </div>
            {
                error ? false : 
                <div className="buttonContainer">
                    <button className="applyButton2" onClick={handleApply}>apply for this job</button>
                </div>
            }
            {
                error ? false :
                <div className="shareContainer">
                    <h2>have a friend who would love this?</h2>
                    <p>share this with your network</p>
                    <div className="shareIcons">
                        <div><FaFacebookF/></div>
                        <div><FaTwitter/></div>
                        <div><FaLinkedinIn/></div>
                        <div><FiMail/></div>
                    </div>
                </div>
            }
        </JobDetails>
    )
}

export default JobPost;