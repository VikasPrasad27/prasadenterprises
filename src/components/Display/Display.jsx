import React, { useState } from 'react';
import './Display.css';
import { Link } from 'react-scroll';

function Display() {


  return (
    <div className='contact'>
        <div className='display'>
      <div className='display-text'>
        <h1 className='h1'>QUALITY IRON & STEEL FABRICATION WORKS.</h1>
        <h2 className='h2'>SINCE 2010</h2>
        <br />
        <button  id='butt'>
          <Link to='contact' smooth={true} offset={+2700} duration={500}>GET INSTANT QUOTE</Link>
        </button>
        {/* {showForm && <QuoteForm/>} */}
      </div>
    </div>
    </div>
    
  )
}

export default Display;

