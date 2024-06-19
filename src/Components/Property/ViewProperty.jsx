import React from "react";
import Layout from "../Layout/Layout";
import ViewPropetyComp from "../Common/ViewPropetyComp";
import { useLocation } from "react-router-dom";
import { Button } from "rsuite";
import SyncSlider from "../Common/SyncSlider";
import PropertyCardBottom from "../Common/PropertyCardBottom";

const ViewProperty = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Layout>
      <div className="container-lg container-fluid">
        <div className="row font_nunito my-5">
          <div className="col-md-8">
            <div>
              <SyncSlider property_image={state?.property_image} />
            </div>
            <div className="m border box_shadow rounded bg-white">
              <PropertyCardBottom property={state} />
            </div>

            <div className="description">
              <div className="border mt_12 box_shadow">
                <p className="user_title_heading_div">
                  <span className="me-3">
                    <i class="fas fa-info-circle"></i>
                  </span>
                  Property description
                </p>
                <p className="p-3 mb-0 desc">{state?.description}</p>
              </div>

              <div className="border mt_12 box_shadow">
                <p className="user_title_heading_div">
                  <span className="me-3">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  Property Location
                </p>
                <div className="p-3 mb-0 details_page_address">
                  <div className="row">
                    <p className="col-6">
                      Address : <span>{state?.address?.address}</span>
                    </p>
                    <p className="col-6">
                      City : <span>{state?.address?.city}</span>
                    </p>
                    <p className="col-6">
                      State : <span>{state?.address?.state}</span>
                    </p>
                    <p className="col-6">
                      Pin Code : <span>{state?.address?.pin_code}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box_shadow details_page rounded p-4">
              <p className="heading">Reach Out More</p>

              <div className="d-flex align-items-center justify-content-around py-3">
                <span>
                  <i class="fa-solid fa-share-nodes detail_icon"></i>
                </span>
                <span>
                  <i class="fa-regular fa-heart detail_icon"></i>
                </span>
                <span>
                  <i class="fa-solid fa-location-arrow detail_icon"></i>
                </span>
                <span>
                  <i class="fa-solid fa-bug detail_icon"></i>
                </span>
              </div>
            </div>
            <div className="box_shadow details_page rounded p-4 my-4">
              <p className="heading">Your Comments</p>

              <div className="p-2">
                <label htmlFor="">Enter comments</label>
                <input
                  type="text"
                  className="input w-100"
                  placeholder="Comment on this property..."
                />
                <Button
                  className="w-100 my-2 py-2 fw-bold"
                  appearance="primary"
                  color="green"
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="box_shadow details_page rounded p-4">
              <p className="heading">Listed by </p>

              <div className="row">
                <div className="col-4 border p-0 rounded">
                  <img
                    src={state?.owner?.profile_image}
                    className="w-100 object-fit-contain rounded p-1"
                    height={120}
                    alt=""
                  />
                </div>
                <div className="col-8 card_content">
                  <p className="card_title p-0 m-0 text-capitalize">
                    {state?.owner?.fullName}
                  </p>
                  <p className=" p-0 m-0">{state?.owner?.mobile}</p>
                  <p className=" p-0 m-0">{state?.owner?.email}</p>
                </div>
              </div>
            </div>

            <div className="border mt_12 box_shadow">
              <p className="user_title_heading_div">
                <span className="me-3">
                  <i class="fa-regular fa-comment"></i>
                </span>
                Comments
              </p>
              <div className="p-3 pb-0 mb-0">
                {state?.comments && state?.comments?.length > 0 ? (
                  state?.comments?.map((comment) => (
                    <>
                      <p>{comment}</p>
                    </>
                  ))
                ) : (
                  <p className="text-center">No Comments</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewProperty;
