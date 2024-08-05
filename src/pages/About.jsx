import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import Globe from "react-globe.gl";
import './About.css'
import ParticlesBackground from '../components/ParticlesBackground'
import FranceCarousel from "../components/FranceCarousel";
import SouthAmericaCarousel from "../components/SouthAmericaCarousel";
import pp from '../images/pp.jpg'
import ales from '../images/ales.png'
import mtp from '../images/Mtp.png'
import inti from '../images/inti.png'
import devops from '../images/devops.jpeg'


function About() {

  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Java", "JavaScript", "Python", "HTML", "CSS",
      "MySQL", "Redis", "Kafka", "ELK",
      "SpringBoot", "Kubernetes", "Gitlab",
      "Jenkins", "XlRelease"
    ];
    const options = {
      radius: 400,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    };

    // Initialize TagCloud
    const tagCloud = TagCloud(container, texts, options);

    // Cleanup function to remove previous instances
    return () => {
      if (tagCloud) {
        tagCloud.destroy(); // Assuming TagCloud library has a destroy method
      }
    };
  }, []);

  const markers = [
    { lat: 48.8566, lng: 2.3522, size: 0.5, color: "red", label: "Paris, France" }, // Paris, France
    { lat: 4.7110, lng: -74.0721, size: 0.5, color: "blue", label: "Bogotá, Colombia" }, // Bogotá, Colombia
    { lat: 41.3851, lng: 2.1734, size: 0.5, color: "yellow", label: "Barcelona, Spain" }, // Barcelona, Spain
    { lat: -16.5000, lng: -68.1500, size: 0.5, color: "green", label: "La Paz, Bolivia" }, // La Paz, Bolivia
    { lat: -34.6037, lng: -58.3816, size: 0.5, color: "orange", label: "Buenos Aires, Argentina" }, // Buenos Aires, Argentina
    { lat: -22.9068, lng: -43.1729, size: 0.5, color: "purple", label: "Rio de Janeiro, Brazil" }, // Rio de Janeiro, Brazil
    { lat: -17.6509, lng: -149.4260, size: 0.5, color: "cyan", label: "Tahiti, French Polynesia" }, // Tahiti, French Polynesia
    { lat: 51.5074, lng: -0.1278, size: 0.5, color: "magenta", label: "London, England" }, // London, England
    { lat: 41.9028, lng: 12.4964, size: 0.5, color: "lime", label: "Rome, Italy" }, // Rome, Italy
    { lat: 47.7485, lng: -3.3666, size: 0.5, color: "white", label: "Lorient, France" } // Lorient, France
  ];


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
      <div className="thirdpage">
        <div className="tagcloud"></div>
        <div className="skillsParagraph">
          <p> Threw my experiences I've learnt a lot of languages and tools to build a website</p>
          <p> Whatch above my DevOps diagram with the tools that I mastered</p>
          <img src={devops} alt="devops" className="img-devops"></img>
        </div>
      </div>
      <h1>More</h1>
      <div className="fourthpage">
        <div className="Sport">
          <h2>SPORT</h2>
        </div>
        <div className="Travel">
          <h2>TRAVEL</h2>
          <Globe
            width={800}
            height={800}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundColor="rgba(0, 0, 0, 0)"
            pointsData={markers}
            pointLat={d => d.lat}
            pointLng={d => d.lng}
            pointAltitude={d => d.size * 0.1}
            pointColor={d => d.color}
            pointLabel={d => d.label}
          />
          <div className="France">
            <h3>France</h3>
            <FranceCarousel />
          </div>
          <div className="SouthAmerica">
            <h3>South America</h3>
            <SouthAmericaCarousel />
          </div>
        </div>
        <div className="Other">
          <h2>OTHER</h2>
        </div>
      </div>
    </div>
  );
}

export default About
