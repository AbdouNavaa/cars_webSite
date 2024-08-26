import React, {useEffect} from 'react'
import './Trending.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import car1 from '../../assets/650S.jpeg'
import car2 from '../../assets/lamborgini_car.jpeg'
import car3 from '../../assets/mercedes_2024.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Trending() {
        //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='trending section'>
            <div className="secContsiner container">
                <div  data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Trending Near You
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Prenuim Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>

                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="seller">Best Seller</span>
                        </div>
                    </div>

                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car2} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Prenuim Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>

                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="seller">Best Seller</span>
                        </div>
                    </div>

                                        {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car3} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Prenuim Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>

                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="seller">Best Seller</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
