// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './FranceCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../images/france1.jpg';
import img2 from '../images/france2.jpg';
import img3 from '../images/france3.jpg';
import img4 from '../images/france4.jpg';
import img5 from '../images/france5.jpg';
import img6 from '../images/france6.jpg';
import img7 from '../images/france7.jpg';


const photos = [img1, img2, img3, img4, img5, img6, img7];

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
    <div className="france-carousel">
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