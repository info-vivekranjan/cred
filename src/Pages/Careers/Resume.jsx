import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Resume = () => {
    const {id,name} = useParams();

    // DOCUMENT TITLE
    document.title = `${name}'s resume`;

    const [imageArray,setImageArray] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://young-mountain-65223.herokuapp.com/applications/${id}`)
            .then(res => {
                console.log(res.data.resume);
                setImageArray(res.data.resume);
            })
            .catch(err => {
                console.log(err.message);
            })
    // eslint-disable-next-line
    },[])

    return (
        <DocumentContainer>
            {
                imageArray.length ? imageArray.map(ele => <div key={ele}><img src={`${ele}`} alt={`${name} + resume`} /></div>) : false
            }
        </DocumentContainer>
    )
}

export default Resume
