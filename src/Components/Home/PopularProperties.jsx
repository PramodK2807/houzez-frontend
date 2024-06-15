import React, { useEffect, useState } from "react";
import CommonHeadingSection from "../Common/CommonHeadingSection";
import SliderComp from "../Common/SliderComp";
import { AllProperties } from "../../ApiServices/dashHttpServices";
import Slider from "react-slick";
import CommonCard from "../Common/CommonCard";

const PopularProperties = () => {
  const [allProperties, setAllProperties] = useState([]);
  useEffect(() => {
    getAllProperty();
  }, []);

  const getAllProperty = async () => {
    try {
      const { data } = await AllProperties();
      console.log(data?.data);
      if (data && !data?.error) {
        setAllProperties(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <div className="bg-light">
      <div className="container">
        <CommonHeadingSection
          title={"All Properties"}
          title2={"Your Ultimate Property Resource"}
          description={
            "Explore a complete guide to all property types, featuring essential insights, market trends, and expert advice for every real estate need."
          }
        />
        <div className="card_container py-5">
          <Slider {...settings}>
            {allProperties &&
              allProperties?.map((property) => (
                <>
                  <CommonCard property={property} />
                </>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularProperties;
