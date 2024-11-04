import React from 'react'
import Navbar from '../Components/Navbar';
import heroImage from '../images/washerhero.jpg'; 
import Footer from '../Components/Footer';
export default function FridgeService() {
  return (
    <>
    <div><Navbar/></div>
    <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>Fridge Service Center</h1>
            <p>Your Trusted Solution for All Appliance Repairs</p>
            <a href="#contact" className="hero-btn">Request a Call</a>
          </div>
        </section>
    <div><Footer/></div>
    </>
  )
}
