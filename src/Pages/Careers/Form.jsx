import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const FormContainer = styled.div`
    font-size: 1.2em;
    margin: 2% 10%;
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: 1px 1px 10px 10px #e9e9e9;

    * {
        /* border: 1px dashed red; */
    }

    & .jobDetails {
        background-color: #3a44a1;
        color: white;
        font-size: 1.2em;

        & .stickyTitle {
            padding: 7% 15%;
            position: sticky;
            top: 0;
        }

        & p {
            color: #dadada;
            font-size: 0.9em;
        }

        * {
            margin: 3% 0;
        }
    }

    & .form {
        padding: 1% 7%;
        background-color: #f8f8f8;

        & p {
            color: #868686;
            font-size: 0.9em;
        }

        & form {
            & input {
                margin-top: 1%;
                font-size: 2em;
                border: none;
                outline: none;
                background: transparent;
                margin-bottom: 5%;
                width: 80%;
            }

            /* INPUT NUMBER TYPE ARROW HIDE */
            /* chrome */
            & input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            /* Firefox */
            & input[type=number] {
                -moz-appearance: textfield;
            }

            & input[type=submit] {
                width: 30%;
                margin: 10% 0 0 0;
                padding: 3%;
                font-size: 1.2em;
                border-radius: 10px;
                background-color: #3a44a1;
                color: white;
                cursor: pointer;

                :hover {
                    background-color: #101a77;
                }
            }

            & input[type=file] {
                font-size: 1em;
                margin: 1% 0;
                border: 1px solid red;;
            }

            & .fileInput {
                /* display: block !important; */
            }

            & .nameContainer {
                display: grid;
                grid-template-columns: 50% 50%;
            }

            & .requiredStar {
                color: red;
            }

            & label {
                color: #868686;
                font-size: 0.8em;
            }
        }
    }
`;

const Form = () => {

    const {jobId,jobName,jobDepartment} = useParams();

    const history = useHistory();

    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState(false);

    const initForm = {
        id: uuid(),
        firstName: "",
        lastName: "",
        emailAddress: "",
        mobileNumber: "",
        resume: {}
    }

    const [form,setForm] = React.useState(initForm);

    const handleFormChange = (target) => {
        const {name,value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    // const getData = () => {
    //     setLoading(true);
    //     setError(false);
    //     setErrorMsg("");

    //     axios.get(`https://young-mountain-65223.herokuapp.com/jobList/${jobId}`)
    //         .then (res => {
    //             // console.log(res.data);
    //             setData(res.data);
    //         })
    //         .catch(err => {
    //             setError(true);
    //             setErrorMsg(err.message);
    //             console.log(err.message);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })
    // }

    return (
        <FormContainer>
            <div className="jobDetails">
                <div className="stickyTitle">
                    <p>you are applying for</p>
                    <h3>{jobName}</h3>
                    <p>in</p>
                    <h4>{jobDepartment}</h4>
                </div>
            </div>
            <div className="form">
                <h2>just one last thing</h2>
                <p>
                    we require your basic details to proceed with the application. this information helps us evaluate your application.
                </p>
                <hr/>
                <h2>personal details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="nameContainer">
                        <div>
                            <label>first name<span className="requiredStar">*</span></label>
                            <br/>
                            <input type='text' placeholder='christopher' value={form.firstName} name="firstName" onChange={e => handleFormChange(e.target)} autoFocus autoComplete="off" required/> 
                        </div>
                        <div>
                            <label>last name<span className="requiredStar">*</span></label>
                            <br/>
                            <input type='text' placeholder='hitchens' value={form.lastName} name="lastName" onChange={e => handleFormChange(e.target)} autoComplete="off" required/> 
                        </div>
                    </div>
                    <div>
                        <label>email<span className="requiredStar">*</span></label>
                        <br/>
                        <input type='email' placeholder='abc@example.com' value={form.emailAddress} name="emailAddress" onChange={e => handleFormChange(e.target)} autoComplete="off" required/> 
                    </div>
                    <div>
                        <label>mobile number<span className="requiredStar">*</span></label>
                        <br/>
                        <input type='number' placeholder='9876543210' value={form.mobileNumber} name="mobileNumber" onChange={e => handleFormChange(e.target)} autoComplete="off" required/> 
                    </div>
                    <div>
                        <label>your resume<span className="requiredStar">*</span></label>
                        <br/>
                        <input className="fileInput" type='file' accept=".pdf" name="resume" onChange={e => handleFormChange(e.target)} required/>
                        <br />
                        <label>(file size should not be more than 5MB)</label>
                    </div>
                    <div>
                        <input type='submit' value='finish' />
                    </div>
                </form>
                <p>
                    we take privacy very seriously at CRED, and the information that you have shared with us will only be used to process your application and further possible candidature.
                </p>
            </div>
        </FormContainer>
    )
}

export default Form;
