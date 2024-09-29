import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xc3jcbo', 'template_3slw312', form.current, '2n_VWHJjk7WquG3lB')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="main">
      <div className="address">
        <h2 className="cont">CONTACT US</h2><br />
        <h1 className="flex">
          <img className="loc" src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="Location" />LOCATION
        </h1>
        <p className="flexi">Plot No.189, Sector 10, PCNTDA, MIDC, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411026</p><br />
        <h1 className="flex">
          <img className="loci" src="https://cdn-icons-png.flaticon.com/128/15474/15474140.png" alt="Call Us" />CALL US NOW
        </h1>
        <p className="flexi">+91 9422027424</p>
        <p className="flexi">020 287851122</p><br />
        <h1 className="flex">
          <img className="loci" src="https://cdn-icons-png.flaticon.com/128/2972/2972528.png" alt="Opening Hours" /> OPENING HOURS
        </h1>
        <p className="flexi">Monday-Friday: 9:00 AM to 6:00 PM</p>
      </div>
      <div className="contacti">
        <h1 className='heading'>GET IN TOUCH</h1>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <select   id="services" name="services" required>
              <option value="">Your Interest</option>
              <option value="service1">SAND FILTERS</option>
              <option value="service2">BIOGAS PLANTS</option>
              <option value="service3">STORAGE TANKS</option>
              <option value="service4">WASTEWATER TREATMENT PLANTS</option>
              <option value="service5">EFFLUENT TREATMENT PLANTS</option>
            </select>
          </div>
          <div className="form-row">
            <input type="email" id="email" name="email" placeholder="Email Id" required />
            <input type="text" id="mobile" name="mobile" placeholder="Mobile No." required />
          </div>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          <button className='btn' type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120970.29818400792!2d73.7519015!3d18.6495493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80dd9ea61e7%3A0x93c1777d1b1bca2f!2sPrasad%20Enterprises!5e0!3m2!1sen!2sin!4v1721742153433!5m2!1sen!2sin"
          width="300"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
      
    </div>
    
  );
};

export default Footer;


