import { Link } from "react-router-dom";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Events.css";
import img1 from "./images/Events/Durga_puja.png";
import img2 from "./images/Events/Dussehra.png";
import img3 from "./images/Events/Ganesh_puja.png";
import img4 from "./images/State/punjab.png";function Events(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
        <div className="event_bg">
            <div className='container'>
                <h1 className="event_heading">Special Events</h1>
                <Carousel  autoPlay={false} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}> 
                <div className='item'>
                    <Link><button className="event_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '15rem',width:'22.8rem', borderRadius: "10px"}} src={img1} alt="Card image cap"/>
                            <div className="card-body event_title">
                                <h3>Festive Event</h3>
                                <p>West Bengal: Durga Puja</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item'>
                    <Link><button className="event_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '15rem',width:'22.8rem', borderRadius: "10px"}} src={img2} alt="Card image cap"/>
                            <div className="card-body event_title">
                            <h3>Festive Event</h3>
                                <p>Delhi: Dashera</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item'>
                    <Link><button className="event_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '15rem',width:'22.8rem', borderRadius: "10px"}} src={img3} alt="Card image cap"/>
                            <div className="card-body event_title">
                                <h3>Festive Event</h3>
                                <p>Mumbai: Ganseh Puja</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                </Carousel>
            </div>
        </div>
        </>
      );
}

export default Events;