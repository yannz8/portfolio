import React, { useEffect } from "react";
import ParticlesBackground from '../components/ParticlesBackground'

import './Project.css'

import BeachildCarousel from "../components/BeachildCarousel";
import EuromovCarousel from "../components/EuromovCarousel";
import UnivCarousel from "../components/UnivCarousel";

//Project-logo
import CA from '../images/CA.png'
import beachild from '../images/beachild.png'
import euromov from '../images/euromov.png'
import IMT from '../images/IMT.png'
import pdf from '../images/pdf.png'

import beachild_pdf from '../docs/rapport_beachild.pdf'
import euromov_pdf from '../docs/rapport_euromov.pdf'

//Project-img

function Project() {


  return (
    <div className="Skills">
      <div className="container">
      <ParticlesBackground/>
      <h1>Project</h1>
      <div className="Project">
        <img src={CA} alt="CA" className="logo-project"></img>
        <h2 className="title-project">Java backend developer on Springboot</h2>
        <h3 className="date-project">2nd January - Today</h3>
        <img src={CA} alt="CA" className="img-project"></img>
        <p>Development of API for electronic banking, implementation of MySQL database, Redis, Topic Kafka.</p>
        <p>High security, quality and performance management.</p>
      </div>
      <div className="Project">
        <img src={beachild} alt="beachild" className="logo-project"></img>
        <h2 className="title-project">Data Analyst in Python for an Hospital</h2>
        <h3 className="date-project">February - August 2022</h3>
        <p>Motion Capture Data Analyst. Development of new analysis parameters in PYTHON.</p>
        <p> Biomechanical study and exploitation of the results.</p>
        <BeachildCarousel/>
        <a href={euromov_pdf} download="euromov_report.pdf"><img src={pdf} alt="Download PDF" className="img-pdf-main"/></a>
      </div>
      <div className="Project">
        <img src={euromov} alt="euromov" className="logo-project"></img>
        <h2 className="title-project">Data Analyst in Python for a Sports Center</h2>
        <h3 className="date-project">May - August 2021</h3>
        <p>Development of tools to analyze the movement of the human body in PYTHON</p>
        <p>Through a biomechanical and machine learning approach.</p>
        <EuromovCarousel/>
        <a href={beachild_pdf} download="beachild_pdf.pdf"><img src={pdf} alt="Download PDF" className="img-pdf-main"/></a>
      </div>
      <div className="Project">
        <img src={IMT} alt="IMT" className="logo-project"></img>
        <h2 className="title-project">Project on cybersecurity in hospitals</h2>
        <h3 className="date-project">January - April 2021</h3>
        <p>Project with a doctoral student on cybersecurity</p>
        <p>Improving cyber resilience in mobile field hospitals: towards an evaluation model.</p>
        <UnivCarousel/>
      </div>
    </div>
    </div>
  );
}

export default Project
