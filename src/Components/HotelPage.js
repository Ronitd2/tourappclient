import HotelComp from "./HotelComp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function HotelPage(){
    let context = useContext(TrainContext);
    let hotelDetails=context.hotelDetails;
    console.log(hotelDetails);
    return(
        <>
        <div className="head">
            <Navbar/>
            </div>
            <div className="hotelhead1 container">
                <h2 className="headingtext">Explore the hotels</h2>    
            </div>
            
            {hotelDetails ? hotelDetails.map((element)=>{
              return <HotelComp hotel={element}  key={element._id} />
              }):<div></div>}
              <ToastContainer />
            <Footer/>
        </>
    );
}
export default HotelPage;