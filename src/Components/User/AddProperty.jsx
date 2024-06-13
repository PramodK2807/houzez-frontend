import React, { useState } from "react";
import Layout from "../Layout/Layout";
import CommonHeadingSection from "../Common/CommonHeadingSection";
import UserLayout from "./UserLayout";
import { Button, Radio } from "rsuite";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProperty = () => {
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [parking, setParking] = useState();
  const [available, setAvailable] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      "&:hover": {
        backgroundColor: "#e33324",
        color: "white",
      },
    }),
  };

  const propertyType = [
    { value: "For Sale", label: "For Sale" },
    { value: "For Rent", label: "For Rent" },
  ];
  const propertyCategory = [
    { value: "1BHK", label: "1BHK" },
    { value: "2BHK", label: "2BHK" },
    { value: "APARTMENT", label: "Apartment" },
    { value: "OFFICE", label: "Office" },
    { value: "GARAGE", label: "Garage" },
  ];

  const handleTypeChange = (selectedOption) => {
    console.log(selectedOption);
    setType(selectedOption);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const onSubmit = async (info) => {
    try {
      let formData = {
        title: info.title,
        description: info.description,
        type: type.label,
        property_image: [
          "https://wallup.net/wp-content/uploads/2019/09/977071-interior-design-room-furniture-architecture-house-condo-apartment.jpg",
          "http://www.thewowdecor.com/wp-content/uploads/2015/07/Luxurious-Mansion-Interior-Design-Ideas.jpg",
          "https://cdn.shopify.com/s/files/1/1917/6601/files/2014-11-The-Most-Beautiful-House-Interior-Design-Ideas-336.jpg",
          "https://i.pinimg.com/originals/db/47/74/db47743551388dcdf4b7a880ef679f57.jpg",
          "https://wallup.net/wp-content/uploads/2019/09/335422-architecture-room-living-room.jpg",
        ],
        area: info.area,
        bathrooms: info.bath,
        parking: parking,
        price: info.price,
        property_size: category.label,
        owner: "6636265e9841afdbbf06c34a",
        isEmpty: available,
        address: info.address,
        city: info.city,
        state: info.state,
        pin_code: info.pin_code,
      };
      let { data } = await axios.post(
        `${process.env.REACT_APP_API}api/auth/add-new-property`,
        formData,
        {
          headers: {
            "x-access-token":
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM2MjY1ZTk4NDFhZmRiYmYwNmMzNGEiLCJmdWxsTmFtZSI6InByYW1vZCIsImVtYWlsIjoicHJhbW9kQHRlc3QuY29tIiwiYWdlIjoiMjItMjUiLCJpYXQiOjE3MTQ4OTg2ODYsImV4cCI6MTcxNTUwMzQ4Nn0.1YpKNOl4PZu1SpALbDhDpiD1kMGc9ihJ-hTqnRJpbjk",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(info);
  };

  return (
    <UserLayout active="CreateProperty">
      <CommonHeadingSection />

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border mt_12 box_shadow">
            <p className="user_title_heading_div">Property Basic Information</p>

            <div className="px-4">
              <div className="row form_div">
                <div className="col-12 mb-3">
                  <label htmlFor="title">Property Title</label>
                  <input
                    type="text"
                    placeholder="Property Title"
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                    {...register("title", {
                      required: "* Title is required",
                      pattern: {
                        value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                        message:
                          "Spaces at the start & numbers are not allowed",
                      },
                    })}
                  />
                  {errors.title && (
                    <div className="invalid-feedback">
                      {errors.title.message}
                    </div>
                  )}
                </div>

                <div className="col-6 position-relative mb-3">
                  <label htmlFor="title">Property Type</label>
                  <div>
                    <Select
                      name="type"
                      value={type}
                      onChange={handleTypeChange}
                      options={propertyType}
                      styles={customStyles}
                      // {...register("type", {
                      //   required: "* Property type is required",
                      // })}
                      className={`w-100  border-0 ${
                        errors.type ? "is-invalid" : ""
                      }`}
                    />
                    {errors.type && (
                      <div className="invalid-feedback">
                        {errors.type.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6 position-relative mb-3">
                  <label htmlFor="title">Property Category</label>
                  <div>
                    <Select
                      name="category"
                      value={category}
                      onChange={handleCategoryChange}
                      options={propertyCategory}
                      styles={customStyles}
                      // {...register("category", {
                      //   required: "* Category type is required",
                      // })}
                      className={`w-100  border-0 ${
                        errors.category ? "is-invalid" : ""
                      }`}
                    />
                    {errors.category && (
                      <div className="invalid-feedback">
                        {errors.category.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-6 mb-3">
                  <label htmlFor="title">Price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    {...register("price", {
                      required: "* Price is required",
                      min: {
                        value: 100,
                        message: "Price should be greater than 100",
                      },
                    })}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">
                      {errors.price.message}
                    </div>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="title">Area (Sq. Feet)</label>
                  <input
                    type="number"
                    placeholder="Property Area"
                    className={`form-control ${
                      errors.area ? "is-invalid" : ""
                    }`}
                    {...register("area", {
                      required: "* Area is required",
                      min: {
                        value: 500,
                        message: "Area should be atleast 500 Sq.feet",
                      },
                    })}
                  />
                  {errors.area && (
                    <div className="invalid-feedback">
                      {errors.area.message}
                    </div>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="title">Bathroom</label>
                  <input
                    type="number"
                    placeholder="No. of Baths"
                    className={`form-control ${
                      errors.bath ? "is-invalid" : ""
                    }`}
                    {...register("bath", {
                      required: "* Bathroom is required",
                      min: {
                        value: 1,
                        message: "Value should be 1",
                      },
                    })}
                  />
                  {errors.bath && (
                    <div className="invalid-feedback">
                      {errors.bath.message}
                    </div>
                  )}
                </div>

                <div className="col-3">
                  <label htmlFor="title">Parking</label>
                  <div>
                    <label htmlFor="yes-parking">
                      <Radio
                        name="parking"
                        onChange={() => setParking(true)}
                        value="true"
                        id="yes-parking"
                        checked={parking === true}
                        color="green"
                      >
                        Yes
                      </Radio>
                    </label>
                    <label htmlFor="no-parking">
                      <Radio
                        name="parking"
                        onChange={() => setParking(false)}
                        value="false"
                        id="no-parking"
                        checked={parking === false}
                        color="red"
                      >
                        No
                      </Radio>
                    </label>
                  </div>
                </div>
                <div className="col-3">
                  <label htmlFor="title">Availability (Empty)</label>
                  <div>
                    <label htmlFor="yes">
                      <Radio
                        name="available"
                        onChange={() => setAvailable(true)}
                        value="true"
                        id="yes"
                        checked={available === true}
                        color="green"
                      >
                        Yes
                      </Radio>
                    </label>
                    <label htmlFor="not">
                      <Radio
                        name="available"
                        onChange={() => setAvailable(false)}
                        value="false"
                        id="not"
                        checked={available === false}
                        color="red"
                      >
                        No
                      </Radio>
                    </label>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="title">Description</label>
                  <textarea
                    type="text"
                    className="w-100"
                    placeholder="Enter description..."
                    {...register("description")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border my-4 box_shadow">
            <p className="user_title_heading_div">Property Gallery</p>

            <div>
              <div className="col-12 px-4 py-2">
                <div className="text-center dropzone">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="py-2">
                      <i class="fa-solid fa-cloud-arrow-up fs-2 mt-4"></i>
                      <p>Upload your property images</p>
                      <input
                        type="file"
                        defaultValue={""}
                        id="image"
                        name="image"
                        className="d-none w-100 h-100"
                        accept=".png, .jpeg, .jpg"
                      />{" "}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border my-4 box_shadow">
            <p className="user_title_heading_div">Property Location</p>

            <div className="px-4">
              <div className="row form_div">
                <div className="col-md-6 mb-3">
                  <label htmlFor="title">Address</label>
                  <input
                    type="text"
                    placeholder="Property Address"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    {...register("address", {
                      required: "* Address is required",
                      minLength: {
                        value: 5,
                        message: "Minimum 5 chars",
                      },
                    })}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">
                      {errors.address.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="title">Pin Code</label>
                  <input
                    type="number"
                    placeholder="Pin code"
                    className={`form-control ${
                      errors.pin_code ? "is-invalid" : ""
                    }`}
                    {...register("pin_code", {
                      required: "* Pin Code is required",
                      minLength: {
                        value: 6,
                        message: "Enter 6 digits",
                      },
                      maxLength: {
                        value: 6,
                        message: "Enter 6 digits",
                      },
                    })}
                  />
                  {errors.pin_code && (
                    <div className="invalid-feedback">
                      {errors.pin_code.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="title">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    className={`form-control ${
                      errors.state ? "is-invalid" : ""
                    }`}
                    {...register("state", {
                      required: "* State is required",
                      minLength: {
                        value: 5,
                        message: "Minimum 5 chars",
                      },
                    })}
                  />
                  {errors.state && (
                    <div className="invalid-feedback">
                      {errors.state.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="title">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className={`form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    {...register("city", {
                      required: "* City is required",
                      minLength: {
                        value: 1,
                        message: "Minimum 1 chars",
                      },
                    })}
                  />
                  {errors.city && (
                    <div className="invalid-feedback">
                      {errors.city.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Button
            className="primary_btn w-100 mb-2 px-0"
            appearance="primary"
            color="red"
            type="submit"
          >
            <span className="fw-bold py-2 px-0">Submit property</span>
          </Button>
        </form>
      </div>
    </UserLayout>
  );
};

export default AddProperty;
