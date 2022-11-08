import React, { useState, useEffect } from 'react'
import './Login2.css'
import { Link, useParams, useHistory } from 'react-router-dom';
import SnackMessages from './Message'
import { withRouter } from 'react-router';
import UserService from '../Service/UserService';

const Login = (props) => {
    let history = useHistory();
    let startValue = {
        email: "",
        password: "",
        error: "",
    }

    const [formValue, setForm] = useState(startValue)

    const login = (event) => {
        event.preventDefault();
        let object = {
            password: formValue.password,
            email: formValue.email
        };
        console.log(object)
        window.localStorage.clear();
        if (formValue.userName === "" && formValue.password === "" && formValue.email === "") {
            alert("Enter input all Fileds")
        }
        else {
            UserService.userLogin(object).then((response) => {
                console.log(response);
                let severity = response.data.message === "LOGIN SUCCESSFUL" ? "success" : "error";
                console.log(severity);
                severity === "success" ? localStorage.setItem('Authorization', response.data.data.userID) : localStorage.setItem('Authorization', "null")
                severity === "success" ? localStorage.setItem('Token', response.data.data.token) : localStorage.setItem('Token', "null")
                severity === "success" ? localStorage.setItem('Name', response.data.data.firstName) : localStorage.setItem('Name', "null")
                console.log(severity);
                console.log(response.data.data.userID)
                console.log(response.data.data.token)
                console.log(response.data.data.firstName)
                console.log(response.headers)
                history.push("/home");
            })
        }
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="formhead">
                        User Login Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email Id</label>
                        <input type="text" className="input" id="email" name="email" value={formValue.email}
                            placeholder="userName.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="submit-reset">
                        <div className="buttonParent">
                            <Link to="/register" underline="none"> 
                            <button  size="large" className="resetButton button cancleButton">Sign Up</button></Link>
                            <button  size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Login</button>
                        </div>
                    </div>

                </form>

            </div>
            {formValue.snackFlag &&
                <SnackMessages message={this.state.snackMessage} severity={this.state.severity} />
            }

        </div>
    )
}

export default withRouter(Login);