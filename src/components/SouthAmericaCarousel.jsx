// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './SouthAmericaCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../images/south1.jpg';
import img2 from '../images/south2.jpg';
import img3 from '../images/south3.jpg';
import img4 from '../images/south4.jpg';
import img5 from '../images/south5.jpg';
import img6 from '../images/south6.jpg';
import img7 from '../images/south7.jpg';
import img8 from '../images/south8.jpg';
import img9 from '../images/south9.jpg';
import img10 from '../images/south10.jpg';


const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const FranceCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="southAmerica-carousel">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FranceCarousel;