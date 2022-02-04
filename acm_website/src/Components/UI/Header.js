import React from "react";
import { useState } from "react";
import classes from "../Cover.module.css";

const Header = () => {
  // States variable to handle the opening and closing of header in mobile view
  const [isOpen, setOpen] = useState(false); // toggle the header btn in mobile view
  return (
    <>
      <section className={classes["navbar-bg"]}>
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
      </section>
    </>
  );
};

export default Header;