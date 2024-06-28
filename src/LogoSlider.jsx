import React, { useState, useEffect } from 'react';
import './logoSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo3 from './fakimimage/c14.jpg'
import Logo4 from './fakimimage/c15.jpg'
import Logo5 from './fakimimage/p3.jpg'
import Logo6 from './fakimimage/c25.jpg'
// import Logo4 from './LOGO/gdga.png'
import { Link } from "react-router-dom";

const LogoSlider = () => {
    const [settings] = useState({
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    });

    const offerData = [
        {
            type: "offer",
            imageUrl: Logo4,
            title: "Mercedes Benz",
            //   description: "Brief description of the newest offer."
        },
        {
            type: "offer ",
            imageUrl: Logo3,
            title: "Mercedes Benz",
            //   description: "Brief description of the newest offer."
        },
        {
            type: "offer ",
            imageUrl: Logo5,
            title: "Pneu",
            // description: ""
        },
        {
            type: "offer ",
            imageUrl: Logo6,
            title: "Mercedes Benz",
            //   description: "Brief description of the newest project."
        }
        // Add more objects as needed
    ];

    return (
        <div className='container heading_container cardsliderall'>
            <h4 className='text-center mb-4' style={{ fontWeight: "bold" }} >Offres à ne pas manquer</h4>
            <Slider {...settings}>
                {offerData.map((offer) => (
                    <div key={offer.title} className="offer-slide">
                        <div className="cardslider">
                            <img className="cardslider-img text-center" src={offer.imageUrl} alt={offer.alt} />
                            <div className="cardslider-info text-center">
                                <p className="text-title text-center">{offer.title} </p>
                                <p className="text-body text-center">{offer.description}</p>
                            </div>
                            <div className="cardslider-footer">
                                <span className="text-title text-center" style={{fontSize:"10px"}}><span>Pour tous renseignements appuyez sur </span> 
                                    <button className='btn btn-danger mt-2' style={{height:"auto", fontSize:"15px"}}>contact</button>
                                </span>
                                {/* <span className="text-titles"><button className='btn btn-danger'>contact</button></span> */}
                                {/* <div className="cardslider-button">
                                    <svg className="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
            <div className='mt-5 text-center'>
                <Link to="/project" ><button className="btn btn-success " id='voirplus'>Voir Plus</button></Link>
            </div>
        </div>


    );
};
export default LogoSlider;
