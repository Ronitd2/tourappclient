import React from "react";
import "./css/Trainbooking.css";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
import Element2 from "./element2";
import rupee from "./images/rupee.png"
import Navbar from "./Navbar";
import { BsDashLg } from "react-icons/bs";
  import { ToastContainer} from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
export default function Trainbooking(){
    let context = useContext(TrainContext)
    let traindata=context.specifictrain;
    let trainprice=context.trainprice;
    let trainseat=context.trainseat;
    let passenger=context.passenger;
    console.log(passenger);
    let a=[];
    let price=0;
   if(passenger){
    for(let i=0;i<passenger;i++)
    {
        a[i]=i+1;
    }
    price= trainprice?(trainprice*passenger):0;
    }
    const trainbookingfun=async()=>{
        context.sendtrainbooking(price);
    }
    return(
        <>
        <div className="head">
        <Navbar/>
        </div>
        <div className=" container traindetails ">
            <div className="row justify-content-around">
            {traindata && <div className="trainhead col-12 col-md-8">
                            <div className="firstpart">
                            <h5 className="trains">{traindata.train_number}</h5>
                            <p className="arrow trains">&#8594;</p>
                            <h5 className="trains">{traindata.train_name}</h5>
                            </div>
                            <div className="secondpart">
                                <p className="arrtime">{traindata.arrival_time}  <span >{traindata.from_station_name}({traindata.train_src})</span></p>
                                <BsDashLg className="line"/>
                                <p className="dur">{traindata.duration}</p>
                                <BsDashLg className="line"/>
                                <p className="desttime">{traindata.dest_time}   <span>{traindata.to_station_name}({traindata.train_dstn})</span></p>
                            </div>
                           {trainseat && <div className="seatb" > 
                                        <p style={{fontSize:'1.4rem',fontWeight:'bold',color:'#526D82'}}>SeatType</p>
                                        <p style={{fontSize:'1.1rem',fontWeight:'bold',color:'#212A3E'}}>{trainseat}</p>
                            </div>
                            }               
                            </div>}

                            
                                            
        <div className="card col-12 col-md-4" >
        <div className="card-body">
            <h5 className="card-title">Total Ticket Price :</h5>
            <p className="card-text"><img className="rupees" src={rupee}></img>{trainprice && price}</p>
            <div className="paybox">
            <button onClick={trainbookingfun} className="btn btn-primary pay">Pay & BookNow</button>
            <ToastContainer />
            </div>
        </div>
        </div>
        </div>
        </div>
        <div className="container irctcdet">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1" style={{fontSize:'1.5rem'}}>IRCTC Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter IRCTC Username "/>

        </div>
        </form>
        </div>
        
        <div className=" container booksec">
        <h3 >Passenger Details</h3>
            <div className="container">
                {a.map((element)=>{
                    return <Element2 passname={element}  key={element._id} />
                })}
            </div>
            <div className="container namesec">
            <form>
                <div class="form-row">
                    <div class="col-7">
                    <input type="text" class="form-control" placeholder="City"/>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="State"/>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Zip"/>
                    </div>
                </div>
            </form>
            <div className="passwordsec">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Email</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label" id="email">Phone No</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                    </div>
                </div>
            </div>
            </div>
            
            
        </div>
        </>
    )
}