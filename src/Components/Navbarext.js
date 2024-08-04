import  logo from "./images/logo3.png";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import  down from "./images/down.png";
import React from 'react';
import "./css/Navbar.css";
// import Login from "./Login";
import { useContext } from 'react';
import Destcontext from "../Context/Destcontext";
import { Link } from "react-router-dom";
export default function Navbarext()
{
  const navigate = useNavigate()

  async function logOut(e){
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login');
  } 
  let context = useContext(Destcontext);
      //const statename= context.stateName;
       function destpage(state){
        context.fetchdest(state);
      }
    return(
        <>
        <div className="w-[100%] p-7 flex justify-center items-center">
          <nav className="flex justify-between mb-5 w-[90%]">
              <div className="">
                  <a href="/" >
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                  </a>
              </div>
              
              <div className="w-[50%]">
                    <div className="flex gap-8">
                        <li className="list-none text-white font-bold text-lg  "><a className="hover:no-underline hover:text-green-800" href="/">Home</a></li>
                        <li className="list-none text-white font-bold text-lg "><a className="hover:no-underline hover:text-green-800" href="/">Destination</a>
                        
                        <div className="hidden">
                              <div class="flex flex-wrap gap-10">
                                
                                  <div class="col-md-4">
                                    
                                    <ul class="nav flex-column">
                                    <li class="text-uppercase text-state ">East India</li>
                                    <Link  to="/destination" onClick={()=>(destpage("West Bengal"))}><li className="hhh">West bengal</li></Link>
                                    <Link><li className="hhh">Assam</li></Link>
                                    <Link><li className="hhh">Patna</li></Link>
                                    <Link><li className="hhh">Meghalaya</li></Link>
                                  </ul>
                                  </div>
                                  
                                  <div class="col-md-4">
                                  
                                    <ul class="nav flex-column">
                                    <li class="text-uppercase  text-state">North India</li>
                                    <Link><li className="hhh">Jammu & Kashmir</li></Link>
                                    <Link><li className="hhh">Himachal Pradesh</li></Link>
                                    <Link><li className="hhh">Punjab</li></Link>
                                    <Link><li className="hhh">Uttarakhand</li></Link>
                                  </ul>
                                  </div>
                                  
                                  <div class="col-md-4">
                                  
                                    <ul class="nav flex-column">
                                    <li class="text-uppercase text-state">West India</li>
                                    <Link><li className="hhh">Rajasthan</li></Link>
                                    <Link><li className="hhh">Gujarat</li></Link>
                                    <Link><li className="hhh">Goa</li></Link>
                                    
                                  </ul>
                                  </div>

                                  <div class="col-md-4">
                                  
                                    <ul class="nav flex-column">
                                    <li class="text-uppercase text-state">South India</li>
                                    <Link><li className="hhh">Karnataka</li></Link>
                                    <Link><li className="hhh">Telangana</li></Link>
                                    <Link><li className="hhh">Tamilnadu</li></Link>
                                    <Link><li className="hhh">Kerala</li></Link>
                                  </ul>
                                  </div>

                                  <div class="col-md-4">
                                  
                                    <ul class="nav flex-column">
                                    <li class="text-uppercase text-state">Middle India</li>
                                    <Link><li className="hhh">Madhya Pradesh</li></Link>
                                    <Link><li className="hhh">Maharashtra</li></Link>
                                    <Link><li className="hhh">Chhattishgarh</li></Link>
                                    <Link><li className="hhh">Odisha</li></Link>
                                  </ul>
                                  </div>
                                  
                                </div>
                              </div>
                              
                        </li>
                        
                        <li className="list-none text-white font-bold text-lg hover:text-green-800 "><NavLink className="hover:no-underline" to="/train">Train</NavLink></li>      
                        <li className="list-none text-white font-bold text-lg hover:text-green-800 "><NavLink className="hover:no-underline" to="/booking">Booking</NavLink></li> 
                        {!localStorage.getItem('token') && (<li className="dropdown list-none">
                         <a className="nav-NavLink dropdown-toggle" data-bs-toggle="dropdown" href="/"> Login<span class="caret"></span></a>
                            <ul className="dropdown-menu">
                              <li className="nav-item list-none">
                                <NavLink className="nav-NavLink text-dark" to="/login">
                                  Login
                                </NavLink>
                              </li>
                              <li className="nav-item list-none">
                                <NavLink className="nav-NavLink text-dark" to="/register">
                                  Sign up
                                </NavLink>
                              </li>
                            </ul>
                          </li>)}
                          {
                            localStorage.getItem('token') && 
                            <div className="flex gap-8">
                            <li className="list-none text-white font-bold text-lg hover:text-green-800 "><NavLink className="hover:no-underline" to="/dashboard" onClick={context.getbooking}>Account</NavLink></li>
                            <li className="list-none"><button onClick={logOut} type="button" class="btn btn-light btnlog">Logout</button></li>
                            </div>
                          } 
                        
                      
                    </div>
                  </div>
                
              
      </nav>
      </div>

              {/* <nav className="navsec navbar navbar-expand-sm">
                <div className="container">
                  <a href="/" >
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                  </a>
                  <div className="list">
                    <div className="collapse navbar-collapse" id="navbar">
                      <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link " href="/">Home</a></li>
                        <li className="nav-item"><NavLink className="nav-link " to="about">About</NavLink></li>
                        <li className="nav-item"><a className="nav-link " href="/">Destination</a></li>
                        <li className="dropdown"><a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/">Tickets<span class="caret"></span></a>
                			      <ul className="dropdown-menu">
                              <li className="nav-item"><NavLink className="nav-link text-dark" to="/train">Train</NavLink></li>
                              <li className="nav-item"><a class="nav-link text-dark" href="/">Flight</a></li>
                			      </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link " href="/">Booking</a></li>
                        <li className="nav-item"><NavLink className="nav-link " to="/login">Login</NavLink></li>   
                      </ul>
                    </div>
                  </div>
                </div>
              </nav> */}
                
          
        </>
    );
}


