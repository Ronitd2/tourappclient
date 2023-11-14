import { Link } from "react-router-dom";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Place.css";
import img1 from "./images/Place/Tajmahal.Png";
import img2 from "./images/Place/Goa.png";
import img3 from "./images/Place/Manali.png";
import img4 from "./images/Place/Shimla.png";
import img5 from "./images/Place/India_gate.png";

function Place(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <>
        <div className="place_bg container-fluid">
            <div className='container'>
                <h1 className="place_head">Best to visit in India</h1>
                <Carousel  autoPlay={true} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}> 
                    <div className='item'>
                        <div className="card border-0" style={{width: '17rem'}}>
                            <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={img1} alt="Card image cap"/>
                            <div className="card-body place_heading">
                                <p>Uttar Pradesh</p>
                                <h5 className="card-title">Taj Mahal</h5>
                                <div className="col-md-12 text-center">
                                    <button className="place_button">GRAB YOUR TICKETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card border-0" style={{width: '17rem'}}>
                            <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={img2} alt="Card image cap"/>
                            <div className="card-body place_heading">
                                <p>Goa</p>
                                <h5 className="card-title">Goa</h5>
                                <div className="col-md-12 text-center">
                                    <button className="place_button">GRAB YOUR TICKETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card border-0" style={{width: '17rem'}}>
                            <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={img3} alt="Card image cap"/>
                            <div className="card-body place_heading">
                                <p>Himachal Pradesh</p>
                                <h5 className="card-title">Manali</h5>
                                <div className="col-md-12 text-center">
                                    <button className="place_button">GRAB YOUR TICKETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card border-0" style={{width: '17rem'}}>
                            <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={img4} alt="Card image cap"/>
                            <div className="card-body place_heading">
                                <p>Himachal Pradesh</p>
                                <h5 className="card-title">Shimla</h5>
                                <div className="col-md-12 text-center">
                                    <button className="place_button">GRAB YOUR TICKETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card border-0" style={{width: '17rem'}}>
                            <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={img5} alt="Card image cap"/>
                            <div className="card-body place_heading">
                                <p>Delhi</p>
                                <h5 className="card-title">India Gate</h5>
                                <div className="col-md-12 text-center">
                                    <button className="place_button">GRAB YOUR TICKETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
        </>
      );
}

export default Place;
// onClick={()=>(context.sendTrainname("Delhi"))}