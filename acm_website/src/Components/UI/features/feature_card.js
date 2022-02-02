import React from 'react';
import Tilt from 'react-parallax-tilt';

function feature_card(props) {
  return <> 
  <Tilt data-tilt perspective={500}
    glareEnable={true} 
    glareMaxOpacity={0.75} 
     >
<div  className="card m-3 text text-white rounded"  style={{width: "18rem" ,background: "#189AB4"}}>
  <div className="card-body">
 
    <h5 className="card-title text-white"  >{props.title}</h5>
    <p className="card-text text-dark text-white"  >{props.info}</p>
    <a href="/" className="card-link">{props.link}</a>
   
  </div>
</div>
</Tilt>
  </>;
}

export default feature_card;
