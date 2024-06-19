import React, { useEffect, useState } from "react";
import CommonHeadingSection from "../Common/CommonHeadingSection";
import CommonCard from "../Common/CommonCard";
import { NewProperties } from "../../ApiServices/dashHttpServices";
import Slider from "react-slick";

const FeaturedProp = () => {
  const [allProperties, setAllProperties] = useState([]);
  useEffect(() => {
    getAllProperty();
  }, []);

  const getAllProperty = async () => {
    try {
      const { data } = await NewProperties();
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
    <div className="container py-5">
      <CommonHeadingSection
        title={"New Properties"}
        title2={"Most New Properties"}
        description={
          "Explore the newest properties listed in the last 15 days."
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
  );
};

export default FeaturedProp;
