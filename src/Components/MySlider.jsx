import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MySlider({ images }) {

   {/* const NextArrow = ({ onClick }) => {
        return (
          <div className="slider-arrow next" onClick={onClick}>
           
          </div>
        );
      };
      
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="slider-arrow prev" onClick={onClick}>
          
          </div>
        );
      };
    */}

      
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true,
    }
    return (
        <div className=' slider-container w-[100%]'>
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image}>
                        <img className='cursor-pointer pl-10 p-2 max-w-[500px] object-cover object-center lg:p-5 lg:pl-0 lg:max-w-[900px] ' src={image} alt="Slider Image" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
