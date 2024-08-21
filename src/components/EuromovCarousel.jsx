// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './EuromovCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../video/dynamique_inverse.gif';
import img2 from '../images/dynamique_euromov.png';
import img3 from '../images/ia_euromov.png';
import img4 from '../images/estimateur_euromov.png';


const EuromovCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides = [
    {
      photo: img1,
      caption: ''
    },
    {
      photo: img2,
      caption: ' Applied a biomechanical approach in a research lab, focusing on analyzing and interpreting complex 3D data to advance understanding of movement dynamics and enhance experimental outcomes.'
    },
    {
      photo: img3,
      caption: 'Conducted research to develop a machine learning model for prediction, analyzing and processing data to create accurate forecasts and insights, enhancing decision-making and research outcomes'
    },
    {
      photo: img4,
      caption: ' Analyzed its results using statistical methods, refining the model’s accuracy and providing valuable insights from the data. Published a research article, contributing to academic knowledge and discourse.'
    },
  ];

  return (
    <div className="euromov-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.photo} alt={`Slide ${index + 1}`} className="carousel-image" />
            <p className="carousel-caption">{slide.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EuromovCarousel;