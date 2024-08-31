// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './CACarousel.css'; // Ensure you create this CSS file for custom styling

// Import your images
import img1 from '../images/card_CA.png';
import img2 from '../images/CA_1.png';
import img3 from '../images/CA_2.png';
import img4 from '../images/CA_3.png';
import img5 from '../images/stat_beachild.png';

const CACarousel = () => {
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
      caption: 'Work on a team developing a seamless user journey for credit card application, enhancing ease and efficiency for customers.'
    },
    {
      photo: img2,
      caption: 'Manage the backend of the site, connecting to ELK and MySQL databases via JPA Hibernate, handling Redis caching and Kafka events, using Java and the Spring Boot framework for development'
    },
    {
      photo: img3,
      caption: 'For CI/CD, we use Jenkins for automation, XLRelease for release management, GitLab for version control and issue tracking, and Kubernetes for container orchestration and deployment.'
    },
    {
      photo: img4,
      caption: 'Testing is a priority with JUnit and Postman. Security is managed with Spring Security, and we use Spring Batch for processing. Agile methodology is implemented with Jira for project management.'
    }
  ];

  return (
    <div className="ca-carousel">
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



export default CACarousel;