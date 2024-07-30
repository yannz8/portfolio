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
          <div className="study-wrapper">
            <h2>IMT Mines Alès</h2>
            <h3>Robotics engineering degree</h3>
            <h4>2019-2022</h4>
            <p>Following a CPGE (Preparatory Class for Grandes Ecoles), I joined the school des Mines d'Alès. After a general year I specialized in robotics, this included courses in electronics, mechanics and computer science.</p>
          </div>
        </div>
        <div className="study">
          <img src={mtp} alt="mtp" className="img-study"></img>
          <div className="study-wrapper">
            <h2> Faculté Montpellier</h2>
            <h3> Master 2 in Biomechanics </h3>
            <h4> 2022 </h4>
            <p>During my engineering school course I completed a double degree in biomechanics, in order to link my 2 passions, science and sport.</p>
          </div>
        </div>
        <div className="study">
          <img src={inti} alt="inti" className="img-study"></img>
          <div className="study-wrapper">
            <h2> INTI Formation</h2>
            <h3> Web developer training</h3>
            <h4> 2023 </h4>
            <p>In order to improve my experience in IT, I completed full stack developer training. This included extensive learning of Java, Spring framework, mysql database and front-end development.</p>
          </div>
        </div>
      </div>
      <h1>Skills</h1>
    </div>
  );
}

export default About
