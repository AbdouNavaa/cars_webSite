import React, {useEffect} from 'react'
import './Auction.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import car1 from '../../assets/toyota_car2.jpeg'
import car2 from '../../assets/chevrolet_car3.jpeg'
import car3 from '../../assets/volkswagen_car1.jpeg'
import car4 from '../../assets/mercedes_amg_one.jpeg'
import car5 from '../../assets/honda_car5.webp'
import car6 from '../../assets/Audi-R8-V10-GT.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Auction() {
        //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='auction section'>
            <div className="secContsiner container">
                <div  data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                    Active Auction
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

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Best Seller</span>
                        </div>
                    </div>

                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
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

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Best Seller</span>
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

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Buy Now</span>
                        </div>
                    </div>

                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={car4} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Mercedes Amg One
                        </h5>
                        <span className="miles">
                            15457 Miles
                        </span>

                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Best Seller</span>
                        </div>
                    </div>

                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car5} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2021 Honda S4 Prenuim Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>

                        <span className="AWD">
                            AWD 6-Cylinder Turbo
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Best Seller</span>
                        </div>
                    </div>

                    {/* Single Car Div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={car6} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Audi R8 V10 GT
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>

                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $41,000
                            </span>

                            <span className="buyBtn">Best Seller</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
