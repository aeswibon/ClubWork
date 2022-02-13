import React from "react";
// import { useState } from "react";
// import classes from "../Cover.module.css";
import "./header.css"
const Header = () => {
  // States variable to handle the opening and closing of header in mobile view
  // const [isOpen, setOpen] = useState(false); // toggle the header btn in mobile view
  return (
    <>
      {
      
      <nav id="mainNavbar" sticky="true" className="navbar navbar-light navbar-expand-lg py-0 sticky-top align-items-center" data-aos="fade-down" data-aos-duration={2000}>
        <a href="/" className="navbar-brand">
          <img className="d-none d-lg-block ml-3" src="./image/logo.png" alt="acm" width="250px" />
          <img className="d-sm d-lg-none" src="./image/logo.png" alt="acm" width="200px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav">
            <li className="nav-item mx-auto">
              <a href="#home" className="nav-link">Overview</a>
            </li>
            <li className="nav-item mx-auto">
              <a href="#features" className="nav-link">Features</a>
            </li>
            <li className="nav-item  mx-auto">
              <a href="#activities" className="nav-link">Activities</a>
            </li>
            <li className="nav-item mx-auto">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item mx-auto">
            <a className="btn btn1 mx-4 px-4 my-4 my-lg-2" href="true" target="_blank" role="button">Login</a>
          </li>
          <li className="nav-item mx-auto">
            <a className="btn btn2 px-4 my-lg-2" href="true" target="_blank" role="button">Register</a>
          </li>
          </ul>
          
        </div>
      </nav>}
      
    </>
  );
};

export default Header;