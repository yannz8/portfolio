// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './UnivCarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../images/univ_pied.png';
import img2 from '../images/univ_stent.png';
import img3 from '../images/univ_cyb.png';

import pdf_img from '../images/pdf.png'

import pdf1 from '../docs/soutenance_pied.pdf';
import pdf2 from '../docs/rapport_stent.pdf';
import pdf3 from '../docs/rapport_cybersecurity.pdf';

const UnivCarousel = () => {
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
      caption: 'Developed a finite element model to simulate forces on the foot, utilizing highly accurate pressure measurements from a precision mat to analyze the pressure distribution and its effects on foot dynamics.',
      pdf: pdf1,
      pdf_name: 'foot_report.pdf'
    },
    {
      photo: img2,
      caption: 'Simulated pressure on an aortic stent using finite element analysis and studied the fracture limits of the object to evaluate its structural integrity and performance under realistic conditions.',
      pdf: pdf2,
      pdf_name: 'stent_report.pdf'
    },
    {
      photo: img3,
      caption: 'Worked on a pen-testing project for mobile hospitals, identifying vulnerabilities and assessing security measures to ensure the protection of sensitive data and systems in critical healthcare environments.',
      pdf: pdf3,
      pdf_name: 'cybersecurity_report.pdf'
    },
  ];

  return (
    <div className="univ-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.photo} alt={`Slide ${index + 1}`} className="carousel-image" />
            <p className="carousel-caption">{slide.caption}</p>
            <a href={slide.pdf} download={slide.pdf_name}><img src={pdf_img} alt="Download PDF" className="img-pdf"/></a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UnivCarousel;