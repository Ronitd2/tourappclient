import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/State.css";
import img1 from "./images/State/Wetbengal.png";
import img2 from "./images/State/rajasthan.png";
import img3 from "./images/State/Himachal.png";
import img4 from "./images/State/punjab.png";
import img5 from "./images/State/Mumbai.png";
import { useContext } from 'react';
import Destcontext from "../Context/Destcontext";
function State(){
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      let context = useContext(Destcontext);
      const statename= context.stateName;
       function destpage(state){
        context.fetchdest(state);
      }
      console.log(statename);
      return(
        <>
        <div className="state_bg container-fluid">
            <div className='container'>
                <h1 className="state_heading">Destinations</h1>
                <Carousel  autoPlay={true} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}> 
                <div className='item'onClick={()=>(destpage("West Bengal"))}>
                    <Link to="/destination"><button className="state_button">
                        <div className="card border-0" style={{width: '16rem'}}>
                            <img className="card-img" style={{height: '25rem',width:'15.5rem', borderRadius: "10px"}} src={img1} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>West Bengal</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item' onClick={()=>(destpage("Rajasthan"))}>
                    <Link Link to="/destination"><button className="state_button">
                        <div className="card border-0" style={{width: '16rem'}}>
                            <img className="card-img" style={{height: '25rem',width:'15.5rem', borderRadius: "10px"}} src={img2} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>Rajasthan</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item' onClick={()=>(destpage("Himachal Pradesh"))}>
                    <Link to="/destination"><button className="state_button">
                        <div className="card border-0" style={{width: '16rem'}}>
                            <img className="card-img" style={{height: '25rem',width:'15.5rem', borderRadius: "10px"}} src={img3} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>Himachal Pradesh</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item' onClick={()=>(destpage("Punjab"))}>
                    <Link Link to="/destination"><button className="state_button">
                        <div className="card border-0" style={{width: '16rem'}}>
                            <img className="card-img" style={{height: '25rem',width:'15.5rem', borderRadius: "10px"}} src={img4} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>Punjab</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item' onClick={()=>(destpage("Mumbai"))}>
                    <Link Link to="/destination"><button className="state_button">
                        <div className="card border-0" style={{width: '16rem'}}>
                            <img className="card-img" style={{height: '25rem',width:'15.5rem', borderRadius: "10px"}} src={img5} alt="Card image cap"/>
                            <div className="card-body state_title">
                                <h5>Mumbai</h5>
                                <p>GRAB YOUR TICKETS</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                </Carousel>
            </div>
        </div>
        </>
      );
}

export default State;
// onClick={()=>(context.sendDestination("West Bengal"))}