import "./css/HotelComp.css";
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';
function HotelComp(props){
    let context = useContext(TrainContext);
    const hotelbookingfun=async()=>{
        context.sendhotelbooking(props.hotel.perday_price,props.hotel.hotel_name);
    }
    // console.log(props.hotel);
    return(
        <>
        
            <div className="container">
            <div className="hotel_body" >
            <div class="row">
                <div className="col-sm-3">
                    <div className="hotel_detail">
                        <img className="hotel_image" src={props.hotel.hotel_pic[0]} alt="Card image cap"/>
                    </div>
                </div>

                <div className="col-sm-5">
                    <div className="box1">
                        <h5 className="hotel_name">{props.hotel.hotel_name}</h5>
                        <h6 className="hotel_location">{props.hotel.hotel_city}</h6>
                        <div className="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                                
                            <span>&nbsp;&nbsp;Rating</span>
                            </div>
                        <span><pre>7.7- Good</pre></span>
                    </div>
                </div>

                <div className="col-sm-4">     
                    <div className="box2">
                        <h6>Indian Epic</h6>
                        <p>&#8377;{props.hotel.perday_price}</p>
                        <h5>&#10004;Free cancelation</h5>
                        <button type="button" onClick={hotelbookingfun} className="btn btn-success">Book Now&nbsp;&nbsp;&#10093;</button>
                    </div>
                </div>   
            </div>
            </div>
            </div>
        </>
    );
}
export default HotelComp;