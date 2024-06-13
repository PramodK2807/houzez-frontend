import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CommonCard = ({ property }) => {
  return (
    <Link to={"/property/view/123"} state={property}>
      {/* Hi */}
      <div className="h-100 rounded box_shadow font_nunito mx-2">
        <div className="card_image position-relative overflow-hidden">
          <img
            width={400}
            height={300}
            src={property?.property_image[0] || "/images/banne1.jpg"}
            className="w-100 object-fit-cover rounded"
            alt=""
          />
          <p className="featured mb-0">Featured</p>
          <p className="sale_or_rent sale mb-0">{property?.type}</p>
          {/* <p className="sale_or_rent rent mb-0">For Rent</p> */}
        </div>
        <div className="card_content">
          <div className="user_icon">
            <img
              src={property?.owner?.profile_image || "/images/banne1.jpg"}
              className="w_80_h_80"
              alt=""
            />
          </div>
          <div>
            <p className="card_price">
              {property?.property_details?.price} / m
            </p>
          </div>
          <div>
            <div className="border-bottom">
              <p className="card_title p-0 m-0 text-truncate w-100">
                {property?.title}
              </p>
              <p className="card_address p-0 m-0 my-2">
                <span className="text-danger me-3">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span>{property?.address?.address}</span>
              </p>
            </div>
            <div className="card_icon border-bottom flex_evenly pb-2">
              <div className="d-flex align-items-center flex-column">
                <span>
                  <i class="fa-solid fa-bed"></i>
                </span>
                <span className="item_count">
                  Beds {property?.property_details?.beds || 0}
                </span>
              </div>
              <div className="d-flex align-items-center flex-column">
                <span>
                  <i class="fa-solid fa-shower"></i>
                </span>
                <span className="item_count">
                  Baths {property?.property_details?.bathrooms}
                </span>
              </div>
              <div className="d-flex align-items-center flex-column">
                <span>
                  <i class="fa-solid fa-square-parking"></i>
                </span>
                <span className="item_count">
                  {property?.property_details?.parking ? "Yes" : "No"}
                </span>
              </div>
              <div className="d-flex align-items-center flex-column">
                <span>
                  <i class="fa-solid fa-maximize"></i>
                </span>
                <span className="item_count">
                  {property?.property_details?.area} Sq Ft
                </span>
              </div>
            </div>
            <div className="card_user_info flex_between mt-3">
              <span>
                <img src="" alt="" /> {property?.owner?.fullName}
              </span>
              <span>{moment(property?.createdAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CommonCard;
