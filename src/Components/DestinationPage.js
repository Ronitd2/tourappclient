import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Place.css";
import DestinationCard from "./DestinationCard";
import { useContext } from 'react';
import Destcontext from "../Context/Destcontext";
import Navbar from "./Navbar";
import Footer from "./Footer";
function DestinationPage(){
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
      let context = useContext(Destcontext);
      const statename= context.stateName;
      const destdata=context.destdet;
      return(
        <>
        <div className="head">
        <Navbar/>
        </div>
        <div className="place_bg">
            <div className='container'>
                <h1 className="place_head">{statename}</h1>
                <Carousel  autoPlay={true} infinite={true} autoPlaySpeed={3000}  transitionDuration={500} responsive={responsive}>
                {destdata ? destdata.map((element)=>{
              return <DestinationCard destination={element}  key={element._id} />
              }):<div></div>}

                    {/* <DestinationCard/>
                    <DestinationCard/> */}
                </Carousel>
            </div>
        </div>
        <Footer/>
        </>
      );
}



export default DestinationPage;