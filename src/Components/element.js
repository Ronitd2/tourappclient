import React from 'react';
import "./css/Trainticket.css";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
export default function  Element(props){
    let sl=500;
    let threeA=600;
    let twoA=800;
    let oneA=1000;
    let context = useContext(TrainContext);
    
     return(
        <div className="r1 scale-up-hor-center" onClick={()=>(context.sendTrainInfo(props.train))} >
        <p className='trainnamedetails'>{props.train.train_number}-{props.train.train_name}</p>
        
        <div>
        <p className='timedetails'>{props.train.arrival_time} {props.train.train_src}  ---- {props.train.duration} ---- {props.train.dest_time} {props.train.train_dstn}</p>
        </div>

        <div>
            <p>Source station name : {props.train.from_station_name}   Destination station name : {props.train.to_station_name}</p>
        </div>
        <div className="row seattype" >
            <div className="rounded seat col" onClick={()=>(context.sendPrice(sl,"SL"))}>
                <p>SL</p>
                <p>rp {sl}</p>
            </div>
            <div className="rounded seat col" onClick={()=>(context.sendPrice(threeA,"3A"))}>
                <p>3A</p>
                <p>rp {threeA}</p>
            </div>
            <div className="rounded seat col" onClick={()=>(context.sendPrice(twoA,"2A"))}>
                <p>2A</p>
                <p>rp {twoA}</p>
            </div>
            <div className="rounded seat col" onClick={()=>(context.sendPrice(oneA,"1A"))}>
                <p>1A</p>
                <p>rp {oneA}</p>
            </div>     
        </div>
    </div>)
}