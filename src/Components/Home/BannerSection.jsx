import React, { useState } from "react";
import { Button } from "rsuite";
import Select from "react-select";

const BannerSection = () => {
  const [showCity, setShowCity] = useState(false);
  const [showState, setShowState] = useState(false);

  return (
    <div className="background parallax">
      <div className="content_container text-center">
        <div className="container">
          <div>
            <h1 className="headline_txt">Best Place To Find Residential.</h1>
            <p className="paragraph_txt">
              From as low as $10 per day with limited time offer discounts.
            </p>
          </div>
          <div className="search_area">
            <div className="row">
              <div className="mb-3 col-md-6 col-lg-4">
                <input
                  className="w-100"
                  type="text"
                  placeholder="Enter keywords..."
                />
              </div>
              <div className="mb-3 col-md-6 col-lg-3 position-relative ">
                <div>
                  <Select
                    name="type"
                    // value={type}
                    // onChange={handleTypeChange}
                    // options={propertyType}
                    // styles={customStyles}
                    // {...register("type", {
                    //   required: "* Property type is required",
                    // })}
                    placeholder="Select State"
                  />
                </div>
              </div>
              <div className="mb-3 col-md-6 col-lg-3 position-relative">
                <div>
                  <Select
                    name="type"
                    // value={type}
                    // onChange={handleTypeChange}
                    // options={propertyType}
                    // styles={customStyles}
                    // {...register("type", {
                    //   required: "* Property type is required",
                    // })}
                    placeholder="Select City"
                  />
                </div>
              </div>
              <div className="mb-3 col-md-6 col-lg-2">
                <Button
                  appearance="primary"
                  className="primary_btn rounded btn_height w-100"
                  color="red"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
