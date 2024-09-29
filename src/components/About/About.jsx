import React from 'react';
import './About.css';
import myimg from '../../assets/main.jpg';

function About() {
  return (
    <div className='about'>
      <h1 className='about-title'>ABOUT US</h1>
      <div className="about-content">
        
        <div className="about-image">
          <img  src={myimg} alt="Logo" />
        </div>
        <div className="about-text">
          <div className="about-header">
            <h1>PRASAD ENTERPRISES</h1>
            <p>We deliver innovative, sustainable solutions to environmental challenges.</p>
          </div>
          <div className="about-sections">
            <div className="about-section">
              <h2>About Us</h2>
              <p>Established in 2010, Prasad Enterprises is a leading manufacturer of Waste Water Treatment Plants, Storage Tanks, Sand Filters, and Sewage Treatment Plants.</p>
            </div>
            <div className="about-section">
              <h2>Our Infrastructure</h2>
              <p>Equipped with advanced technology, our vast infrastructure is divided into manufacturing, quality testing, and warehousing departments, ensuring high productivity and quality.</p>
            </div>
            <div className="about-section">
              <h2>Our Team</h2>
              <p>Our skilled professionals, including engineers and quality experts, work in coordination to meet industry needs, staying updated through regular training and seminars.</p>
            </div>
            <div className="about-section">
              <h2>Why Us?</h2>
              <p>We focus on quality compliance, easy payment modes, timely delivery, and innovative designs to provide superior quality products that meet our clients' requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
