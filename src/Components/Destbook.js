import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import  weatherlogo from "./images/cloudy.png";
import { useContext } from 'react';
import Destcontext from "../Context/Destcontext";
import TrainContext from '../Context/Traincontext'
import "./css/dest.css";
import { Link } from "react-router-dom";
import Placecomponent from "./Placecomponent";
import Element5 from "./element5";
import Pagenation from "./Pagenation";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Destbook(){
    let context = useContext(Destcontext);
    let context2= useContext(TrainContext)
    let weather = context.weatherState;
    const destdata=context.spedestdet;
    const placeNumber=context.placeNumber;
    const placelist=context.placelist;
    const presentpage=context.pageNumber;
    let totalpage;
    console.log(presentpage);
    

    if(placeNumber%2==0){
        totalpage=Math.floor(placeNumber/2);
    }
    else{
        totalpage=Math.floor((placeNumber/2)+1);
    }

    console.log(totalpage);
    //console.log(placelist);
    console.log(placeNumber);
    //let temp=(weather.current_observation.condition.temperature-32)*(5/9);

    function  placecomp(pagenumber){
        //context.sendpagenumber()
        context.getallplace(pagenumber,destdata.place);
    }

    function bookdest(){
        context2.destbooking(destdata.place)
    }
    return(
        <>
        <div className="head">
        <Navbar/>
        </div>
       
       <div className="destsec container">

            <div className="part1">
            {destdata &&
            <div>
            <h2>{destdata.place}</h2> 
            <h6>{destdata.details}</h6>
            </div>
            }
            
            <h2>Places Of {destdata.place}</h2>
            {placelist && placelist.map((element)=>{
              return <Placecomponent placedetails={element}  key={element._id} />
              })}

              {placeNumber>2 &&
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                {presentpage>1 &&
                <li class="page-item"><a class="page-link" onClick={()=>(placecomp(presentpage-1))} href="#">Previous</a></li>}
                <li class="page-item"><a class="page-link" onClick={()=>(placecomp(1))} href="#">1</a></li>
                <li class="page-item"><a class="page-link" onClick={()=>(placecomp(2))} href="#">2</a></li>
                <li class="page-item"><a class="page-link" onClick={()=>(placecomp(3))} href="#">3</a></li>
                {presentpage<totalpage &&
                <li class="page-item"><a class="page-link" onClick={()=>(placecomp(presentpage+1))} href="#">Next</a></li>}
            </ul>
            </nav>
            }
            
            </div>
       
       
            <div className="part2">
        
            <div class="card" style={{width:" 18rem"}}>
                    
                    <div class="card-body">
                        <h5 class="card-title">Weather <img className="weatherpic" src={weatherlogo} alt="Logo"/></h5>
                        {weather &&
                        <div>
                        <p class="card-text">Tempareture:{Math.ceil((weather.current_observation.condition.temperature-32)*(5/9))}C </p>
                        <p class="card-text">Texture:{weather.current_observation.condition.text} </p>
                        <p class="card-text">wind:{weather.current_observation.wind.speed} </p>
                        <p class="card-text">Humidity:{weather.current_observation.atmosphere.humidity} </p>
                       
                        </div>
                        }
                    </div>
                    </div>
                    
                    
                    <div class="card mt-5" style={{width:" 18rem"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><button type="button" class="btn btn-primary btn-lg b3" onClick={bookdest}>Book This Place</button></li>

                        <li class="list-group-item">
                        <label  className="source form-label">Select Date For Travel</label>
                        <input  type="date" className="form-control"placeholder="Type to search..." onChange={(e)=>(context2.destdate(e.target.value))}/>
                        </li>
                        <li class="list-group-item travel-list-text">Make a Travel List of {destdata.place} </li>
                    </ul>
                    <div class="card-footer">
                    <Link to="/train"><button type="button"  class="btn btn-primary">Trainbooking</button></Link>
                    <Link to="/booking"><button type="button"  class="btn btn-success l2">Hotelbooking</button></Link>
                    </div>
                    </div>
            </div>
             <ToastContainer />

        </div>
        <Footer/>
        </>
    )
}