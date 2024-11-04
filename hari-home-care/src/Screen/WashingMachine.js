import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import heroImage from '../images/washerhero.jpg'; 
export default function WashingMachine() {
  return (
    <>
    <div><Navbar/></div>
    <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>Washing Machine Service Center</h1>
            <p>Your Trusted Solution for All Appliance Repairs</p>
            <a href="#contact" className="hero-btn">Request a Call</a>
          </div>
        </section>
        
        <section id="about"> 

        <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
          <h2>About</h2>
          <p>We Have Best Home Appliance Service Center. We Provide Service For Washing Machine, Fridge Service, Ac. We Give Warranty & Guarantee For All Service And Spares.</p>
        </div>
      </div>
        </div>
        
        </section>
    <div><Footer/></div>
    </>
  )
}
