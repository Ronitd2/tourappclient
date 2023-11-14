import React from "react";
import Navbar from "./Navbar";
import "./css/flight.css";
export default function Flight(){
    return(
        <>
        <div className="header">
        <Navbar />  
        <div className="booktype">
            <h1 class="bookhead">Flight TICKET BOOKING</h1>
        </div> 
            <div className="container rounded p-3 bookblock">
            <div className="journey-type">
                    <button type="button" className="btn btn-outline-success" id="catagory" >One-way</button>
                    <button type="button" className="btn btn-outline-success" id="catagory">Round-Trip</button>
                    <button type="button" className="btn btn-outline-success" id="catagory">Multi-city</button>
                </div>
            
            <div className="row justify-content-around ticket-block">
                <div className="col-lg-3 ticket-part">
                    <label for="exampleDataList" class="source form-label">From</label>
                    <input class="form-control"  id="exampleDataList" placeholder="Kolkata Airport, India (CCU)"/>
                </div>
                <div className="col-lg-3 ticket-part">
                  <label for="exampleDataList" class="source form-label">To</label>
                  <input class="form-control "  id="exampleDataList" placeholder="Delhi Airport, India (DEL)"/>
                </div>
                <div className="col-lg-3 ticket-part">
                  <label for="exampleDataList" class="source form-label">Travel Date</label>
                  <input  type="date" class="form-control"  id="exampleDataList" placeholder="Type to search..."/>
                </div>
                <div className="col-lg-3 btnsrc">
                    <button type="submit" className=" btn btn-success">search</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}