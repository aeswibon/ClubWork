import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import preloader from "../UI/preloader/preloader";
function Preloader() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id={preloader.preloader}>
      <div className="align-items-center text-center">
      <iframe
        autoPlay
        loop title="compilericon"
        className="d-none d-md-block"
        src="https://embed.lottiefiles.com/animation/38680"
        style={{ height: "550px", width: "550px", position:"fixed",left:"28vw", top:"15vh", pointerEvents:"none"}}
      ></iframe>
       <iframe
        autoPlay
        loop title="compilericon"
        className="d-block d-md-none"
        src="https://embed.lottiefiles.com/animation/38680"
        style={{ height: "350px", width: "350px", position:"fixed",left:"7vw", top:"15vh", pointerEvents:"none"}}
      ></iframe>
      </div>

    </div>
  );
}

export default Preloader;
