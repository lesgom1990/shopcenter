import React from 'react';
import Header from '../components/Header.jsx'
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Banner from '../components/Banner.jsx';
import '../assets/styles/App.css';
import bikini from '../assets/static/bikini.jpg';
import entero from '../assets/static/una-pieza.jpg';
import asoleador from '../assets/static/asoleadores.jpg';

const App = () => (
    <div className="App">
        <Banner />
        <Categories title='bikinis'>
            <Carousel title="black-bikini">
                <CarouselItem title="black-bikini" image={bikini} ></CarouselItem>
            </Carousel>
        </Categories>
        <Categories title='entero'>
            <Carousel title="enterizo">
                <CarouselItem title="entero" image={entero} ></CarouselItem>
            </Carousel>
        </Categories>
        <Categories title='asoleador'>
            <Carousel title="asoleador">
                <CarouselItem title="asoleador amarillo" image={asoleador} ></CarouselItem>
            </Carousel>
        </Categories>
    </div>
);

export default App;