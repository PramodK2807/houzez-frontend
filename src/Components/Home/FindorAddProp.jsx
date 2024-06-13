import React from "react";
import { Link } from "react-router-dom";

const FindorAddProp = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12 col-md-6 callout">
          <div className="callout_bg">
            <div className="text-center py-5">
              <div className="">
                <h2 className="title ">Find Your Browse Add Property</h2>
                <p className="px-4 pt-2">
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries.
                </p>
                <button className="primary_btn rounded mt-5">
                  <Link to="/User/add-new-property" className="text-white">
                    Add New Property
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0 callout">
          <div className="callout_bg2">
            <div className="text-center py-5">
              <div className="">
                <h2 className="title ">Find Your Browse Add Property</h2>
                <p className="px-4 pt-2">
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries.
                </p>
                <button className="primary_btn rounded mt-5">
                  Browse Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindorAddProp;
