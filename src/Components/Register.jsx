import React,{useState, useEffect} from "react";
// import React,{useState} from "react";
import "./css/Register.css";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { AddUser } from "../service/api";

const Register = () => {

    const navigate = useNavigate();

    const[user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        // cpassword:""
    });
    const handleInputs=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
        // console.log(user)
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("https://tourappbackend-6098.onrender.com/register/",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await response.json();
        console.log(data);

        if(data.success === 'OK'){
            localStorage.setItem('token',data.token);
            navigate('/')
        }
      
        
    }
    useEffect(() => {
        if(localStorage.getItem("token")){
          navigate('/')
        }
      }, [])


    return(
        <>
        <div className="registerBG">
        <div className="container reg_container">
            <h1 className="titel">Registration Form</h1>
            <form>
                <div className="main-user-info">
                    <div className="user-input-box">
                        <label>Full Name</label>
                        <input type="text" id="name" name="name"  onChange={handleInputs} placeholder="First name" required></input>
                        <p/>
                    </div>
                    <div className="user-input-box">
                        <label>Email ID</label>
                        <input type="email" id="email" name="email"  onChange={handleInputs} placeholder="Email ID" required></input>
                        <i></i>
                    </div>
                    <div className="user-input-box">
                        <label>Phone Number</label>
                        <input type="text" id="phone" name="phone"  onChange={handleInputs} placeholder="Phone Number" required></input>
                    </div>
                    <div className="user-input-box">
                        <label>Password</label>
                        <input type="password" id="password" name="password"  onChange={handleInputs} placeholder="AaBbCc@123" required></input>
                        <i className="fa-solid fa-eye-slash"></i>
                        <i className="fa-solid fa-eye"></i>
                    </div>
                    {/* <div className="user-input-box">
                        <label>Confirm passowrd</label>
                        <input type="password" id="cpassword" name="cpassword" onChange={handleInputs} placeholder="AaBbCc@123" required></input>
                        <i></i>
                    </div> */}
                </div>
                <div className="form-submit-btn">
                    <Link to='/'><input type="submit" value="Register" onClick={handleSubmit}></input></Link>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}
export default Register;