import React,{useEffect} from 'react';
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Aos from "aos";
import "aos/dist/aos.css";
import preloader from "./preloader.module.css"
function Preloader() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      function resizeIframe(obj) {
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
      }
  return <div id={preloader.preloader} >

<div className='align-items-center justify-content-center text-center '   >
              
                <img src='https://i.postimg.cc/bvDd48tV/logo-1.png' className='m-5' data-aos="zoom-in-down" style={{ height:"13vh" }}  alt='logo-1'/>
               <div> <iframe src="https://embed.lottiefiles.com/animation/89275"  frameborder="0" title="animatedicons" scrolling="no" onLoad={resizeIframe} style={{pointerEvents:"none"}} > </iframe></div>
                <h1 className='text-bold text-white ' >
                <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={100000}
                      delaySpeed={1000}
                      words={["welcome to ACM "]}
                    />
                  </span>
                </h1>
              </div>



  </div>;
}

export default Preloader;
