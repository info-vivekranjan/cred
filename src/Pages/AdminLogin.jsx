import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from '../Components/Careers/LoadingSpinner';

const FormContainer = styled.div`
    font-size: 1.2em;
    margin: 3% 10%;
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: 1px 1px 10px 10px #e9e9e9;

    & > div {
        background-color: #3a44a1;
        padding: 15%;

        & h2 {
            font-size: 2em;
            letter-spacing: 0.1em;
            color: white;
            margin: 0;

            @media (max-width: 750px) {
                font-size: 1.7em;
            }
        }

        & p {
            margin: 0;
            padding: 3% 0;
            color: #cacaca;
        }

        @media (max-width: 750px) {
            padding: 3% 5%;
        }
    }

    & form {
        padding: 5%;

        & label {
            color: gray;
        }

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

        & input[type=submit] {
            width: 30%;
            margin: 10% 0 0 0;
            padding: 3%;
            font-weight: bolder;
            letter-spacing: 0.1em;
            font-size: 1.4em;
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

            @media (max-width: 340px) {
                font-size: 1.1em;
            }
        }

        & .loading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.2em;
            width: 40%;
            color: gray;
        }

        & .successMsg {
            padding: 1% 0;
            font-size: 1.2em;
            color: green;
            font-weight: bold;
        }

        & .errorMsg {
            padding: 1% 0;
            font-size: 1.2em;
            color: red;
            font-weight: bold;
        }
    }

    @media (max-width: 750px) {
        grid-template-columns: 100%;
    }

    @media (max-width: 400px) {
        margin: 3%;
    }
`;

const AdminLogin = () => {

    const loginUrl = process.env.REACT_APP_ADMIN_LOGIN;

    const [auth,setAuth] = React.useState(false);

    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [message,setMessage] = React.useState("");

    const initForm = {
        email: "",
        password: ""
    }

    const [form,setForm] = React.useState(initForm);

    const handleChange = (target) => {
        const {name,value} = target;
        setForm({
            ...form,
            [name]: value.trim()
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError(false);
        setMessage("");

        axios.get(loginUrl)
            .then(res => {

                if (form.email === res.data[0].email && form.password === res.data[0].password) {
                    setMessage("login successful");
                    setAuth(true);
                }

                else {
                    setError(true);

                    if (form.email === res.data[0].email) {
                        setMessage("password entered is incorrect!");
                    }
                    else if (form.password === res.data[0].password) {
                        setMessage("email entered is incorrect!");
                    }
                    else {
                        setMessage("invalid credentials");
                    }
                }
            })
            .catch(err => {
                setError(true);
                setMessage(`ERROR: ${err.message}`);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    if (auth) {
        return <Redirect to='/dashboard' />
    }

    return (
        <FormContainer>

            {/* FORM HEADING */}
            <div>
                <h2>login</h2>
                <p>with your credentials</p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email id</label>
                    <br/>
                    <input disabled={loading} type='text' name="email" placeholder="abc@example.com" value={form.email} onChange={e => handleChange(e.target)} autoComplete="off" autoFocus required />
                </div>
                <div>
                    <label>password</label>
                    <br/>
                    <input disabled={loading} type='password' name="password" placeholder="secret password" value={form.password} onChange={e => handleChange(e.target)} required />
                </div>

                {
                    loading ? <div className="loading"><LoadingSpinner /> checking credentials</div> : error ? <div className="errorMsg">{message}</div> : false
                }

                {
                    !error && message.length ? <div className="successMsg">{message}</div> : false
                }

                <input disabled={loading} type="submit" value="login" />
            </form>
        </FormContainer>
    )
}

export default AdminLogin;