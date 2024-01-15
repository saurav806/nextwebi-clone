import React from "react";
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>NextWebi</h1>
      </div>
      <div className="list">
        <ul>
          <li ><a href='#home'>Services</a></li>
          <li ><a href='#home'>Solutions</a></li>
          <li ><a href='#home' >Portfolio</a></li>
          <li ><a href='#home'>Technologies</a></li>
          <li ><a href='#home'>Company</a></li>
          <li ><a href='#home'>Career</a></li>
          <li ><a href='#home'>Contact Us</a></li>
        </ul>
      </div>
      <div className="enquiry">
        <button className="btn">Quick Enquiry</button>
      </div>
    </nav>
  );
}

export default Header;
