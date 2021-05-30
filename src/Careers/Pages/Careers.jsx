import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opportunities = styled.div`
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.3em;
    flex-wrap: wrap;
    text-align: center;
    color: #2c2c2c;

    .link {
        text-decoration: none;
        display: flex;
        align-items: center;
        background-color: black;
        border-radius: 25px;
        color: white;
        padding: 1% 5%;

        & .arrow {
            font-size: 2em;
        }
    }

    h1 {
        letter-spacing: 0.1em;
        margin: 5%;
        text-shadow: -1px 0 black, 0 0.5px black, 1px 0 black, 0 -1px black;
    }

    @media (max-width: 450px) {
        height: 60vh;
        font-size: 5vw;
    }
`;

const ImageContainer = styled.div`
    padding: 3%;

    & img {
        border-radius: 50px;
        margin: 1%;
    }

    & div {
        padding: 0 1%;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }

    & div:nth-child(1) {
        & img:nth-child(1) {
            height: 60vh;
            width: 15vw;
        }

        & img:nth-child(2) {
            height: 43vh;
            width: 15vw;
        }

        & img:nth-child(3) {
            height: 50vh;
            width: 40vw;
        }
    }

    & div:nth-child(2) {
        align-items: start;
    }

    /* 70 */
    & div:nth-child(2) {
        & img:nth-child(1) {
            height: 35vh;
            width: 25vw;
        }

        & img:nth-child(2) {
            height: 45vh;
            width: 30vw;
        }

        & img:nth-child(3) {
            height: 27vh;
            width: 15vw;
        }
    }

    @media (max-width: 650px) {
        display: none;
    }

    @media (max-width: 1000px) {
        & img {
            border-radius: 25px;
        }

        & div:nth-child(1) {
            & img:nth-child(1) {
                height: 40vh;
            }

            & img:nth-child(2) {
                height: 30vh;
            }

            & img:nth-child(3) {
                height: 35vh;
            }
        }

        & div:nth-child(2) {
            & img:nth-child(1) {
                height: 27vh;
            }

            & img:nth-child(2) {
                height: 35vh;
            }

            & img:nth-child(3) {
                height: 23vh;
            }
        }
    }
`;

const WhyCred = styled.div`
    background-color: #3a44a1;
    color: white;
    text-shadow: 0px 0 white, 0 0px white, 0px 0 white, 0 -1px white;
    text-align: center;
    font-size: 2em;
    padding: 2%;

    & div {
        padding: 3%;

        & p {
            font-size: 0.9em;
            padding: 0 15%;
            line-height: 1.2em;
            /* border: 1px solid white; */
        }

        & .circleNumber {
            width: 30px;
            padding: 1%;
            margin: auto;
            border: 1px solid #f8f8f8;
            border-radius: 50%;
        }

        & .reasons {
            padding: 0 28%;
        }
    }
`;

const WorkLife = styled.div`
    border: 1px solid red;
    padding: 5%;

    & .what {
        display: grid;
        grid-template-columns: 50% 50%;

        & > p:nth-child(1) {
            /* border: 1px solid red; */
            font-size: 2.3em;
            font-weight: 900;
            text-shadow: -1px 0 #3a44a1, 0 0.5px #3a44a1, 1px 0 #3a44a1, 0 -1px #3a44a1;
            color: #3a44a1;
            letter-spacing: 0.1em;
            padding: 1% 23%;
            line-height: 1.3em;
            margin: 0;
        }

        & > p:nth-child(2) {
            /* border: 1px solid red; */
            line-height: 1.8em;
            padding: 1% 33% 1% 1%;
            font-size: 1.3em;
            margin: 0;
            color: gray;

        }
    }

    & .how {
        padding: 10% 13%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 2%;

        & > div {
            display: grid;
            grid-template-columns: 17% 83%;

            & * {
                margin: 0;
                border: 1px solid red;
            }

            & img {
                width: 100%;
            }

            & > div {
                padding: 0 13%;

                & h4 {
                    padding: 1%;
                    line-height: 1.5em;
                    font-size: 1.1em;
                    letter-spacing: 0.1em;
                }

                & p {
                    padding: 1%;
                }
            }
        }
    }

`;

const Careers = () => {
    const images = [
        {source: "/Careers/LandingPage/Images/landingPage_1.jpg", altText: "landingPage_1"},
        {source: "/Careers/LandingPage/Images/landingPage_2.jpg", altText: "landingPage_2"},
        {source: "/Careers/LandingPage/Images/landingPage_3.jpg", altText: "landingPage_3"},
        {source: "/Careers/LandingPage/Images/landingPage_4.jpg", altText: "landingPage_4"},
        {source: "/Careers/LandingPage/Images/landingPage_5.jpg", altText: "landingPage_5"},
        {source: "/Careers/LandingPage/Images/landingPage_6.jpg", altText: "landingPage_6"},
    ];
    return (
        <div>
            <Opportunities>
                <h1>opportunities are infinite.</h1>
                <Link to="/careers.cred.club/allJob" className="link">find yours <IoIosArrowForward className="arrow" /></Link>
            </Opportunities>

            <ImageContainer>
                <div>
                    {
                        images.slice(0,3).map(({source,altText}) => <img src={source} alt={altText} key={altText}/>)
                    }
                </div>
                <div>
                    {
                        images.slice(3,6).map(({source,altText}) => <img src={source} alt={altText} key={altText}/>)
                    }
                </div>
            </ImageContainer>
            <WhyCred>
                <div>
                    <h3>why CRED?</h3>
                    <p>simply because, CRED is the nucleus of all great minds at work. to elaborate more on the why, here’s a thought experiment for you:</p>
                </div>
                <div>
                    <p className="circleNumber">1</p>
                    <p className="reasons">put a group of incredibly passionate, driven individuals together.</p>
                </div>
                <div>
                    <p className="circleNumber">2</p>
                    <p className="reasons">give them the complete freedom to chase down their goals in a complete uninhibited manner.</p>
                </div>
                <div>
                    <p className="circleNumber">3</p>
                    <p className="reasons">you will have CRED.</p>
                </div>
                <div>
                    <p>the CRED manifesto is crowd sourced from these very people, all rooted in different backgrounds but sharing the same ethos; to continuously push oneself and in the process, the community.</p>
                </div>
            </WhyCred>
            <WorkLife>
                <div className="what">
                    <p>want to know what it's like to work at CRED?</p>
                    <p>hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself.</p>
                </div>
                <div className="how">
                    <div>
                        <img src="/Careers/LandingPage/Icons/knife&fork.png" alt="knife&fork" />
                        <div>
                            <h4>kill deadlines, not your appetite.</h4>
                            <p>a stacked pantry with an all you can eat lunch & dinner.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/Careers/LandingPage/Icons/gift.png" alt="gift" />
                        <div>
                            <h4>we have your back...and your health.</h4>
                            <p>paid sick leaves, because your health comes first.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/Careers/LandingPage/Icons/half-heart.png" alt="half-heart" />
                        <div>
                            <h4>remember, you can’t respawn in real life.</h4>
                            <p>a comprehensive health insurance, so you can focus on the healing instead of never ending hospital bills.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/Careers/LandingPage/Icons/clock.png" alt="clock" />
                        <div>
                            <h4>what einstein said about time.</h4>
                            <p>no work timings. because you can’t time a creative process.</p>
                        </div>
                    </div>
                </div>
            </WorkLife>
        </div>
    )
}

export default Careers;