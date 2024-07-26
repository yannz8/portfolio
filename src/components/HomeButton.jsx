// src/components/HomeButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home_icon.png'; // Assurez-vous que le chemin est correct
import './HomeButton.css'; // Importez les styles

const HomeButton = () => {
  return (
    <Link to="/" className="home-button">
      <img src={homeIcon} alt="Home" className="home-icon" />
    </Link>
  );
};

export default HomeButton;