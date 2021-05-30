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
        padding: 2%;
    }
`;

const Careers = () => {
    const images = [
        {source: "/Careers/Images/landingPage_1.jpg", altText: "landingPage_1"},
        {source: "/Careers/Images/landingPage_2.jpg", altText: "landingPage_2"},
        {source: "/Careers/Images/landingPage_3.jpg", altText: "landingPage_3"},
        {source: "/Careers/Images/landingPage_4.jpg", altText: "landingPage_4"},
        {source: "/Careers/Images/landingPage_5.jpg", altText: "landingPage_5"},
        {source: "/Careers/Images/landingPage_6.jpg", altText: "landingPage_6"},
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
                        images.slice(0,3).map(({source,altText}) => <img src={source} alt={altText} />)
                    }
                </div>
                <div>
                    {
                        images.slice(3,6).map(({source,altText}) => <img src={source} alt={altText} />)
                    }
                </div>
            </ImageContainer>
            <WhyCred>
                <div>
                    <h3>why CRED?</h3>
                    <p>simply because, CRED is the nucleus of all great minds at work. to <br/> elaborate more on the why, here’s a thought experiment for you:</p>
                </div>
            </WhyCred>
        </div>
    )
}

export default Careers
