import { Link } from "react-router-dom";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Season.css";
import img1 from "./images/Season/Summer/Darjeeling.png";
import img2 from "./images/Season/Summer/Gangtok.png";
import img3 from "./images/Season/Summer/Ladakh.png";
function Season(){
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
        <div className="season_bg">
            <div className='container'>
                <h1 className="season_heading">Season Special</h1>
                <Carousel  autoPlay={false} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}> 
                <div className='item'>
                    <Link><button className="season_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '12.6rem',width:'22.8rem', borderRadius: "10px"}} src={img1} alt="Card image cap"/>
                            <div className="card-body season_title">
                                <h3>Season Special</h3>
                                <p>Darjeeling</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item'>
                    <Link><button className="season_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '12.6rem',width:'22.8rem', borderRadius: "10px"}} src={img2} alt="Card image cap"/>
                            <div className="card-body season_title">
                            <h3>Season Special</h3>
                                <p>Ladakh</p>
                            </div>
                        </div>
                    </button></Link>
                    </div>
                    <div className='item'>
                    <Link><button className="season_button">
                        <div className="card border-0" style={{width: '22.8rem'}}>
                            <img className="card-img" style={{height: '12.6rem',width:'22.8rem', borderRadius: "10px"}} src={img3} alt="Card image cap"/>
                            <div className="card-body season_title">
                                <h3>Season Special</h3>
                                <p>Gangtok</p>
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

export default Season;