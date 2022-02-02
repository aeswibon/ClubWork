import React,{useEffect} from 'react';
import Card from "./feature_card"


import Aos from "aos";
import "aos/dist/aos.css"


function Feature() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    
  return<>
 
      <h1 className='text-center justify-content-center main-heading fw-bold'> Features</h1>
   <div className='d-flex flex-wrap text-center justify-content-center ' >
     <div data-aos="zoom-in-down" >
     <Card title="CODEPEN"  info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "  /> 
     </div>
     <div data-aos="zoom-in-down" >
     <Card  title="CODEPEN"  info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "  /> 
     </div>
     <div data-aos="zoom-in-down">
     <Card  title="CODEPEN"  info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "  /> 
     </div>
     <div data-aos="zoom-in-down" >
     <Card  title="CODEPEN"   info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis sit impedit ipsum ad quisquam optio beatae molestias, deserunt quidem temporibus quibusdam suscipit delectus maxime qui nulla corporis? Facere ab dignissimos aspernatur aliquam eveniet. "  /> 
     </div>
    </div>
  </>;
}

export default Feature;
