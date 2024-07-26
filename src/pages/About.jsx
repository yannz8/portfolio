import React, { useEffect } from "react";
import './About.css'
import ParticlesBackground from '../components/ParticlesBackground'
import pp from '../images/pp.jpg'
import ales from '../images/ales.png'
import mtp from '../images/Mtp.png'
import inti from '../images/inti.png'


function About() {


  return (
    <div className="About">
      <div className="particles">
        <ParticlesBackground />
      </div>
      <h1>About</h1>
      <div className="firstpage">
        <img src={pp} alt="pp" className="img-pp"></img>
        <div className="paragraphe-wrapper">
          <p> Hi, I'm Yann Maheu</p>
          <p> A 26 YO French </p>
          <p> Full stack developper </p>
        </div>
      </div>
      <h1>Studies</h1>
      <div className="secondpage">
        <div className="study">
          <img src={ales} alt="ales" className="img-study"></img>
          <div className="paragraphe-wrapper">
            <p> Hi, I'm Yann Maheu</p>
            <p> A 23 YO French </p>
            <p> Full stack developper </p>
          </div>
        </div>
        <div className="study">
          <img src={mtp} alt="mtp" className="img-study"></img>
          <div className="paragraphe-wrapper">
            <p> Hi, I'm Yann Maheu</p>
            <p> A 23 YO French </p>
            <p> Full stack developper </p>
          </div>
        </div>
        <div className="study">
          <img src={inti} alt="inti" className="img-study"></img>
          <div className="paragraphe-wrapper">
            <p> Hi, I'm Yann Maheu</p>
            <p> A 23 YO French </p>
            <p> Full stack developper </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
