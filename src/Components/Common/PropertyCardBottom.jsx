import moment from "moment";
import React from "react";

const PropertyCardBottom = ({ property }) => {
  return (
    <div className="card_content">
      <div>
        {property?.type === "FOR SALE" && (
          <p className="card_price">{property?.property_details?.price}</p>
        )}
        {property?.type === "For Rent" && (
          <p className="card_price">{property?.property_details?.price} / m</p>
        )}
      </div>
      <div>
        <div className="border-bottom">
          <p className="card_title p-0 m-0 text-truncate text-capitalize w-100">
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
        <div className="card_user_info flex_between mt-3 text-dark">
          <span className="d-flex text-capitalize">
            <img
              src={property?.owner?.profile_image}
              alt=""
              className="wh_25 me-2"
            />
            {property?.owner?.fullName || "Jhon Doe"}
          </span>
          <span>{moment(property?.createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardBottom;
