import React  from "react";
import Navbar from "./Navbar";
import Destcontext from "../Context/Destcontext";
import { useContext } from 'react';
import Element3 from "./element3";
import Element4 from "./element4";
import destination from "./images/delivery.png";
import user from "./images/user.png"
export default function Dashboard(){
    let context = useContext(Destcontext);
    const bookdetails= context.bookHistory;
    {bookdetails? console.log(bookdetails):console.log("Not available")};
    return(
        <>
        <div className="head">
        <Navbar/>
        </div>
            <div className="dashuser">
                <div className="dashleft">
                    <img src={user} className="userpic" />
                    <p className="username">{bookdetails && bookdetails[0].name}</p>
                    <div className="destination">
                    <img src={destination} className="destpic" />
                    <p className="desttext">Add Destination</p>
                    </div>
                </div>
                <div className="dashright">
                    <h3 className="dash">Dashboard</h3>
                    <div className="traveldetails">
                        <div className="upcoming-ticket">
                            <h4 className="text2">Upcoming Trips</h4>
                            {bookdetails && bookdetails.map((element)=>{
                                return <Element4 booklist={element}  key={element._id} />
                                })}    
                        </div>
                        <div className="bookhistory">
                            <h4 className="text2">bookhistory</h4>
                            <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Destination Name</th>
                                <th scope="col">Train name</th>
                                <th scope="col">Train price</th>
                                <th scope="col">Hotel name</th>
                                <th scope="col">Hotel price</th>
                                <th scope="col">Total price</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {bookdetails && bookdetails.map((element)=>{
                                return <Element3 booklist={element}  key={element._id} />
                                })}
                            </tbody>
                            </table>
                            <button type="button"  className="btn btn-primary" onClick={context.getbooking}>Get Histrory</button>
                        </div>
                    </div>
                    

                </div>
            </div>

        </>
    )
}