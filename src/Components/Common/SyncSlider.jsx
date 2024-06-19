import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

const SyncSlider = ({ property_image }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  console.log(property_image);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        {property_image &&
          property_image.length > 0 &&
          property_image.map((image, index) => (
            <>
              <div className="slider-img" key={index}>
                <img
                  src={image}
                  className="w-100 object-fit-fill rounded"
                  height={400}
                  alt=""
                  loading="lazy"
                />
              </div>
            </>
          ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={true}
        className="custom_slick"
      >
        {property_image &&
          property_image.length > 0 &&
          property_image.map((image, index) => (
            <>
              <div className="slider-img" key={index}>
                <img
                  src={image}
                  className="w-100 object-fit-fill rounded"
                  height={150}
                  alt=""
                  loading="lazy"
                />
              </div>
            </>
          ))}
      </Slider>
    </div>
  );
};

export default SyncSlider;
