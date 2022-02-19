import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

import ph1 from "../images/1.jpeg";
import ph2 from "../images/2.jpeg";
import ph3 from "../images/3.jpeg";
import ph4 from "../images/4.jpeg";


const ImgSlider = () => {
    const slides = [
        {
            id:1,
            photo: ph1
        },
        {
            id:2,
            photo: ph2
        },
        {
            id:3,
            photo: ph3
        },
        {
            id:4,
            photo: ph4
        }
    ];

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        
    };

    return (
        <div className=" bg-[#151515] block">
            <div data-aos="fade-up" className="text-center pt-36 pb-20">
                <h1 className="text-3xl lg:text-6xl font-medium text-center title-font text-[#ff8605]">
                    Glimpses of NEO
                </h1>
            </div>

            <div data-aos="fade-up" className="">
                <Slider {...settings} className="">
                    {slides.map((dt) => {
                             return (
                                     <div key={dt.id} className="rounded-xl  px-5">
                                        <Image src={dt.photo} width={500} height={300} layout="responsive" alt={dt.id} className="rounded-lg" />
                                     </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default ImgSlider;