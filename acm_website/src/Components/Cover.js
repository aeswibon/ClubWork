import React, { useEffect, useState } from "react";
import Feature from "./UI/features/feature";
import Contact from "./UI/contacts/contact";
// import styles from "./Cover.module.css";

// import { useEffect } from "react";
import Landing from "./UI/landing/landing";
import Activities from "./UI/activities/activities";
import Timeline from "./UI/timeline/timeline";
// import particlesJS from "../Components/UI/particles";
// import {Link} from 'react-router-dom'
// import Particles from "react-tsparticles";
import Footer from "./UI/Footer";
import Header from "./UI/header/header";
import GoTop from "./UI/GoTop";
import Preloader from "./UI/preloader/preloader";

function Cover() {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (<>
  {loading ? (
  <>
  <Preloader/>
  </>
  ):(<>
    <React.Fragment>
      <Header />
      <GoTop />

      <div>
        <div>
          <Landing />
        </div>
        <div>
          <Activities />
        </div>
        <div className="p-3 m-3">
          <Timeline />
        </div>
        <div className="p-3 m-3">
          <Feature />
        </div>
        <div>
          <Contact />
        </div>

        {/* <Link to="problem-list">ProblemSet</Link> */}
      </div>
      <Footer />
    </React.Fragment>
  </>
  )}
  </>);
}

export default Cover;
