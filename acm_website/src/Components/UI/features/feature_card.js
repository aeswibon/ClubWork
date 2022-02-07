import React,{useEffect} from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

function Feature_card(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Tilt
        data-tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.05}
        gyroscope={true}
        glareBorderRadius={10}
      >
        <div
          className="card  p-3 text  rounded "
          style=
        {{ width: "17rem", 
           background:" #AEB8C4"
        }}
         
        ><iframe src={`${props.icon}`}  frameBorder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none"}} > </iframe>
          
          <div className="card-body">
             <h4 className="card-title text-black" data-aos="fade-up">{props.title}</h4>
            <p className="card-text text-dark text-black ">{props.info}</p>

          </div>
        </div>
      </Tilt>
    </>
  );
}

export default Feature_card;
