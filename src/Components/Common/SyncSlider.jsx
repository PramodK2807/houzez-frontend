import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const SyncSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        <div className="slider-img">
          <img
            src="/images/single-property-01.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-02.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-06.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-01.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-02.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-06.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
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
        <div className="slider-img">
          <img
            src="/images/single-property-01.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-02.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-06.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-01.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-02.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
        <div className="slider-img">
          <img
            src="/images/single-property-06.jpg"
            className="w-100"
            // height={200}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SyncSlider;
