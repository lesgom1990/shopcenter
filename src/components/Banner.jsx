import React from 'react';
import '../assets/styles/components/Banner.css'
import banner from '../assets/static/banner.png';
const Banner = () => (
    <section className="banner__section"> 
        <img className="banner__img" src={banner} alt=""></img>
    </section>
);

export default Banner;

