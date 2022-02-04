import React from "react";
import classes from '../Cover.module.css';
const Footer = () => {
  return (
    <footer className={`container-fluid ${classes["footer_color"]}`} id="footer">
      <div className="row align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-lg-3 text-center py-md-5 py-2">
          <img src="image/logo.png" alt="" width="280px" height="90px" />
          <br />
          <span><a href="https://m.facebook.com/vnitecell/" target="_blank" rel="noreferrer"><i className={`fab fa-facebook fa-2x ${classes["fb"]}`}></i></a></span>
          <span><a href="https://twitter.com/ecell_vnit" target="_blank" rel="noreferrer"><i className={`fab fa-twitter-square fa-2x ${classes["twitter"]}`}></i></a></span>
          <span><a href="https://www.instagram.com/ecellvnit/" target="_blank" rel="noreferrer"><i className={`fab fa-instagram fa-2x ${classes["insta"]}`}></i></a></span>
          <span><a href=" https://www.linkedin.com/company/6615520/" target="_blank" rel="noreferrer"><i className={`fab fa-linkedin fa-2x ${classes["linkedin"]}`}></i></a></span>
          <span><a href=" https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ" target="_blank" rel="noreferrer"><i className={`fab fa-youtube fa-2x ${classes["youtube"]}`}></i></a></span>
        </div>
        <div className={`col-md-3 col-lg-4 text-primary text-center ${classes["foot1"]} mt-md-3`}>
          <p>For Association Opportunities and Queries Contact: <br /><a className={classes["foot"]} href="mailto:neo@ecellvnit.org">acm@vnit.org</a>
            <br />
            <a className={classes["foot1"]} href="mailto:neo.pr.ecellvnit@gmail.com">asd@gmail.com</a></p>
        </div>
        <div className={`col-md-3 col-lg-3 text-primary text-center pb-2 ${classes["foot1"]}`}>All rights reserved <br /> &copy;<a className={classes[".foot"]} href="https://www.ecellvnit.org/" target="_blank" rel="noreferrer">ACM-VNIT</a></div>
      </div>
    </footer>
   );
};

export default Footer;