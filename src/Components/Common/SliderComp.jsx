import React from "react";
import CommonCard from "./CommonCard";
import Slider from "react-slick";

const SliderComp = ({allProperties}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad: "ondemand",
    cssEase: "linear",
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(allProperties)

  return (
    <div className="card_container py-5">
      <Slider {...settings}>
        <CommonCard title={"Room 1"} />
        <CommonCard title={"Room 2"} />
        <CommonCard title={"Room 33"} />
        <CommonCard title={"Room 15"} />
      </Slider>
    </div>
  );
};

export default SliderComp;
