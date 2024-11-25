import React from 'react';
import "../Header/Header.css";
import amazon_logo from "../../assets/amazon-logo.png";
import { Link } from 'react-router-dom'; // Ensure this import is correct

function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={amazon_logo} alt="Amazon Logo" />
      </div>
      
      <div className="searchbar">
        <input type="text" placeholder="Search..." />
        <Link to="/search">
          <button className="searchbtn">Search</button>
        </Link>
      </div>
      
      <div className="navbutton">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/register">
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
