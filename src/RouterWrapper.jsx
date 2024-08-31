// RouterWrapper.jsx
import React from 'react';

import './RouterWrapper.css'

import Loader from './pages/Loader';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Home from './pages/Home';

import HomeButton from "./components/HomeButton";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';


const RouterWrapper = () => {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  // Simulate loading progress
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false); // Stop loading when progress reaches 100%
            return 100;
          }
          return prev + 10; // Increment progress (adjust as needed)
        });
      }, 300); // Adjust interval and increment time
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      setShowWelcome(true);
    }
  }, [loading]);

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };


  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 12000); // Change this as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter basename={"/portfolio/"}>
      <header className="header">
        <nav>
          <Link to="/about" className="rolling-text">About</Link>
        </nav>
        <nav>
          <Link to="/project" className="rolling-text">Project</Link>
        </nav>
        <nav>
          <Link to="/contact" className="rolling-text">Contact</Link>
        </nav>
      </header>
      <HomeButton />

      {loading && <Loader progress={progress}/>}

      {!loading && showWelcome && <Welcome onClose={handleWelcomeClose} />}

      <TransitionGroup>
        <CSSTransition key="key" classNames="fade" timeout={3000}>
          <div className="transition-wrapper">
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter >
  );
};

export default RouterWrapper;