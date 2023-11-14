import HotelComp from "./HotelComp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
function HotelPage(){
    let context = useContext(TrainContext);
    let hotelDetails=context.hotelDetails;
    console.log(hotelDetails);
    return(
        <>
        <div className="head">
            <Navbar/>
            <div className="hotelhead">
                <p>Explore the hotels</p>    
            </div>
            </div>
            {hotelDetails ? hotelDetails.map((element)=>{
              return <HotelComp hotel={element}  key={element._id} />
              }):<div></div>}
            <Footer/>
        </>
    );
}
export default HotelPage;