import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
  'https://i.ytimg.com/an_webp/749ta0nvj8s/mqdefault_6s.webp?du=3000&sqp=CJTW-bQG&rs=AOn4CLA0aYCYgp8SQivpJ8vbLr7a8b-qaA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT3WLE-u2zDDNcMBUDd37ImgrVUX6X7WKIw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT3WLE-u2zDDNcMBUDd37ImgrVUX6X7WKIw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT3WLE-u2zDDNcMBUDd37ImgrVUX6X7WKIw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT3WLE-u2zDDNcMBUDd37ImgrVUX6X7WKIw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT3WLE-u2zDDNcMBUDd37ImgrVUX6X7WKIw&s'
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
        <h1 className='flex font-semibold bg-yellow-400'>GALLERY</h1>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;