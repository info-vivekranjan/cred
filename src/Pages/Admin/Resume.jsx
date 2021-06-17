import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from '../../Components/Careers/LoadingSpinner';

const DocumentContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    background-color: gray;

    & div {
        margin: 1%;
    }

    & img {
        width: 100%;
    }

    & .loading,
      .errorMsg {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        margin: 10% 0;

        & > * {
            color: white;
        }
    }

    & .errorMsg {
        color: red;
    }
`;

const Resume = () => {

    // ID & NAME FROM URL
    const {id,name} = useParams();

    // RESUME LINK
    const applUrl = process.env.REACT_APP_JSON_URL_APPLICATION;

    // DOCUMENT TITLE
    document.title = `${name}'s resume`;

    // RESUME IMAGE / IMAGES ARRAY
    const [imageArray,setImageArray] = React.useState([]);

    // ACTIONS
    const [loading,setLoading] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState("");

    // CHECKS IF RESUME LINK IS VALID
    const checkLink = (link) => {

        axios.get(link)
            .then (res => {
                console.log(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
            })
    }

    React.useEffect(() => {

        // INIT STATE
        setLoading(true);
        setErrorMsg("");

        // FETCHES RESUME LINK FROM SERVER
        axios.get(applUrl + id)
            .then(res => {
                setImageArray(res.data.resume);

                // CHECKS IF RESUME LINK IS VALID
                checkLink(res.data.resume[0]);
            })
            .catch(err => {
                console.log(err.message);
            })
        // eslint-disable-next-line
    },[]);

    return (
        <DocumentContainer>
            {
                // LOADING STATE
                loading ? <div className="loading"><LoadingSpinner/ ></div> :

                // ERROR STATE
                errorMsg.length ? <div className="errorMsg">ERROR: {errorMsg}</div> :

                // SHOWS RESUME 
                imageArray.length ? imageArray.map(ele => <div key={ele}><img src={`${ele}`} alt={`${name} + resume`} /></div>) : false
            }
        </DocumentContainer>
    )
}

export default Resume
