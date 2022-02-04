import React from "react";
import Feature from "./UI/features/feature";
import Contact from "./UI/contacts/contact";
import styles from "./Cover.module.css";
// import { useEffect } from "react";
// import particlesJS from "../Components/UI/particles";
// import {Link} from 'react-router-dom'
import Particles from "react-tsparticles";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import GoTop from "./UI/GoTop";

function Cover() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <React.Fragment>
      <Header />
      <GoTop />
      <h1 className="text-center justify-content-center  main-heading fw-bold">
        ACM COVER PAGE
      </h1>
      <div className={styles.particles}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#08a9d1",
              },
              links: {
                color: "#08a9d1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 120,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="p-3 m-3">
        <Feature />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
      {/* <Link to="problem-list">ProblemSet</Link> */}
    </React.Fragment>
  );
}

export default Cover;
