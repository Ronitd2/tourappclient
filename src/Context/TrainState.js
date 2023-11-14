import React from 'react'
import TrainContext from './Traincontext';
import { useState } from 'react';
import axios from 'axios';

const TrainState = (props) => {
    const [traindet, setTraindet] = useState('');
    const [specifictrain, setSpecifictrain] = useState('');
    const [passenger, setPassengerDet] = useState('');
    const [trainprice, setTrainprice] = useState('');
    const [trainseat, setTrainseat] = useState('');
    const [hotelDetails,setHoteldetails]=useState('');
    const [specifichotel, setSpecifichotel] = useState('');
    const [date,setDate]=useState('');
    // const [weatherState,setWeatherState]=useState('');
    
    //Fetch Train data
    const changedate=(date)=>{
        setDate(date);
    } 
    const hoteldate=(date)=>{
        setDate(date);
    } 

    const destdate=(date)=>{
        setDate(date);
    }
    const fetchtrain =async(data)=>{
        const response=await fetch(`https://tourappbackend-6098.onrender.com/ticket/train/`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        });
        const result = await response.json();
        setTraindet(result);
    }
    

    //Fetch Hotel data
        const fetchhotel = async(cityname)=>
        {
            const respond=await fetch(`https://tourappbackend-6098.onrender.com/hotelbooking/hotel/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(cityname),
            });
            const result_hotel=await respond.json();
            console.log(result_hotel);
            setHoteldetails(result_hotel);
        }

        const sendtrainbooking= async(totalprice)=>{
            const token =localStorage.getItem('token');
            
            let trainbook={
                type:'train',
                name:specifictrain.train_name,
                price:totalprice,
                token:token,
                date:date,
            }
            try{
                const respond=await fetch(`https://tourappbackend-6098.onrender.com/booking/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(trainbook),
            });
            const result=await respond.json();
             console.log(result)   
              }
              catch(err){
                console.log("Error",err)
              }
        }
            const sendhotelbooking= async(totalprice,hotel_name)=>{
                const token =localStorage.getItem('token');
                
                let trainbook={
                    type:'hotel',
                    name:hotel_name,
                    price:totalprice,
                    token:token,
                    date:date,
                }
                try{
                    const respond=await fetch(`https://tourappbackend-6098.onrender.com/booking/`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(trainbook),
                });
            const result=await respond.json();
             console.log(result)   
              }
              catch(err){
                console.log("Error",err)
              }
        }

        const destbooking=async(destname)=>{
            const token =localStorage.getItem('token');
                  
                  let trainbook={
                      type:'dest',
                      name:destname,
                      price:'',
                      token:token,
                      date:date,
                  }
                  try{
                      const respond=await fetch(`https://tourappbackend-6098.onrender.com/booking/`,{
                      method: 'POST',
                      headers:{
                          'Content-Type': 'application/json'
                      },
                      body:JSON.stringify(trainbook),
                  });
                  const result=await respond.json();
                   console.log(result)   
                    }
                    catch(err){
                      console.log("Error",err)
                    }
          }

          const travelbooking=async(placename)=>{
            
                  
                  let trainbook={
                    date:date,
                    place:"Kolkata",
                    travelplace:placename
                  }
                  console.log(trainbook);
                  try{
                      const respond=await fetch(`https://tourappbackend-6098.onrender.com/travel/`,{
                      method: 'POST',
                      headers:{
                          'Content-Type': 'application/json'
                      },
                      body:JSON.stringify(trainbook),
                  });
                  const result=await respond.json();
                  console.log(result.acknowledge);
                   //alert(result.success);
                   if(result.acknowledge=='Successfull')
                   {
                    alert('Add Successfull');
                   }
                   else{
                    alert('You have already  booked and add this  place')
                   }
                   console.log(result)   
                    }
                    catch(err){
                      console.log("Error",err)
                    }
          }

    // const showweather = async ()=>{
    //     let city='delhi'
    //     const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '886916d19cmsh4b5bf791d26aa46p19828bjsn7fad2c092bc2',
    //         'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    //     }
    
    
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     let tempareture=result.current_observation.condition.temperature;
    //     setWeatherState(tempareture);
         
    // } catch (error) {
    //     console.error(error);
    // }
    // }
    const sendpassenger = (passengerDet)=>{
        setPassengerDet(passengerDet);
    }
    const sendTrainInfo=(traindata)=>{
        setSpecifictrain(traindata);
    } 
    const sendPrice=(price,seat)=>{
        setTrainprice(price);
        setTrainseat(seat);
    }
    const sendHotelInfo=(hoteldata)=>{
        setSpecifichotel(hoteldata);
    } 
    return(
        <TrainContext.Provider value={{traindet,specifictrain,passenger,trainprice,trainseat,hotelDetails,specifichotel,fetchtrain,sendTrainInfo,sendpassenger,sendPrice,fetchhotel,changedate,sendtrainbooking,sendHotelInfo,sendhotelbooking,hoteldate,destbooking,destdate,travelbooking}}>
        {props.children}
        </TrainContext.Provider>
    )
}
export default TrainState;