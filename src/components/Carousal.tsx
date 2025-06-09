import React from 'react'
import Slider from "react-slick";
import CarousalBox from './CarousalBox';
import { ImageSlide } from '../utils/data';
import { setting2 } from '../utils/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal:React.FC = () => {

  return (
    <div>
        <Slider {...setting2}>
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