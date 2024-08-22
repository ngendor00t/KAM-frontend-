import React from 'react';
// import './Navbar.css';
import Login from './Loginpage';

function Navbarpage(){
  return(
<nav className="navbar">
<div className="navbar-left">
<img src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg" alt="Company Logo" className="logo" />

     </div>
      <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="Login">Login</a>
      </li>
      <li>
        <a href="/aboutpage">About Us</a>
      </li>
      
    </ul>
    </div>
    </nav>
  )
};

export default Navbarpage;