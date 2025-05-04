import React from 'react'
import Slider from "react-slick";
import CarousalBox from './CarousalBox';
import { ImageSlide } from '../utils/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal:React.FC = () => {
    const settings = {
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
    <div>
        <Slider {...settings}>
        {
            ImageSlide.map(({id,image})=>(
                <CarousalBox key={id} Image={image}/>
            ))
        }
        </Slider>
    </div>
  )
}

export default Carousal