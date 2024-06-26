import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo3 from './images/3.png'
import Logo4 from './LOGO/gdga.png'

const LogoSlider = () => {
    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: 'linear',
    });

    const logos = [
       Logo3, Logo4
        // Add more logos here
    ];

    return (
        <div className='container heading_container'>
            <h4 className='text-center mb-4' style={{fontWeight:"bold"}} >Nos Parteneurs</h4>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className='container'>
                        <img src={logo} alt='logo' className='logoStyle'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default LogoSlider;
