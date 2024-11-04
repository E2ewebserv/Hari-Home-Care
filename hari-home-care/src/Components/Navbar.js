import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



export default function Navbar() {
  return (
    <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <div className='container-fluid'>
    <Link className='navbar-brand' to='/'>Sri Hari Home Care</Link>
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarSupportedContent'  // Updated here with #
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav w-100 justify-content-center mb-2 mb-lg-0'>
        <li className='nav-item'>
          <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/About'>About</Link>
        </li>
        <li className='nav-item dropdown'>
          <Link
            className='nav-link dropdown-toggle'
            to='/'
            id='navbarDropdown'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Services
          </Link>
          <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li><Link className='dropdown-item' to='/WashingMachine'>Washing Machine</Link></li>
            <hr></hr>
            <li><Link className='dropdown-item' to='/FridgeService'>Fridge</Link></li>
            <hr></hr>
            <li><Link className='dropdown-item' to='/AcService'>AC</Link></li>
          </ul>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  );
}
