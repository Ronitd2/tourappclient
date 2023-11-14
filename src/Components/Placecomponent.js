import React from "react";
import pic from "./images/Place/India_gate.png";
import { useContext } from 'react';
import TrainContext from '../Context/Traincontext'
export default function Placecomponent(props)
{
    let context= useContext(TrainContext)
    const addlist=()=>{
            context.travelbooking(props.placedetails.name)
        }
    return(
        <>
          <div className="destcomp">
            <div className="destpart">
                <img src={props.placedetails.pic} className="destcompic"></img>
                <h5 class="card-title">{props.placedetails.name}</h5>
                <p class="card-text">{props.placedetails.details}</p>
            
            
                <p class="card-text gghg">Location : <small class="text-muted ">{props.placedetails.location}</small></p>
                <p class="card-text gghg">Price : <small class="text-muted">{props.placedetails.price}</small></p>
                <div className="fsa">
                <p class="card-text gghg">Timing : <small class="text-muted">{props.placedetails.timing}</small></p>
                {props.placedetails.price=="Free"?<button type="button" class="btn btn-success addbtn" onClick={addlist}>Add Travel List</button> 
                :<button type="button" class="btn btn-success addbtn" onClick={addlist}>Book Ticket & Add Travel List</button>}
                </div>
            </div>
          </div>  
        
        </>
    )
}

















{/* <div class="card mb-3" style={{ width: '1024px'}}>
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src={pic}  style={{ width: '300px'}} alt="picture"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Victoria Memorial</h5>
                <p class="card-text">An imposing white monument, Victoria Memorial is one of the most visited places in Kolkata, and for all good reasons. Named after Queen Victoria, it now serves as a museum and is perfect for history buffs. If you ever feel like taking a walk down our past and reflect on how long India has come from its colonization days, visit this place. There are light and sound shows held in the evening. </p>
                <p class="card-text"><small class="text-muted">price:INR 30 for Indians, and INR 200 for foreigners</small></p>
                <p class="card-text"><small class="text-muted">timing:10:00 a.m. to 5:00 p.m.</small></p>
                <p class="card-text"><small class="text-muted">location:Victoria Memorial Hall, 1, Queen's Way, Kolkata</small></p>
            </div>
            </div>
        </div>
        </div> */}