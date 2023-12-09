import React from 'react'
import DestContext from './Destcontext';
import { useState } from 'react';


const Deststate = (props) => {
    const [stateName, setStateName] = useState('');
    const [destdet, setDest] = useState('');
    const [spedestdet, setSpeDest] = useState('');
    const [weatherState,setWeatherState]=useState('');
    const [bookHistory,setBookHistory]=useState('');
    const [placeNumber,setPlaceNumber]=useState('');
    const [placelist,setPlaceList]=useState('');
    const [pageNumber,setPageNumber]=useState('');
    const [travelList,setTravelList]=useState('');

    const sendplace = (dataf)=>{
      setSpeDest(dataf);
  }

    const fetchdest = async(data)=>{
        setStateName(data);
        
          let dat={
            state:data
          };
          console.log(dat);
            const respond=await fetch(`https://tourappbackend-6098.onrender.com/dest/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(dat),
            });
            const result_dest=await respond.json();
            console.log(result_dest);
            setDest(result_dest);
            
        }

    const fetchweather= async(cityapi)=>{
      console.log(cityapi);
      const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityapi}&format=json&u=f`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '886916d19cmsh4b5bf791d26aa46p19828bjsn7fad2c092bc2',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      }
    try{
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherState(result);
        console.log(result);
        //console.log(weatherState);
        // let tempareture=result.current_observation.condition.temperature;
        // setWeatherState(tempareture);
         
    } catch (error) {
        console.error(error);
    }
  }


const placenumber=async(place)=>{
  let placedata={
    placename:place
  };
  console.log(placedata);
  const respond=await fetch(`https://tourappbackend-6098.onrender.com/place/number/`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(placedata),
            });
            const result_dest=await respond.json();
            console.log(result_dest);
            setPlaceNumber(result_dest.placenumber);
            setPlaceList(result_dest.initialplacelist);
            setPageNumber(1);
            
} 


    const getbooking=async()=>{
      const token =localStorage.getItem('token');
      const data={
        token:token,
      }
      const response= await fetch(`https://tourappbackend-6098.onrender.com/getbooking/`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data),
      });
      //console.log(response);
      const bookhistory=await response.json();
      
      // console.log(bookhistory);
      setBookHistory(bookhistory);
    }

    const getallplace=async(pagenum,place)=>{

      setPageNumber(pagenum);
      //console.log(pageNumber);
      let placedata={
        placename:place,
        page:pagenum,
        pagination:2
      };
      //console.log(placedata);
      const respond=await fetch(`https://tourappbackend-6098.onrender.com/place/`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(placedata),
                });
                const result_dest=await respond.json();
                console.log(result_dest);
                setPlaceList(result_dest);  
    }

    const gettravel=async(date,place)=>{
      const fetchdata={
        traveldate:date,
        travelplace:place
      }
      const respond=await fetch(`https://tourappbackend-6098.onrender.com/travel/travellist/`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(fetchdata),
                });
                const result_dest=await respond.json();
                //console.log(result_dest.placelist);
                setTravelList(result_dest.placelist);
                
    }

    
    // const p =await fetch(`https://goweather.herokuapp.com/weather/${cityapi}`);
    // const res= await p.json();
    // console.log(res);
      // p.then((value1)=>{
      //     console.log(value1);
      //   return value1.json();
      // }).then((value2)=>{
      //     console.log(value2);
      //     let p = value2;
      //     let tem=document.getElementById("temp");
      //     tem.innerText=p["wind"];
      // })
    

  return (
    <DestContext.Provider value={{stateName,weatherState,destdet,spedestdet,bookHistory,placeNumber,placelist,pageNumber,travelList,fetchweather,fetchdest,sendplace,getbooking,placenumber,getallplace,gettravel}}>
        {props.children}
        </DestContext.Provider>
  )
}
export default Deststate;