import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from  "react-router-dom";

function signup() {
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const [Confirmpassword, setConfirmpassword]= useState()
    
    // let cf=document.querySelector('input[name="Confirmpassword"]').value;
          
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();

        if (password == Confirmpassword) {
           
            axios.post('http://127.0.0.1:3501/register ', {name ,email ,password})
            .then (result => {console.log(result)
                navigate('/Login')
            })
            .catch(err => console.log(err))

        }
        else    { 
             
            console.log()  
            alert("Passwords don't match");
            return;
        }



       
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg   vh-100">
            <div className=" p-3 frost rounded w-25">
                <h2 className='login100-form-title ttl'>SignUp </h2>
                <form className=" login100-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <lable className="" htmlFor="name">
                            <strong>Name</strong>
                        </lable>
                        <input
                            type="text"
                            placeholder="Enter name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0 input100"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <lable htmlFor="email">
                            <strong>Email</strong>
                        </lable>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0 input100"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <lable htmlFor="password">
                            <strong>Password</strong>
                        </lable>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0 input100"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <lable htmlFor="Confirmpassword">
                            <strong>Confirm  password</strong>
                        </lable>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            autoComplete="off"
                            name="Confirmpassword"
                            className="form-control rounded-0 input100"
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0 login100-form-bgbtn wrap-login100-form-btn container-login100-form-btn ">
                        Register
                    </button>
                </form>
                <p>Already Have An Account</p>
                <Link to="/login" className="btn btn-success w-100 rounded-0  ">
                    login
                </Link>

            </div>

        </div>
    )
}

export default signup;