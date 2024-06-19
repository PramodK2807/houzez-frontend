import React, { useEffect, useState } from "react";
import { Button } from "rsuite";
import Select from "react-select";
import state from "../../utils/state.json";

const BannerSection = () => {
  const [cityOptions, setCityOptions] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [stateOptions, setStateOptions] = useState();
  const [stateData, setStateData] = useState();
  const [selectedState, setSelectedState] = useState();
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    createStateOption(state);
  }, [state]);

  const createStateOption = (data) => {
    setStateData(data);
    let values = data?.states?.map((item, i) => ({
      value: item?.name,
      label: (
        <div key={i}>
          {item?.icon} {item?.name}
        </div>
      ),
    }));
    setStateOptions(values);
  };
  const createCityOption = (data) => {
    console.log(data);
    let values = data[0]?.cities?.map((item, i) => ({
      value: item?.name,
      label: (
        <div key={i}>
          {item?.icon} {item?.name}
        </div>
      ),
    }));
    console.log(values);
    setCityOptions(values);
  };

  const handleStateChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
    setSelectedState(selectedOption);

    const city = stateData?.states?.filter(
      (data, i) => data?.name === selectedOption?.value
    );
    createCityOption(city);
  };

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
                  onChange={(e)=> setKeywords(e.target.value)}
                  value={keywords}
                />
              </div>
              <div className="mb-3 col-md-6 col-lg-3 position-relative ">
                <div>
                  <Select
                    name="type"
                    value={selectedState}
                    onChange={handleStateChange}
                    options={stateOptions}
                    placeholder="Select State"
                  />
                </div>
              </div>
              <div className="mb-3 col-md-6 col-lg-3 position-relative">
                <div>
                  <Select
                    name="type"
                    value={selectedCity}
                    onChange={setSelectedCity}
                    options={cityOptions}
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
