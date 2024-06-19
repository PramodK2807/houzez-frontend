import React, { useState } from "react";
import Layout from "../Layout/Layout";
import CommonHeadingSection from "../Common/CommonHeadingSection";
import UserLayout from "./UserLayout";
import { Button, Radio } from "rsuite";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AddProperties } from "../../ApiServices/dashHttpServices";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [parking, setParking] = useState();
  const [available, setAvailable] = useState();
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  const id = secureLocalStorage.getItem("houzez_admin_id");

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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFile((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const onSubmit = async (info) => {
    const formData = new FormData();

    formData.append("title", info.title);
    formData.append("description", info.description);
    formData.append("type", type.label);
    formData.append("area", info.area);
    formData.append("bathrooms", info.bath);
    formData.append("parking", parking);
    formData.append("price", info.price);
    formData.append("property_size", category.label);
    formData.append("owner", id);
    formData.append("isEmpty", available);
    formData.append("address", info.address);
    formData.append("city", info.city);
    formData.append("state", info.state);
    formData.append("pin_code", info.pin_code);

    file?.forEach((img) => {
      if (img) {
        formData.append("property_image", img);
      }
    });

    try {
      let { data } = await AddProperties(formData);
      if (data && !data?.error) {
        console.log(data);
        navigate("/User/my-property");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserLayout active="CreateProperty">
      <CommonHeadingSection
        title={"List Your Properties"}
        title2={"Advertise Your Properties"}
        description={
          "Maximize your property's visibility with our simple and efficient listing tools."
        }
      />

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
                    placeholder="Enter description..."
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    {...register("description", {
                      required: "* Description is required",
                      minLength: {
                        value: 300,
                        message:
                          "Description should be more than 300 characters",
                      },
                    })}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">
                      {errors.description.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border my-4 box_shadow">
            <p className="user_title_heading_div">Property Gallery</p>
            <div>
              <div className="col-12 px-4 py-2">
                <div className="text-center dropzone">
                  <label htmlFor="image_gallery" className="cursor-pointer">
                    <div className="py-2">
                      <i className="fa-solid fa-cloud-arrow-up fs-2 mt-4"></i>
                      <p>Upload your property images</p>
                      <input
                        type="file"
                        id="image_gallery"
                        name="image_gallery"
                        className="d-none w-100 h-100"
                        accept=".png, .jpeg, .jpg , .webp"
                        multiple
                        onChange={handleFileChange}
                        defaultValue={""}
                      />
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
