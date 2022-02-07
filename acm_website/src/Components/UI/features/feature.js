import React, { useEffect } from "react";
import Card from "./feature_card";
import Aos from "aos";
import "aos/dist/aos.css";

function Feature() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ backgroundColor:" #1a5b75",
    borderRadius: "20px",padding:"-1rem",paddingTop:'3rem',paddingBottom:"4rem"}} >
      <h2 className="text-center justify-content-center text-white  main-heading fw-bold"   data-aos="fade-right" id="features" >
        FEATURES
      </h2>
      <div className="container d-flex flex-wrap text-center justify-content-center ">
        <div data-aos="flip-up" data-aos-delay="200" className="m-3">
          <Card
            title="CODEPEN"
            icon="https://embed.lottiefiles.com/animation/16497"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "
          />
        </div>
        <div data-aos="flip-up" data-aos-delay="200"  className="m-3">
          <Card
            title="DISCUSSION FORUM"
            icon="https://embed.lottiefiles.com/animation/90514"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis aliquam"
          />
        </div>
        <div data-aos="flip-up" data-aos-delay="200" className="m-3">
          <Card
            title="INTERVIEW QUESTIONS "
            icon="https://embed.lottiefiles.com/animation/48429" 
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis aliquam"
          />
        </div>
        <div data-aos="flip-up" data-aos-delay="200" className="m-3">
          <Card
            title="CODE COMPILER"
            icon="https://embed.lottiefiles.com/animation/63487"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
