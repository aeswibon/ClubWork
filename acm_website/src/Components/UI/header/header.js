import React from "react";
import "./header.css"
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../../app/userReducer";
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    window.location.href = "/home";
  };

  return (
    <nav id="mainNavbar" sticky="true" className="navbar navbar-light navbar-expand-lg py-0 sticky-top align-items-center pe-5" data-aos="fade-down" data-aos-duration={2000}>
      <a href="/" className="navbar-brand">
        <img className="d-none d-lg-block ml-3" src="./image/logo.png" alt="acm" width="250px" />
        <img className="d-sm d-lg-none" src="./image/logo.png" alt="acm" width="200px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navLinks">
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
          {!user ? (
            <>
              <li className="nav-item mx-auto">
                <a className="btn btn1 mx-4 px-4 my-4 my-lg-2" href="/login" target="_blank" role="button">Login</a>
              </li>
              <li className="nav-item mx-auto">
                <a className="btn btn2 px-4 my-lg-2" href="/register" target="_blank" role="button">Register</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item  mx-auto">
                <a href="/codepen" className="nav-link">Codepen</a>
              </li>
              <li className="nav-item  mx-auto">
                <a href="/forum" className="nav-link">Discussion Forum</a>
              </li>
              <li className="nav-item  mx-auto">
                <a href="/problemset" className="nav-link">Problemset</a>
              </li>
              <li className="nav-item  mx-auto">
                <a href="/complier" className="nav-link">IDE</a>
              </li>
              <li class="nav-item dropdown mx-auto">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#home" role="button" aria-expanded="false">Account</a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" onClick={logOut}>Logout</button></li>
                </ul>
              </li>
            </>
          )}
        </ul>

      </div>
    </nav >
  );
};

export default Header;