import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import LoginBox from "./Login";
import RegisterBox from "./Register";
import Logincss from "./login.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "aos/dist/aos.css";
import Aos from "aos";
const LoginPage = () => {
  const [loginMode, setLoginMode] = useState(false);
  const switchMode = () => {
    setLoginMode(!loginMode);
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div >
    
      <a
        href="/" data-aos="fade-right"
        data-aos-duration={2000}
        data-aos-delay={3000}
        className="btn btn-outline-primary rounded-circle "
        style={{ marginLeft: "2rem", marginTop: "1rem" }}
      >
        <ArrowBackIcon />
      </a>
      <div className=" d-none d-sm-block" ><br /></div>

      <div className={Logincss.parent}>
        <Grid
          id={Logincss.children}
          className="my-3"
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          height="50%"
          data-aos="fade-right"
        data-aos-duration={2000}
        data-aos-delay={500}
        >
          <Grid item xs={12} md={6} lg={6}>
            {!loginMode ? (
              <LoginBox register={switchMode} />
            ) : (
              <RegisterBox login={switchMode}></RegisterBox>
            )}
          </Grid>
        </Grid>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fixed-bottom "
        style={{ zIndex: "-1", filter: "drop-shadow(5px 5px 5px #222)" }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00468b"
          fill-opacity="1"  data-aos="fade-up"  data-aos-duration={3000}
          data-aos-delay={2000}
          d="M0,160L0,288L40,288L40,128L80,128L80,160L120,160L120,32L160,32L160,288L200,288L200,256L240,256L240,32L280,32L280,128L320,128L320,32L360,32L360,128L400,128L400,32L440,32L440,32L480,32L480,32L520,32L520,96L560,96L560,64L600,64L600,320L640,320L640,128L680,128L680,32L720,32L720,96L760,96L760,224L800,224L800,64L840,64L840,96L880,96L880,192L920,192L920,64L960,64L960,160L1000,160L1000,288L1040,288L1040,224L1080,224L1080,32L1120,32L1120,160L1160,160L1160,160L1200,160L1200,64L1240,64L1240,128L1280,128L1280,224L1320,224L1320,224L1360,224L1360,320L1400,320L1400,160L1440,160L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default LoginPage;
