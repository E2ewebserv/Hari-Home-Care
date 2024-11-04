import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import heroImage from '../images/washerhero.jpg'; 
export default function AcService() {
  return (
    <>
    <div><Navbar/></div>
    <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>AC Service Center</h1>
            <p>Your Trusted Solution for All Appliance Repairs</p>
            <a href="#contact" className="hero-btn">Request a Call</a>
          </div>
        </section>
    <div><Footer/></div>
    </>
  )
}
