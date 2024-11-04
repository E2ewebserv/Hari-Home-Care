import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';
import heroImage from '../images/washerhero.jpg'; // Adjust path as necessary
import Washergal1 from '../images/washergal1.webp'; // Adjust path as necessary
import Fridgegal1 from '../images/fridgegal1.jpg'; // Adjust path as necessary
import ACgal1 from '../images/acgal1.jpg'; // Adjust path as necessary

export default function Home() {
  return (
    <div>
       <div><Navbar/></div>
      <div>
        <section id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>Home Appliance Service Center</h1>
            <p>Your Trusted Solution for All Appliance Repairs</p>
            <a href="#contact" className="hero-btn">Request a Call</a>
          </div>
        </section>
       
      <section id="About">
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
      <h2>About</h2>
      <p>Welcome to Hari Home Care! With over six years of dedicated service in the industry, we pride ourselves on being a trusted partner for all your home appliance needs. Our specialized services include washing machine, air conditioner, and refrigerator repairs, ensuring that your essential appliances function optimally.

At Hari Home Care, we believe in the power of transparency. We understand that trust is the foundation of our relationship with our customers, which is why we keep you informed every step of the way. Our skilled technicians are committed to providing high-quality service while being upfront about the costs and processes involved in your appliance repairs.

Customer satisfaction is our top priority. We strive to deliver timely and reliable service, making sure you can count on us when you need assistance the most. Whether it’s a quick fix or a more complex repair, our team is here to help.

Thank you for choosing Hari Home Care, where quality service and customer trust come first!</p>

        </div>
      </div>
    </div>

      </section>


      <section id="gallery" className="container my-5">
        {/* Row 1 */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src={Washergal1} alt="Gallery Image 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h3>Washing Machine Service by Hari Home Care</h3>
            <p>At Hari Home Care, we specialize in reliable washing machine repair and maintenance to keep your appliance running smoothly. Our skilled technicians are experienced in handling all brands and types of washing machines, from front-load to top-load models. We use only genuine parts for repairs, ensuring long-lasting performance and efficiency. With over six years of trusted service, Hari Home Care is committed to transparency in pricing and process, providing peace of mind to every customer. Our goal is to deliver quick, quality service that you can count on, helping you get back to your routine without delay.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row align-items-center mb-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={Fridgegal1} alt="Gallery Image 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h3>Fridge Service by Hari Home Care</h3>
            <p>Hari Home Care offers professional fridge repair and maintenance services, ensuring your appliance stays in top working condition. Our team of experienced technicians is trained to handle all types of refrigerators, from single-door to double-door and multi-door models, across various brands. With a commitment to transparency and trust built over six years, Hari Home Care provides accurate diagnostics, quality repairs, and genuine spare parts to extend the life of your fridge. We focus on timely, effective service to help prevent food spoilage and keep your refrigerator running smoothly year-round.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src={ACgal1} alt="Gallery Image 3" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h3>AC Service by Hari Home Care</h3>
            <p>Hari Home Care provides expert air conditioner repair and maintenance services to keep your home cool and comfortable. Our skilled technicians are equipped to service all AC types—split, window, and portable models—across various brands. With six years of trusted experience, Hari Home Care prioritizes transparency, offering clear pricing and reliable solutions for all cooling issues. We use genuine parts and the latest tools to ensure efficient repairs, enhancing your AC’s performance and energy efficiency. Count on us for fast, dependable service to keep your air conditioner running smoothly, especially during peak seasons.</p>
          </div>
        </div>
      </section>


      </div>
      <div><Footer/></div>
    </div>
  );
}
