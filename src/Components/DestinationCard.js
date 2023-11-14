import { Link } from "react-router-dom";
import "./css/Place.css";
import { useContext } from 'react';
import Destcontext from "../Context/Destcontext";
function DestinationCard(props){
    let context = useContext(Destcontext);
    async function destook(){
        let place=props.destination.place.toLowerCase();
        context.sendplace(props.destination);
        context.placenumber(props.destination.place);
        context.fetchweather(place);
    }
return(
    <>
        <div className='item'>
            <div className="card border-0" style={{width: '17rem'}}>
                <img className="card-img-top" style={{height: '12rem',width: '17rem'}} src={props.destination.pic[0]} alt="Card image cap"/>
                <div className="card-body place_heading">
                <p>{props.destination.state}</p>
                <h5 className="card-title">{props.destination.place}</h5>
                 <div className="col-md-12 text-center">
                    <Link to="/destination/destinationbook"><button className="place_button" onClick={destook}>view</button></Link>
                </div><br></br>
                {/*<div className="col-md-12 text-center">
                    <Link><button className="place_button">BOOK YOUR HOTEL</button></Link>
                </div> */}
                </div>
            </div>
        </div>
    </>
);
}
export default DestinationCard;