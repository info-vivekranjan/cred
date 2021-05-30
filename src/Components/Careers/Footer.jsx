import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    color: gray;
    font-size: 1.1em;
    background-color: #F3F3F3;
    display: flex;
    flex-wrap: wrap;
    padding: 5% 15%;
    font-size: 1.1em;

    @media (max-width: 1100px) {
        padding: 4% 10%;
        flex-direction: column;
    }
`;

const ApplyInfo = styled.div`
    width: 75%;
    
    & div {
        margin: 2% auto;
        line-height: 1.3em;
        word-spacing: 0.1em;
    }

    & .applyHeader {
        color: #343A40;
    }

    @media (max-width: 500px) {
        & div {
            margin: 3% 0;
            text-align: justify-all;
        }
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const DownloadApp = styled.div`
    width: 25%;

    & div {
        line-height: 1.3em;
        word-spacing: 0.1em;
        margin-bottom: 10%;
    }

    & .appIcons > span {
        padding: 0 10% 0 0;
    }

    @media (max-width: 1100px) {
        width: 100%;

        & div {
            margin: 2% 0;
        }
    }
`;


const Footer = () => {
    return (
        <FooterContainer>
            {/* FOOTER LEFT */}
            <ApplyInfo>
                <div className="applyHeader"><b>apply to be a CRED member</b></div>
                <div>
                    CRED is a members-only app that offers you <br/>
                    exclusive rewards for paying your credit card bill.
                </div>
                <div>
                    copyright © 2020 Dreamplug Technologies Pvt Ltd.
                </div>
            </ApplyInfo>

            {/* FOOTER RIGHT */}
            <DownloadApp>
                {/* EMPTY DIV DONT REMOVE */}
                <div></div>
                <div>
                    download the app and
                    apply to be a member
                </div>
                <div className="appIcons">
                    <span>
                        <a href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&pid=Website%20Download%20-%20Android&c=desktop&shortlink=webandroid" target="_blank" rel="noreferrer">
                            <img src="/Careers/Footer/CRED_Footer_Play_Store_icon.png" alt="Play_store_icon" />
                        </a>
                    </span>
                    <span>
                        <a href="https://apps.apple.com/in/app/id1428580080?c=desktop&pid=Website%20Download%20-%20iOS&shortlink=webios" target="_blank" rel="noreferrer">
                            <img src="/Careers/Footer/CRED_Footer_Apple_Store_icon.png" alt="Apple_store_icon" />
                        </a>
                    </span>
                </div>
            </DownloadApp>
        </FooterContainer>
    )
}

export default Footer;