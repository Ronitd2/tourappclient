import React from "react";
import Navbar from "./Navbar";
import "./css/Trainticket.css";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
import Element from './element';
import { Link } from "react-router-dom";
export default function Trainticket(){
    let context = useContext(TrainContext)
    let trainlist = context.traindet;
    console.log(trainlist);
    let len=trainlist.length;
    console.log(len);
    function pchange(){
    let psno=document.getElementById("psno").value;
    console.log(psno);
    context.sendpassenger(psno);
    }
    return(
        <>
        <div className="head">
        <Navbar/>
        </div>
        <div className="main">
        
        <div className="top-div">
            {trainlist &&
            <div className="travel-info">
                <h1>{trainlist[0].from_station_name}</h1>
                <p>&#8594;</p>
                <h1>{trainlist[0].to_station_name}</h1>
            </div>}

            <div className="select-date">
                <input  type="date" className="form-control"  id="exampleDataList" placeholder="Type to search..."/>
              </div>
        </div>

        <div className="booking">
            <div className="left">
                <div className="filter">
                    <p>Filters</p>
                    <p className="reset-all">Reset All</p>
                </div>

                <hr/>

                <div className="quota">
                    <p>Quota</p>
                    <div className="quota-btn">
                      <div className="form-check">
                        <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="General" id="qoutagen"/>
                        <label className="form-check-label" >
                          General
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"  value="Ladies" id="qoutaled"/>
                        <label className="form-check-label" >
                          Ladies
                        </label>
                      </div>

                    </div>
                </div>

                <hr/>
                <div>
                    <label className="psno" >passenger No</label>
                    <input className="psnosrc" id="psno" onChange={pchange} type="number"></input>
                </div>
                <hr/>
                <div className="origin-station">
                    <p>Origin Station</p>
                    <div className="origin-checkbox">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                              NZM
                            </label>
                          </div>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                              NDLS
                            </label>
                          </div>
                    </div>
                </div>

                <hr/>

                <div className="destination-station">
                    <p>Destination Station</p>
                    <div className="destination-station-con">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                                MMCT
                            </label>
                          </div>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                              PNVL
                            </label>
                          </div>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                              CSMT
                            </label>
                          </div>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" >
                              BDTS
                            </label>
                          </div>
                    </div>
                </div>

                <hr/>


            </div>
            <div id="rightside" className="right">
            {trainlist ? trainlist.map((element)=>{
              return <Element train={element}  key={element._id} />
              }):<div></div>}
              {trainlist && <button type="submit"  id="next" className=" btn btn-primary"><Link to="/train/trainticket/trainbooking"><span className="trainbutt">Save & Next</span></Link></button>}
                {/* <div className="row seattype">
                    <div className="rounded seat col">
                        <p>SL</p>
                        <p>rp 500</p>
                    </div>
                    <div className="rounded seat col">
                        <p>3A</p>
                        <p>rp 600</p>
                    </div>
                    <div className="rounded seat col">
                        <p>2A</p>
                        <p>rp 800</p>
                    </div>
                    <div className="rounded seat col">
                        <p>1A</p>
                        <p>rp 1000</p>
                    </div>
                </div> */}
                
               
                
            </div>

           
            
          </div>
          {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div className="quota">
                    <p>Quota</p>
                    <div className="quota-btn">
                      <div className="form-check">
                        <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="General" id="qoutagen"/>
                        <label className="form-check-label" >
                          General
                        </label>
                      </div>
                    </div>
                    </div>
              
            </div>
          </div> */}
          {/* <button type="submit"  id="next" className=" btn btn-primary"><Link to="/train/trainticket/trainbooking"><span className="trainbutt">Save & Next</span></Link></button> */}
                
                
     </div>
    </>
    )
    
}