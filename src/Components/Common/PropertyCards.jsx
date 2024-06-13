import React from "react";

const PropertyCards = () => {
  return (
    <div>
      <div className="p-3 border-bottom font_nunito">
        <div className="row align-items-center">
          <div className="col-2 col-md-3 d-none d-md-block">
            <img
              src="/images/banne1.jpg"
              className="w-100 rounded"
              height={150}
              alt=""
            />
          </div>
          <div className="col-8 col-md-6">
            <p className="property_title mb-0">Renovated Luxury Apartment</p>
            <p className="card_address p-0 m-0 my-2">
              <span className="text-danger me-3">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>Near ekta market</span>
            </p>
            <p className="card_price mb-0">15000/m</p>
            <p className="">Bookmarked on : 25th April 24</p>
          </div>
          <div className="col-4 col-md-3 text-end">
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
  );
};

export default PropertyCards;
