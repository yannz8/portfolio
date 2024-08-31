import React, { useState, useEffect } from "react";

import RouterWrapper from './RouterWrapper';
import './App.css'



function App() {

  useEffect(() => {

    //Cursor
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    //pb à régler
    const moveCursor = (e) => {
      //Cursor
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot && cursorOutline) {

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      };
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const [showRotateMessage, setShowRotateMessage] = useState(false);

  console.log(navigator.userAgent);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isPortrait = window.innerHeight > window.innerWidth;

      if (isMobile && isPortrait) {
        alert('Please rotate your device to landscape mode for the best experience.');
      }

      console.log(isMobile)
    };

    // Initial check
    checkOrientation();

    // Add event listener to detect orientation changes
    window.addEventListener('resize', checkOrientation);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (

    <div className="All">
      <div className="cursor-dot" data-cursor-dot>
      </div>
      <div className="cursor-outline" data-cursor-outline>
      </div>
      <RouterWrapper />
    </div>

  );
}

export default App
