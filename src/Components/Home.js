import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/Navbar.css";
import "./css/Home.css";
import Footer from "./Footer";
import  logo2 from "./images/search.png";
import Place from "./Place";
import State from "./State";
import Season from "./Season";
import Events from "./Events";
// import MultiCarousel from "./MultiCarousel";
// import TrainContext from '../Context/Traincontext'
// import { useContext } from 'react';
export default function Home(){
    const navigate = useNavigate()

    useEffect(() => {
     if(!localStorage.getItem('token')){
        navigate('/login')
     }
    }, [])
     return(
        <>
            <div className="header1">
                <Navbar/>
               
                <div className="search-bar ">
                        <h1 className="text-light uni-padding">Explore The Inner Beauty Of India</h1>
                        <h5 className="text-light uni-padding">
                            Explore your India like your home land and find its beauty
                        </h5>
                        <form className="uni-padding">
                            <input  className="search_input" type="text" placeholder="Where you want to go?"/>
                            <input className="search_button" type="submit" value="Search"/>
                        </form>
                </div>
            </div>
            
            <Place/>
            
            {/* <div className="place"> */}
            <State/>
            {/* </div> */}
            <Season/>
            <Events/>
                {/* <div className="place">
                <MultiCarousel/>
                </div> */}
                <Footer/>
        </>
    )
}


        
          {/* </div> */}