import React from 'react';
import styled from 'styled-components';
import { VscLoading } from 'react-icons/vsc';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Spinner = styled.div`
    font-size: 2em;
    color: #010181;
    display: flex;
    animation: spin infinite 3s linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingSpinner = () => {
    return (
        <Spinner>
            {/* <AiOutlineLoading3Quarters /> */}
            <VscLoading/>
        </Spinner>
    )
}

export default LoadingSpinner