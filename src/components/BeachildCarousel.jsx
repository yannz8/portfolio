// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './BeachildCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../video/tourne.gif';
import img2 from '../images/struct_beachild.png';
import img3 from '../images/child_beachild.png';
import img4 from '../images/traj_beachild.png';
import img5 from '../images/stat_beachild.png';

const BeachildCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  const slides = [
    {
      photo: img1,
      caption: ''
    },
    {
      photo: img2,
      caption: 'Set up and calibrated motion capture equipment, captured complex movements, and processed the data to build accurate 3D digital models and animations for diverse applications.'
    },
    {
      photo: img3,
      caption: 'The HABIT-ILE method is a rehabilitation approach that combines intensive, repetitive practice with functional tasks. It aims to enhance motor skills and quality of life by integrating specific, individualized activities.'
    },
    {
      photo: img4,
      caption: 'Analyzed and visualized 3D data, focusing on extracting insights and presenting them through detailed visualizations to support decision-making and enhance understanding of complex datasets.'
    },
    {
      photo: img5,
      caption: 'Performed statistical analysis on various spatiotemporal parameters, focusing on extracting and interpreting data patterns to support detailed insights'
    },
  ];

  return (
    <div className="beachild-carousel">
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



export default BeachildCarousel;