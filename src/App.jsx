import React from "react"
import {Link,Route,Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Display from "./components/Display/Display";
import Products from "./components/Products/Products";
import Sitework from "./components/Sitework/Sitework";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";



function App(){
  
  return (
      <div>
        <Navbar />
        <hr />
         <Display/>
         <About/>
         <Sitework/>
         <Products/>
         <Footer/>
      </div>

  )

  
}

export default App;