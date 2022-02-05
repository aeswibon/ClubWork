import React, { useEffect } from "react";
import Aos from "aos";
import "./landing.css";
import "aos/dist/aos.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section id="home">
        <div
          className="icons d-none d-lg-block"
          data-aos="fade-right"
          data-aos-duration={2000}
          data-aos-delay={3000}
        >
          <ul>
            <li>
              <a href>
                <i className="fab fa-facebook" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/acm-student-chapter-vnit/" target="_blank">
                <i className="fab fa-linkedin-in" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/acm_vnit/" target="_blank">
                <i className="fab fa-instagram" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fab fa-youtube" />
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="row align-items-center container">
          <div
            className="col-lg-6 order-2 order-lg-1 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={1000}
          >
            {/* <div className="home_text">Welcome to ACM, VNIT Nagpur</div> */}
            <p class="glitch home_text">
              <span aria-hidden="true">Welcome to ACM, VNIT Nagpur</span>
              Welcome to ACM, VNIT Nagpur
              <span aria-hidden="true">Welcome to ACM, VNIT Nagpur</span>
            </p>
            <div className="desc">
              The Association for Computing Machinery is a US-based
              international learned society for computing. It was founded in
              1947 and is the world's largest scientific and educational
              computing society. The ACM is a non-profit professional membership
              group, claiming nearly 100,000 student and professional
            </div>
            <div className="mt-5 desc">Scroll down for more!!</div>
          </div>
          <div
            className="col-lg-5 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={2000}
            data-aos-duration={2000}
          >
            <Player
              autoplay
              loop
              className="d-none d-lg-block"
              src="https://assets9.lottiefiles.com/packages/lf20_vnikrcia.json"
              style={{ height: "550px", width: "550px", marginTop: "-40px" }}
            ></Player>
            <div className="text-center ">
              <Player
                autoplay
                loop
                className="d-block d-lg-none"
                src="https://assets9.lottiefiles.com/packages/lf20_vnikrcia.json"
                style={{ height: "100%", width: "100%" }}
              ></Player>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
