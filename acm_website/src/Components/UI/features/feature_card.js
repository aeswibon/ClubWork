import React from "react";
import Tilt from "react-parallax-tilt";
function feature_card(props) {
 
  return (
    <>
      <Tilt
        data-tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.75}
      >
        <div
          className="card m-3 p-3 text text-white rounded bg-primary"
          style={{ width: "18rem"}}
        ><h3 className=""><i className={`${props.icon} text-primary rounded-circle bg-white p-3 m-3 `} > </i> </h3>
          
          <div className="card-body">
             <h4 className="card-title text-white">{props.title}</h4>
            <p className="card-text text-dark text-white">{props.info}</p>
            <a href="/" className="card-link">
              {props.link}
            </a>
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default feature_card;
