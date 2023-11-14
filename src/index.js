import React from 'react';
import ReactDOM from 'react-dom/client';
import TrainState from './Context/TrainState';
import Deststate from './Context/Deststate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Deststate>
    <TrainState>
    <App />
    </TrainState>
    </Deststate>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
