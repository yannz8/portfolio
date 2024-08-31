import React from 'react';
import './Loader.css'; // Import the CSS for the spinner

const Loader = ({ progress }) => {
  return (
    <div id="loading-screen">
      <div className="spinner"></div>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default Loader;