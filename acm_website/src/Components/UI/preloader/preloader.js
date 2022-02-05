import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import preloader from "./preloader.module.css";

function Preloader() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id={preloader.preloader}>
      <div className="align-items-center justify-content-center text-center ">
         <img
          src="./image/acmlogo.png"
          className="m-5 "
          data-aos="zoom-out" data-aos-delay="300" data-aos-duration="2000"
          style={{ height: "20vh",filter:" drop-shadow(5px 5px 5px #ffffff)" }}
          alt="logo-1"
        />

        <h1 className="text-bold text-white home_text  " style={{ textShadow: "1px 1px 3px #000000"}} data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-sine" >
        welcome to  
        </h1><h1 data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-sine"  id={preloader.acm} className="text-bold  home_text  " style={{color : "#276cce", textShadow: "1px 1px 3px #000000"}}>ACM</h1>
      </div>
      
 
    </div>
  );
}

export default Preloader;
