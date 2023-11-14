import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import place1 from './images/place1.jpg'
import place2 from './images/place2.jpg'
import place3 from './images/place3.jpg'
import place4 from './images/place5.jpg'
import place5 from './images/place8.jpg'
import place6 from './images/place7.jpg'
import TrainContext from '../Context/Traincontext'
import { useContext } from 'react';

 export default function MultiCarousel(){
    // let context = useContext(TrainContext);
    // let weather = context.weatherState;
    // context.showweather();
    // console.log(weather);
//    let city1=weather?weather:'';

    // let city2=mumbai;
    // let city3=shimla;
    // let city4=goa;
    // let city5=kolkata;
    // console.log(city1);
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
        <div className='container'>
        <Carousel  autoPlay={true} autoPlaySpeed={1000}  transitionDuration={500} responsive={responsive}>
        
        <div className='item'>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Tajmahal</h5>
                    {/* {weather && <p>{weather}</p>} */}
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className='item'>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">India Gate</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className='item'>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Shimla</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className='item'>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place4} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Manali</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className='item '>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place5} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Seond Hooghly Bridge</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className='item '>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={place6} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Goa</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </Carousel>
        </div>
      )
 }