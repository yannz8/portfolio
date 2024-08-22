// RouterWrapper.jsx
import React from 'react';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './RouterWrapper.css'
import HomeButton from "./components/HomeButton";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';

const RouterWrapper = () => {

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