import React, {useState, useEffect} from 'react'
import './RegisterForm.css'
import { Link, useParams,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../Service/UserService'
import UserService from '../Service/UserService';


const RegistrationForm = (props) => {
    let history = useHistory();
    let startValue = {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: "",
    }
    const [formValue, setForm] = useState(startValue)
    const onReset = () => {
        setForm({
            ...startValue, id: formValue.id, isUpdate: formValue.isUpdate 
        });
    };

    const login = async (event) => {
        event.preventDefault();
        
        let object = {
            id: formValue.userID,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            address: formValue.address,
            phoneNumber: formValue.phoneNumber,
            email: formValue.email,
            password: formValue.password
        };

        if(formValue.firstName === "" && formValue.lastName === "" && formValue.address === "" && formValue.password === "" && formValue.email === ""){
            alert("Enter input all Fileds")
        }
        else{
            UserService.addUser(object).then((response) => {
                console.log(response);
                alert("Data Added!!",response)
              }) 
        alert("Regisraion Success....")
        history.push("/login");
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
                    {/* <div className="form-head">
                       <h1>User Registration Form</h1> 
                    </div> */}
                    <div className="formhead">
                    User Registration Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">First Name</label>
                        <input type="text" className="input" id="firstName" name="firstName" value={formValue.firstName}
                            placeholder="Your First Name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Last Name</label>
                        <input type="text" className="input" id="lastName" name="lastName" value={formValue.lastName}
                            placeholder="Your Last Name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Address</label>
                        <input type="text" className="input" id="address" name="address" value={formValue.address}
                            placeholder="Address...." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="number"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Phone Number</label>
                        <input type="text" className="input" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber}
                            placeholder="Phone Number.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email-Id</label>
                        <input type="email" className="input" id="email" name="email" value={formValue.email}
                            placeholder="Your email.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="Password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <br></br>
                    <div className="submit-reset">
                    <div className="buttonParent">
                            <button  size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Submit</button>
                            <Link to="/login"> 
                            <button  size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Login</button></Link>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegistrationForm;