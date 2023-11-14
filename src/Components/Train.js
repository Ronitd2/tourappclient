import React from "react";
import Navbar from "./Navbar";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
import "./css/Train.css";

import { Outlet, Link } from "react-router-dom";
export default function Train(){
    let context = useContext(TrainContext)
    let train = context.traindet;
    console.log(train);
    
    const Search=async()=>{
        let sname=document.getElementById('sname').value;
        let dname=document.getElementById('dname').value;
        let date=document.getElementById('date').value;
         
       const data={
            source:sname,
            dest:dname,
        }
        console.log(data);
      
      context.fetchtrain(data);
        
    }
    
    return(
        
        <>
        
        
        <div className="header">
        <Navbar/>  
        <div className="booktype">
            <h1 className="bookhead">TRAIN TICKET BOOKING</h1>
        </div> 
            <div className="container rounded p-3 bookblock">
            <div className="journey-type">
               <input type="radio"></input><label className="radio1">Check PNR status</label>
               <input className="radio2" type="radio"></input><label className="radio1"> Check  train </label>  
            </div>
            
            <div className="row justify-content-around ticket-block">
                <div className="col-lg-3 ticket-part">
                    <label  className="source form-label">From</label>
                    
                    <select class="form-control" id="sname" placeholder="New Delhi">
                            <option>New Delhi</option>
                            <option>Howrah</option>
                            <option>Mumbai </option>
                            <option>Shimla</option>
                            <option>Bangalore</option>
                    </select>
                </div>
                <div className="col-lg-3 ticket-part">
                  <label  className="source form-label">To</label>
                  <select class="form-control" id="dname" placeholder="New Delhi">
                            <option>New Delhi</option>
                            <option>Howrah</option>
                            <option>Mumbai </option>
                            <option>Shimla</option>
                            <option>Bangalore</option>
                    </select>
                </div>
                <div className="col-lg-3 ticket-part">
                  <label  className="source form-label">Travel Date</label>
                  <input  type="date" className="form-control" onChange={(e)=>(context.changedate(e.target.value))} id="date" placeholder="Type to search..."/>
                </div>
                <div className="col-lg-3  btnsrc">
                    <button type="submit"  id="search" onClick={Search} className=" btn btn-primary searchbutton justify-content-center"><Link to="/train/trainticket" className="srch">Search</Link></button>
                        {/* <Link to="/trainticket">search</Link> */}
                        
                </div>
            </div>
            </div>
        </div>
        {/* {train &&
        <p>{train[0].train_name}</p>
        } */}
        </>
        
    )
    
}
{/* <Link to="/trainticket">search</Link> */}