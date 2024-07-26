// RouterWrapper.jsx
import React from 'react';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Home from './pages/Home';
import './RouterWrapper.css'
import HomeButton from "./components/HomeButton";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';

const RouterWrapper = () => {

  return (
    <BrowserRouter>
      <header className="header">
        <nav>
          <Link to="/about" className="rolling-text">About</Link>
        </nav>
        <nav>
          <Link to="/skills" className="rolling-text">Skills</Link>
        </nav>
        <nav>
          <Link to="/experience" className="rolling-text">Exp</Link>
        </nav>
      </header>
      <HomeButton />
      <TransitionGroup>
        <CSSTransition key="key" classNames="fade" timeout={3000}>
        <div className="transition-wrapper">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
    </BrowserRouter >
  );
};

export default RouterWrapper;