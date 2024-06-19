import moment from "moment";
import React from "react";

const PropertyCards = ({ property, added }) => {
  console.log(property);
  return (
    <div>
      <div className="p-3 border-bottom font_nunito">
        <div className="row align-items-center">
          <div className="col-3 d-none d-md-block">
            <img
              loading="lazy"
              src={property?.property_image[0] || "/images/banne1.jpg"}
              className="w-100 rounded object-fit-cover"
              height={150}
              alt=""
            />
          </div>
          <div className="col-12 col-md-9">
            <p className="property_title d-flex align-items-center justify-content-between">
              <span>{property?.title}</span>
              <span className="property_type text-light px-2 rounded ms-2">
                {property?.type}
              </span>
            </p>

            <div className="row align-items-center justify-content-between">
              <div className="col-8">
                <p className="card_address p-0 m-0 my-2">
                  <span className="text-danger me-3">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span>{property?.address?.address}</span>
                </p>
                {property?.type === "For Rent" && (
                  <p className="card_price mb-0">
                    {property?.property_details?.price} / M
                  </p>
                )}
                {property?.type === "FOR SALE" && (
                  <p className="card_price mb-0">
                    {property?.property_details?.price}
                  </p>
                )}

                <p className="mt-2">
                  {added}: {moment(property?.createdAt).format("MMM Do YYYY")}
                </p>
              </div>
              <div className="col-4 text-end">
                <button className="action_btn edit_btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="action_btn view_btn">
                  <i class="fa-regular fa-eye"></i>
                </button>
                <button className="action_btn delete_btn">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
