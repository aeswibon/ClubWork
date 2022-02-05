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
          src="https://i.postimg.cc/bvDd48tV/logo-1.png"
          className="m-5"
          data-aos="zoom-out-up" data-aos-delay="300"
          style={{ height: "13vh" }}
          alt="logo-1"
        />

        <h1 className="text-bold text-white home_text" data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-sine" >
        welcome to  
        </h1><h1 data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-sine"  className="text-bold  home_text" style={{color : "blue"}}>ACM</h1>
      </div>
      
 
    </div>
  );
}

export default Preloader;
