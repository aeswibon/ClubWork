import React,{useEffect} from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
function Feature_card(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
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
          className="card  p-3 text text-white rounded bg-primary"
          style={{ width: "18rem"}}
         
        ><iframe src={`${props.icon}`}  frameborder="0" title="animatedicons" scrolling="no" onLoad={resizeIframe} style={{pointerEvents:"none"}} > </iframe>
          
          <div className="card-body">
             <h4 className="card-title text-white" data-aos="fade-up">{props.title}</h4>
            <p className="card-text text-dark text-white ">{props.info}</p>

          </div>
        </div>
      </Tilt>
    </>
  );
}

export default Feature_card;
