import React from "react";
import Layout from "../Layout/Layout";
import BannerSection from "./BannerSection";
import FeaturedProp from "./FeaturedProp";
import PopularProperties from "./PopularProperties";
import FindorAddProp from "./FindorAddProp";

const Homepage = () => {
  return (
    <Layout navActive={"Home"}>
      <div>
        <BannerSection />

        <div>
          <FeaturedProp />
        </div>

        <div>
          <PopularProperties />
        </div>

        <div>
          <FindorAddProp />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
