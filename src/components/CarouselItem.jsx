import React from 'react';
import '../assets/styles/components/CarouselItem.css';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({title, image}) => (
<div className="carousel-item">
        <img className="carousel-item__img" src={image} alt=""  />
        <div className="carousel-item__details">
          <div> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
          Descripción del producto
          </p>
        </div>
      </div>
);


export default CarouselItem;

