import React from "react";
import Layout from "../Layout/Layout";
import ViewPropetyComp from "../Common/ViewPropetyComp";
import { useLocation } from "react-router-dom";
import { Button } from "rsuite";
import SyncSlider from "../Common/SyncSlider";

const ViewProperty = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Layout>
      <div className="container">
        {/* <ViewPropetyComp /> */}
        <div>
          <div>
            <SyncSlider images={state?.propert_images} />
          </div>

          <div className="row font_nunito">
            <div className="col-md-8">
              <div className="card_content bg-light">
                <div>
                  <p className="card_price">15000/m</p>
                </div>
                <div>
                  <div className="border-bottom">
                    <p className="card_title p-0 m-0">
                      Renovated Luxury Apartment
                    </p>
                    <p className="card_address p-0 m-0 my-2">
                      <span className="text-danger me-3">
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                      <span>Near ekta market</span>
                    </p>
                  </div>
                  <div className="card_icon border-bottom flex_evenly pb-2">
                    <div className="d-flex align-items-center flex-column">
                      <span>
                        <i class="fa-solid fa-bed"></i>
                      </span>
                      <span className="item_count">Beds 5</span>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <span>
                        <i class="fa-solid fa-shower"></i>
                      </span>
                      <span className="item_count">Baths 5</span>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <span>
                        <i class="fa-solid fa-square-parking"></i>
                      </span>
                      <span className="item_count">Parking</span>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <span>
                        <i class="fa-solid fa-maximize"></i>
                      </span>
                      <span className="item_count">1500 Sq Ft</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="description">
                <div className="border mt_12 box_shadow">
                  <p className="user_title_heading_div">
                    <span className="me-3">
                      <i class="fas fa-info-circle"></i>
                    </span>
                    Property description
                  </p>
                  <p className="p-3 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ipsum accusantium animi, maxime libero sed eaque
                    voluptatem consequatur mollitia, ratione id! Est ipsum quam
                    distinctio quaerat quo eaque animi placeat eos aut soluta
                    nihil autem tenetur, aperiam quia minima itaque voluptas
                    tempora aliquid consectetur temporibus iure ab earum. Eaque,
                    quidem.
                  </p>
                </div>
                <div className="border mt_12 box_shadow">
                  <p className="user_title_heading_div">
                    <span className="me-3">
                      <i class="fas fa-info-circle"></i>
                    </span>
                    Property Details
                  </p>
                  <p className="p-3 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ipsum accusantium animi, maxime libero sed eaque
                    voluptatem consequatur mollitia, ratione id! Est ipsum quam
                    distinctio quaerat quo eaque animi placeat eos aut soluta
                    nihil autem tenetur, aperiam quia minima itaque voluptas
                    tempora aliquid consectetur temporibus iure ab earum. Eaque,
                    quidem.
                  </p>
                </div>
                <div className="border mt_12 box_shadow">
                  <p className="user_title_heading_div">
                    <span className="me-3">
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                    Property Location
                  </p>
                  <p className="p-3 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ipsum accusantium animi, maxime libero sed eaque
                    voluptatem consequatur mollitia, ratione id! Est ipsum quam
                    distinctio quaerat quo eaque animi placeat eos aut soluta
                    nihil autem tenetur, aperiam quia minima itaque voluptas
                    tempora aliquid consectetur temporibus iure ab earum. Eaque,
                    quidem.
                  </p>
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
                    <i class="fa-regular fa-heart detail_icon"></i>
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
                      src="/images/banne1.jpg"
                      className="w-100 object-fit-cover h-100 rounded p-1"
                      // height={100}
                      alt=""
                    />
                  </div>
                  <div className="col-8 card_content">
                    <p className="card_title p-0 m-0">Jhon Doe</p>
                    <p className=" p-0 m-0">+91 4785961235</p>
                    <p className=" p-0 m-0">pramod@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewProperty;
