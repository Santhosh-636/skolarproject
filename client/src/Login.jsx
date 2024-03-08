import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3501/Login ', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "success") {
          navigate('/Home')
        }
        else{
         
          alert("inalid Id/pass")
          document.querySelector('input[name="email"]').value = "";
          document.querySelector('input[name="password"]').value = "";
         
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg   vh-100">
      <div className=" p-3 frost rounded w-25">
        <h2 className='login100-form-title ttl'>Login</h2>
        <form onSubmit={handleSubmit}>
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
            <div className='idv'></div>
          <button type="submit" className="btn btn-success w-100 rounded-0 login100-form-bgbtn wrap-login100-form-btn container-login100-form-btn ">
            Login
          </button>
        </form>
        <p>Don't Have An Account</p>
        <Link to="/register" className="btn btn-success w-100 rounded-0  ">
          register
        </Link>

      </div>

    </div>
  )

}

export default Login;