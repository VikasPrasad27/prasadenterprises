import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
 function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

return (
    <>
      {/* Desktop Navigation */}
      <nav className={`desktop-nav ${isScrolled ? 'scrolled' : ''}`}>
        <h1 className='flex'>
          <img id="logo" src='https://3.imimg.com/data3/BV/HV/MY-4315808/prasad-enterprises-logo-120x120.jpg' alt="logo" />
          PRASAD ENTERPRISES
        </h1>
        <ul className='flex'>
          <li><Link to='display' smooth={true} offset={-120} duration={500}>HOME</Link> </li>
          <li><Link to='about' smooth={true} offset={-100} duration={500}>ABOUT US</Link></li>
          <li className='fle'>
            <Link to='products' smooth={true} offset={-140} duration={500}>SERVICES</Link>
            <img className='down' src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" alt="dropdown" />
            <ul className='dropdown'>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>SAND FILTER</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>BIOGAS PLANTS</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>CARBON FILTERS</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>STORAGE TANKS</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>EFFLUENT TREATMENT PLANTS</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>WASTEWATER TREATMENT PLANTS</Link></li>
              <li><Link to='products' smooth={true} offset={-140} duration={500}>SEWAGE TREATMENT PLANTS</Link></li>
            </ul>
          </li>
          <li className='fle'>
            <Link to='sitework' smooth={true} offset={-120} duration={500}>SITE WORK</Link>
            <img className='down' src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" alt="dropdown" />
            <ul className='dropdown'>
              <li><Link to='sitework' smooth={true} offset={-140} duration={500}>FABRICATION</Link></li>
              <li><Link to='sitework' smooth={true} offset={-140} duration={500}>EARTHING</Link></li>
              <li><Link to='sitework' smooth={true} offset={-140} duration={500}>PIPING OF PLANTS</Link></li>
              <li><Link to='sitework' smooth={true} offset={-140} duration={500}>COMMISSION WORK</Link></li>
            </ul>
          </li>
          <li><Link to='contacti' className='button' smooth={true} offset={0} duration={500}>CONTACT US</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mobile-nav-header">
          <h1 className='flex'>
            <img id="mobile-logo" src='https://3.imimg.com/data3/BV/HV/MY-4315808/prasad-enterprises-logo-120x120.jpg' alt="logo" />
            PRASAD ENTERPRISES
          </h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src="https://cdn-icons-png.flaticon.com/128/12314/12314153.png" alt="Menu" />
          </button>
        </div>
        {isMenuOpen && (
          <ul className='mobile-menu'>
            <li><Link to='display' smooth={true} offset={-120} duration={500} onClick={toggleMenu}>HOME</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500} onClick={toggleMenu}>ABOUT US</Link></li>
            <li className='mobile-dropdown'>
              <span>SERVICES</span>
              <ul>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>SAND FILTER</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>BIOGAS PLANTS</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>CARBON FILTERS</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>STORAGE TANKS</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>EFFLUENT TREATMENT PLANTS</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>WASTEWATER TREATMENT PLANTS</Link></li>
                <li><Link to='products' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>SEWAGE TREATMENT PLANTS</Link></li>
              </ul>
            </li>
            <li className='mobile-dropdown'>
              <span>SITE WORK</span>
              <ul>
                <li><Link to='sitework' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>FABRICATION</Link></li>
                <li><Link to='sitework' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>EARTHING</Link></li>
                <li><Link to='sitework' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>PIPING OF PLANTS</Link></li>
                <li><Link to='sitework' smooth={true} offset={-140} duration={500} onClick={toggleMenu}>COMMISSION WORK</Link></li>
              </ul>
            </li>
            <li><Link to='contacti' className='button' smooth={true} offset={0} duration={500} onClick={toggleMenu}>CONTACT US</Link></li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
