import React from "react";
import Destcontext from "../Context/Destcontext";
import { useContext } from 'react';
export default function Element4(props){
    const date = new Date().toJSON().slice(0, 10);
    let context = useContext(Destcontext);
    const travellist=context.travelList;
    console.log(travellist);
    const showtravel=()=>{
        context.gettravel(props.booklist.date,props.booklist.destname);
    }
    return(
        <>
        {props.booklist.date>=date &&
        <div className="card w-50 upcoming_elements">
        <div className="card-body">
            <h5 className="card-title h11">{props.booklist.destname}</h5>
            <p className="card-text c2"><span className="t1">Train Name :</span>{props.booklist.traindetails.trainname}</p>
            <p className="card-text c2"><span className="t1">Hotel Name :</span>{props.booklist.hoteldetails.hotelname}</p>
            <p className="card-text c2"><span className="t1"> Date :</span>{props.booklist.date}</p>
            <button type="button" class="btn btn-outline-info" onClick={showtravel}>Show Travel List</button>
            {
                travellist && 
                <div className="travellist">
                <ul>
                {travellist.map((element)=>{
                    return <li className="c2">{element}</li>
                })}
                </ul>
                </div>
            }
        </div>
        </div>
            
        }
        </>
    )
}


{/* <div classNameName="upcoming_elements">
                <p classNameName="upcoming_entities">{props.booklist.traindetails.trainname}</p>
                <p classNameName="upcoming_entities">{props.booklist.hoteldetails.hotelname}</p>
                <p classNameName="upcoming_entities">{props.booklist.date}</p>
            </div> */}