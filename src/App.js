
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Flight from './Components/flight';
import Train from './Components/Train';
import Trainticket from './Components/Trainticket';
import Trainbooking from './Components/Trainbooking';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Login  from './Components/Login';
import Register from './Components/Register';
import Booking from './Components/Booking';
import Hotel from './Components/HotelPage';
import Destbook from './Components/Destbook';
import Destpage from './Components/DestinationPage';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/train" element={<Train />}> </Route>
          <Route path="/train/trainticket" element={<Trainticket  />} ></Route>   
          <Route path="/train/trainticket/trainbooking" element={<Trainbooking  />} ></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/booking/hotel" element={<Hotel/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/destination/destinationbook" element={<Destbook />}></Route>
          <Route path="/destination" element={<Destpage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  
    
  );
}

export default App;
