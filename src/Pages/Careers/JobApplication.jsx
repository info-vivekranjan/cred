import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import LoadingSpinner from '../../Components/Careers/LoadingSpinner';

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
            margin: 4% 0;
        }

        @media (max-width: 750px) {
            & .stickyTitle {
                padding: 3% 7%;
            }

            * {
                margin: 2% 0;
            }
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

                @media (max-width: 560px) {
                    font-size: 1.5em;
                }
            }

            /* INPUT NUMBER TYPE ARROW HIDE */
            /* chrome */
            /* & input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            /* Firefox */
            /* & input[type=number] {
                -moz-appearance: textfield; */
            /* } */ 

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

                :disabled {
                    background-color: #4d4d4d;
                    cursor: not-allowed;
                    color: white;
                }
            }

            & input[type=file] {
                font-size: 1em;
                margin: 1% 0;
                /* border: 1px solid red; */

            }

            & .fileInput {
                /* display: none; */
            }

            & .nameContainer {
                display: grid;
                grid-template-columns: 50% 50%;

                @media (max-width: 560px) {
                    grid-template-columns: 100%;
                }
            }

            & .requiredStar {
                color: red;
            }

            & label {
                color: #868686;
                font-size: 0.8em;
            }

            & .errorMsg {
                margin: 3% auto;
                color: red;
            }

            & .uploading {
                margin: 3% auto;
                display: flex;
                align-items: center;
            }

            & .successMsg {
                margin: 3% auto;
                color: green;
                font-weight: 900;
                
            }
        }
    }

    @media (max-width: 1000px) {
        margin: 5%;
        font-size: 1em;
    }
    @media (max-width: 750px) {
        margin: 10%;
        grid-template-columns: 100%;
        font-size: 1em;
    }
    @media (max-width: 380px) {
        margin: 2% 0;
    }
`;

const JobApplication = () => {
    // GETTING JOB NAME & DEPARTMENT FROM PARAMS
    const {jobName,jobDepartment} = useParams();

    // RESUME STORE URL
    const pdfUrl = process.env.REACT_APP_PDF_URL;

    // JSON URL
    const url = process.env.REACT_APP_JSON_URL_APPLICATION;

    // FORM SUBMIT ACTIONS
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState(false);

    // INITIAL FORM DATA
    const initForm = {
        id: uuid(),
        dept: jobDepartment,
        role: jobName,
        firstName: "",
        lastName: "",
        emailAddress: "",
        mobileNumber: "",
        resume: null,
        selected: "pending"
    }

    // INPUTS GETS STORED INTO THIS
    const [form,setForm] = React.useState(initForm);

    // RESUME UPLOADING ACTIONS
    const [uploading,setUploading] = React.useState(false);
    const [uploadMsg,setUploadMsg] = React.useState("");
    const [uploadErr,setUploadErr] = React.useState(false);

    // STATE OF FORM SUBMISSION
    const [success,setSuccess] = React.useState(false);

    // FORMDATA TO TAKE INPUT FILE (RESUME)
    const data = new FormData();

    // CHECKS INPUT ELEMENT TYPE AND RETURNS TRUE IF NUMBER, FALSE FOR OTHERS
    const checkType = (typedInput) => {
        if (typedInput >= 0 || typedInput <= 9) {
            return true;
        }
        return false
    }

    // HANDLES CHANGE IN INPUTS
    const handleFormChange = (target) => {

        // DESTRUCTURING NAME, VALUE, TYPE FROM e.target
        const {name,value,type} = target;

        // IF INPUT TYPE IS FILE
        if (type === "file" && target.files.length) {

            // FILE SIZE CHECK (LIMIT: 5MB)
            if (target.files[0].size > 5242880) {
                return [setUploadMsg("FILE SIZE IS GREATER THAN EXPECTED"),setUploadErr(true)];
            }

            // INITIAL UPLOAD ACTIONS
            setUploading(true);
            setUploadErr(false);
            setUploadMsg("");

            // APPENDING INPUT FILE(RESUME) INTO FORMDATA WITH KEY "File"
            data.append("File",(target.files[0]));

            // CONVERTING & SAVING RESUME
            // axios.post(`https://v2.convertapi.com/convert/pdf/to/png?Secret=0IJLNekHfQeGE1Ps`,data)
            axios.post(pdfUrl,data)

                .then(res => {

                    // LINK OF THE STORED RESUME
                    const link = res.data.Files.map(ele => ele.Url);
                    // const img = res.data.Files[0].FileData;
                    // data.append("img",img);

                    // console.log(img);

                    // ADDING THE LINK TO FORM WITH NAME "resume"
                    // RETURNS FROM THE FUNCTION
                    return setForm({
                        ...form,
                        [name]: link
                        // [name]: data.get("img")
                    })
                })
                // HANDLES ERRORS
                .catch(err => {
                    console.log(err);
                    setUploadMsg(err.message + " ( TRY UPLOADING AGAIN )");
                    setUploadErr(true);
                })
                // SETS UPLAODING STATE TO FALSE
                .finally(() => {
                    setUploading(false);
                })
        }

        // ALL OTHER INPUT TYPES ARE ADDED TO FORM
        setForm({
            ...form,
            [name]: value.trim()
        });
    }

    // SUBMITS FORM TO SERVER
    const postData = () => {

        // INITIAL ACTION STATE
        setLoading(true);
        setError(false);
        setErrorMsg("");

        // POSTS DATA TO SERVER
        axios.post(url,form)
            .then (res => {

                // SETS SUCCESS ACTION TO TRUE
                setSuccess(true);
            })
            // HANDLES ERROR
            .catch(err => {
                setError(true);
                setErrorMsg(err.message);
                console.log(err.message);
            })
            .finally(() => {
                // SETS LOADING STATE TO FALSE
                setLoading(false);
            })
    }

    // TRIGGERED WHEN SUBMIT BUTTON IS CLICKED
    const handleSubmit = (e) => {

        // PREVENTS DEFAULT ACTION OF RELOADING THE PAGE
        e.preventDefault();

        // POSTS THE DATA TO SERVER
        postData();
    }

    return (
        <FormContainer>

            {/* JOB NAME & DEPARTMENT */}
            <div className="jobDetails">
                <div className="stickyTitle">
                    <p>you are applying for</p>
                    <h3>{jobName}</h3>
                    <p>in</p>
                    <h4>{jobDepartment}</h4>
                </div>
            </div>

            {/* FORM */}
            <div className="form">

                {/* FORM DESCRIPTION */}
                <h2>just one last thing</h2>
                <p>
                    we require your basic details to proceed with the application. this information helps us evaluate your application.
                </p>
                <hr/>
                <h2>personal details</h2>

                {/* ACTUAL FORM */}
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
                        <input type='text' placeholder='9876543210' value={form.mobileNumber} minLength="10" maxLength="10" name="mobileNumber" onChange={e => checkType(e.target.value) ? handleFormChange(e.target) : false} autoComplete="off" required/> 
                    </div>

                    {/* RESUME FILE */}
                    <div>
                        <label>your resume (pdf)<span className="requiredStar">*</span></label>
                        <br/>
                        <input className="fileInput" type='file' name="resume" accept="application/pdf" onChange={e => handleFormChange(e.target)} required/>

                        {/* UPLOADING THE FILE */}
                        {
                            uploading ? <div className="uploading"><LoadingSpinner/> Uploading resume...</div> : false
                        }

                        {/* ERROR IN UPLOADING FILE */}
                        {
                            uploadErr ? <div className="errorMsg">ERROR: {uploadMsg}</div> : false
                        }
                        <br/>
                        <label>(file size should not be more than 5MB)</label>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div>
                        <input disabled={uploading || uploadErr} type='submit' value='finish' />
                    </div>

                    {/* UPLOADING FORM */}
                    {
                        loading ? <div className="uploading"><LoadingSpinner/> SENDING APPLICATION....</div> : error ? <div className="errorMsg">ERROR: {errorMsg}</div> : false
                    }

                    {/* SUCCESS MESSAGE WHEN FORM IS SUCCESSFULLY SENT */}
                    {
                        success ? <div className="successMsg">APPLICATION SUCEESFULLY SENT</div> : false
                    }
                </form>

                
                {/* FORM PRIVACY */}
                <p>
                    we take piracy very seriously at CRED, and the information that you have shared with us will only be used to process your application and further possible candidature.
                </p>
            </div>
        </FormContainer>
    )
}

export default JobApplication;
