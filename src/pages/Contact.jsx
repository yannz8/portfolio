import React, { useRef, useEffect } from 'react';
import ParticlesBackground from '../components/ParticlesBackground'
import emailjs from '@emailjs/browser';
import './Contact.css'

import img_watshapp from '../images/whatsapp.png';
import outlook from '../images/outlook.png';
import linkedin from '../images/linkedin.png';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_avxyro7', 'template_cos4o4h', form.current, {
        publicKey: 'cEOPL1w_TyURHqLzU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div className="Experience">
      <div className="container_experience">
        <ParticlesBackground />
        <h1>Contact</h1>
        <div className="contact-block">
          <div className="Title">
            <h2>FORM</h2>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="user_email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send</button>
          </form>
        </ div>
        <footer className="footer">
          <div className="footer-content">
            <img src={outlook} alt="Outlook Image" className="footer-image" />
            <p>yann.maheu@hotmail.fr</p>
          </div>
          <div className="footer-content">
            <img src={linkedin} alt="Linkedin Image" className="footer-image" />
            <p>Yann MAHEU</p>
          </div>
          <div className="footer-content">
            <img src={img_watshapp} alt="Whatsapp Image" className="footer-image" />
            <p>+336.42.26.13.63</p>
          </div>
        </footer>
      </ div>
    </ div>
  );
}

export default Contact
