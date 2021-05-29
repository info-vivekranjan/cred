import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'; 
import styled from 'styled-components';

const Opportunities = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5em;
    flex-wrap: wrap;
    text-align: center;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    button {
        display: flex;
        align-items: center;
        background-color: black;
        border-radius: 25px;
        color: white;
        cursor: pointer;
        padding: 0.5% 3%;
        font-size: 1em;
        outline: none;


        & .arrow {
            font-size: 2em;
        }
    }

    h1 {
        letter-spacing: 0.1em;
        margin: 5%;
    }

    @media (max-width: 450px) {
        height: 60vh;
        font-size: 6vw;
    }
`;

const Careers = () => {
    return (
        <div>
            <Opportunities>
                <h1>opportunities are infinite.</h1>
                <button>find yours <IoIosArrowForward className="arrow" /></button>
            </Opportunities>
        </div>
    )
}

export default Careers
