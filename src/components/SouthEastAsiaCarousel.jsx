// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './SouthEastAsiaCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../images/asia1.jpg';
import img2 from '../images/asia2.jpg';
import img3 from '../images/asia3.jpg';
import img4 from '../images/asia4.jpg';
import img5 from '../images/asia5.jpg';
import img6 from '../images/asia6.jpg';
import img7 from '../images/asia7.jpg';


const photos = [img1, img2, img3, img4, img5, img6, img7];

const SouthEastAsiaCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="asia-carousel">
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

export default SouthEastAsiaCarousel;