import React from "react";
import { useState } from "react";
// import classes from "../Cover.module.css";
import "./header.css"
const Header = () => {
  // States variable to handle the opening and closing of header in mobile view
  const [isOpen, setOpen] = useState(false); // toggle the header btn in mobile view
  return (
    <>
      {/* <section className={classes["navbar-bg"]}>
        <nav className={`${classes["navbar"]} navbar-expand-lg navbar-light bg-light fs-sm-6 fs-5`}>
          <div className="container d-flex position-relative">
            <a className={classes["navbar-brand"]} href="#home">
              <img
                src="./image/logo.png"
                alt=""
                width="250"
                height="100"
                className={`d-inline-block align-text-top img-fluid ${isOpen ? "d-none" : "d-block" }`}
              />
            </a>
            <button
              className="navbar-toggler position-absolute top-0 end-0 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home" onClick={() => setOpen(false)}
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features" onClick={() => setOpen(false)}>
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#activities" onClick={() => setOpen(false)}>
                    Activities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex fs-sm-6 fs-5 mb-4 mb-lg-0">
                <button className={`btn ${classes["btn-style"]}`} type="submit" onClick={() => setOpen(false)}>
                  Login
                </button>
                <button
                  className={`btn ${classes["btn-style"]} ${classes["btn-style-border"]}`}
                  type="submit" onClick={() => setOpen(false)}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section> */
      
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