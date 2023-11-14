import React from "react";

export default function Element3(props){
        const total_price=props.booklist.traindetails.price+props.booklist.hoteldetails.price;
        const date = new Date().toJSON().slice(0, 10);
        // console.log(date); 
        console.log(props.booklist.date);
        if(props.booklist.date>=date){
            console.log("upcoming trip");
        }
        // else if(props.booklist.date==date)
        // {
        //     console.log("Today's trip"); 
        // }
        else{
            console.log("Already done");
        }
    return(
        
        <>
            {props.booklist.date<date &&
            <tr>
                <td>{props.booklist.destname}</td>
                <td>{props.booklist.traindetails.trainname}</td>
                <td>{props.booklist.traindetails.price}</td>
                <td>{props.booklist.hoteldetails.hotelname}</td>
                <td>{props.booklist.hoteldetails.price}</td>
                <td>{total_price}</td>
                <td>{props.booklist.date}</td>
            </tr> }
        </>
    )
}