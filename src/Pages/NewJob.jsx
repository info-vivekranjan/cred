import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import axios from 'axios';

const NewJobContainer = styled.div`
    text-align: center;
    font-size: 1.3em;
    box-shadow: 1px 1px 10px gray;
    padding: 0 3% 3%;
    margin: 3% 10%;

    & h2 {
        font-size: 2em;
        padding: 3%;
        margin: 1% -4% 5%;
        color: white;
        background-color: #3a44a1;
        /* border-radius: 3px; */

        @media (max-width: 1000px) {
            margin: 1% -3.7% 5%;
        }

        @media (max-width: 530px) {
            font-size: 1.5em;
        }
        @media (max-width: 330px) {
            font-size: 1.2em;
        }
    }

    & form {
        text-align: left;
        
        & .requiredStar {
            color: red;
        }

        & .container {
            display: grid;
            grid-template-columns: 50% 50%;

            @media (max-width: 800px) {
                grid-template-columns: 100%;
            }
        }

        & .input {
            /* border: 1px solid blue; */
            padding: 2% 0;

            & label {
                color: gray;
            }

            & input {
                border: none;
                padding: 1% 0 !important;
            }

            & input,
              textarea {
                border-radius: 5px;
                outline: none;
                width: 80%;
                padding: 2%;
                margin: 1% 0;
                font-size: 1.5em;
            }

            & select {
                width: 90%;
                padding: 2%;
                margin: 1% 0;
                border-radius: 5px;
                font-size: 1.3em;
            }

            & textarea {
                width: 90%;
                margin: 1% 0;
            }

            & .inputRules {
                font-size: 0.7em;
            }
        }

        & .submitButton {

            & input {
                border-radius: 10px;
                border: none;
                outline: none;
                margin: 2% 0;
                padding: 1% 3%;
                font-size: 1.7em;
                background-color: #3a44a1;
                color: white;
                cursor: pointer;

                :hover {
                    background-color: #1b2585;
                }

                @media (max-width: 700px) {
                    margin-top: 7%;
                    padding: 2% 5%;
                }
            }
        }

        & .submitMsg,
            .successMsg {
            color: green;
            font-weight: bolder;
        } 
        & .errorMsg {
            color: red;
            font-weight: bolder;
        } 
    }

    @media (max-width: 1000px) {
        margin: 2% 5%;
    }

    @media (max-width: 700px) {
        font-size: 1em;
    }
    @media (max-width: 300px) {
        margin: 2% 0;
    }
`;

const NewJob = () => {

    // DOCUMENT TITLE
    document.title = `JOB POST`;

    // INITIAL FORM DATA
    const initForm = {
        id: uuid(),
        name: "",
        place: "",
        selected: true,
        time: "full-time",
        dept: "infrastructure & security",
        work: [],
        expected: []
    }

    // INPUTS GETS STORED INTO THIS
    const [form,setForm] = React.useState(initForm);

    // RESUME UPLOADING ACTIONS
    const [uploading,setUploading] = React.useState(false);
    const [uploadMsg,setUploadMsg] = React.useState("");
    const [uploadErr,setUploadErr] = React.useState(false);

    // DEPARTMENT LIST
    const [deptList,setDeptList] = React.useState([]);


    const handleFormChange = (target) => {
        const {name,value} = target;
        if (name === "work" || name === "expected") {
            const points = value.trim().split("\n");
            return setForm({
                ...form,
                [name]: points
            })
        }
        else {
            return setForm({
                ...form,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setUploading(true);

        axios.post(`https://young-mountain-65223.herokuapp.com/jobList`,form)
            .then(res => {
                console.log(res);
                setUploadMsg("SUCCESSFULLY ADDED");
            })
            .catch(err => {
                console.log(err);
                setUploadErr(true);
                setUploadMsg(`ERROR: ${err.message}`);
            })
            .finally(() => {
                setUploading(false);
            })
    }

    React.useEffect(() => {
        axios.get(`https://young-mountain-65223.herokuapp.com/deptList`)
            .then (res => {
                console.log(res.data)
                setDeptList(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    },[])

    return (
        <NewJobContainer>
            <h2>add new job details</h2>

            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="input">
                        <label>job title<span className="requiredStar">*</span></label>
                        <br/>
                        <input type='text' placeholder='data analysis' value={form.name} name="name" onChange={e => handleFormChange(e.target)} autoComplete="off" required autoFocus /> 
                    </div>
                    <div className="input">
                        <label>place<span className="requiredStar">*</span></label>
                        <br/>
                        <input type='text' placeholder='bangalore' value={form.place} name="place" onChange={e => handleFormChange(e.target)}autoComplete="off" required/> 
                    </div>

                    <div className="input">
                        <label>commitment<span className="requiredStar">*</span></label>
                        <br/>
                        <select value={form.time} name="time"  onChange={e => handleFormChange(e.target)}>
                            <option>full-time</option>
                            <option>consultant</option>
                        </select>
                    </div>

                    <div className="input">
                        <label>department<span className="requiredStar">*</span></label>
                        <br/>
                        <select value={form.dept} name="dept"  onChange={e => handleFormChange(e.target)}>
                            {
                                deptList.length ? deptList.map(ele => ele.name).map(ele => <option key={ele}>{ele}</option>) : false
                            }
                        </select>
                    </div>
                </div>
                <div className="input">
                    <label>work details<span className="requiredStar">*</span></label>
                    <div className="inputRules">(write in points & every point should be in a new line)</div>
                    <textarea rows="7" placeholder=" point 1
                    point 2
                    point 3" name="work" onChange={e => handleFormChange(e.target)}>

                    </textarea>
                </div>
                
                <div className="input">
                    <label>expected skills & experiences<span className="requiredStar">*</span></label>
                    <div className="inputRules">(write in points & every point should be in a new line)</div>
                    <textarea rows="7" placeholder=" point 1
                    point 2
                    point 3" name="expected" onChange={e => handleFormChange(e.target)}>

                    </textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="submitButton">
                    <input type='submit' value='finish' />
                </div>
                
                {
                    uploading ? <div className="submitMsg">SUBMITTING....</div> : setUploadMsg.length ? <div className={uploadErr ? "errorMsg" : "successMsg"}>{uploadMsg}</div> : false
                }
            </form>
        </NewJobContainer>
    )
}

export default NewJob;