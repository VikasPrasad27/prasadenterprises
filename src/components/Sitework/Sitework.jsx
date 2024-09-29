import React from 'react'
import './Sitework.css'
function Sitework() {
   const data=[
    {image:'https://www.sunriseequipments.com/images/Fabrication.png', title:'FABRICATION ',},
    {image:'https://www.sunriseequipments.com/images/Rigging-Work.png', title:'EARTHING'},
    {image:'https://www.sunriseequipments.com/images/Piping-of-Plants.png', title:'PIPING OF PLANTS'},
    {image:'https://www.sunriseequipments.com/images/Erection&Commissioning.png', title:'COMMISSON WORK'}
   ]

  return (
    <div className='sitework'>
    <div className='work'>
      <h1 className='name'>SITE WORK</h1>
      <div className='site'>
      {data.map((elem,index)=>(
        <div key={index} className='work-item'>
          <img className='img' src={elem.image} alt={elem.title}/>
          <h2 className='intext'>{elem.title}</h2>
        </div>
      ))}
      </div>
      
    </div>
    </div>
  )
}

export default Sitework
