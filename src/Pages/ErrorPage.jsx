import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    width: 40%;
    margin: 7% auto;
    /* box-shadow: 0px 0px 1px 1px #d4d4d4; */
    font-size: 1em;
    padding: 2%;
    font-weight: 400;
    box-shadow: 1px 1px 10px 10px #e9e9e9;
    line-height: 1.3em;


    & h3:nth-child(2) {
        color: gray;
        font-weight: 400;
    }

    & h3:nth-child(4) {
        color: #b8b8b8;
        font-weight: 400;
    }

    & .errorCode {
        color: #ffa600;
    }

    @media (max-width: 900px) {
        width: 50%;
        padding: 5%;
    }

    @media (max-width: 550px) {
        width: 70%;
    }
    @media (max-width: 350px) {
        width: 85%;
    }
`;

const ErrorPage = () => {
    return (
        <ErrorMessage>
            <h3 className="errorCode">404</h3>
            <h3>Page Not Found</h3>
            <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
            <h3>Why am I seeing this?</h3>
            <p>This page is generated because the server cannot find the specified file or is temporarily unavailable or has been removed, please check the URL and try again.</p>
        </ErrorMessage>
    )
}

export default ErrorPage