import React from 'react';
import "./css/Trainbooking.css";
export default function  Element2(props){
  const passname="Passenger"+props.passname+" Name";
    return(
        <>
    
    <div className="row ">
      <div className="col">
        <input type="text" className="form-control"  placeholder={passname}/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Age"/>
      </div>
    </div>
      

      </>
      
      )
    }