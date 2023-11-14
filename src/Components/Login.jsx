import React, { useState, useEffect } from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const data = await axios.post('http://localhost:8000/login/', {
        email, password
      })
      console.log("Token",data.data.token)
      await localStorage.setItem('token',data.data.token)
      if(localStorage.getItem('token') != 'undefined'){
        navigate('/')
         }
    }
    catch(err){
      console.log("Error",err)
    }
    
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/')
    }
  }, [])
  return (
    <>
      <div className="login_image">
        <div className="container login_main loginBG">
          <div className="row login_row">
            <div className="col-md-6 login_side-image">
              <img className="login_img" src={logo} alt="Indian Epic"></img>
              <div className="login_text">
                <p>
                  Join us to have a wonderful travel experience
                  <i className="login_i">--Indian Epic</i>
                </p>
              </div>
            </div>
            <div className="col-md-6 login_right">
              <div className="login_input-box">
                <header>Hey there!</header>
                <div className="input-field">
                  <input
                    type="email"
                    className="input login_input"
                    onChange={(e)=> setEmail(e.target.value)}
                    id="email"
                    required
                    autoComplete="off"
                  ></input>
                  <label for="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input login_input"
                    onChange={(e)=> setPassword(e.target.value)}
                    id="password"
                    required
                  ></input>
                  <label for="password">Password</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="check-box"
                    id="checkbox"
                    required
                  ></input>
                  <label for="checkbox"> Remember me?</label>
                </div>
                <p></p>
                <div className="input-field">
                  <input onClick={handleSubmit}
                    type="submit"
                    className="login_submit"
                    value="Sign In"
                  ></input>
                </div>
                <div className="signup">
                  <span className="login_span">
                    Don't have an account yet?{" "}
                    <Link to="/register">
                      <span className="clickhere">Create one</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
