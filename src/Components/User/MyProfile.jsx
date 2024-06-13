import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import { useForm } from "react-hook-form";
import { Button } from "rsuite";
import secureLocalStorage from "react-secure-storage";

const MyProfile = () => {
  let data = secureLocalStorage.getItem("userDetails");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (data) {
      setValue("name", data?.fullName);
      setValue("email", data?.email);
      setValue("number", data?.mobile);
    }
  }, []);

  const onSubmit = async (info) => {
    console.log(info);
  };

  return (
    <UserLayout active={"My Profile"}>
      {/* <CommonHeadingSection /> */}

      <div className="">
        <form className="font_nunito" onSubmit={handleSubmit(onSubmit)}>
          <div className="border box_shadow">
            <p className="user_title_heading_div">My Profile</p>
            <div className="px-4">
              <div className="row form_div">
                <div className="col-6">
                  <label htmlFor="title">Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    {...register("name", {
                      required: "* Name is required",
                      pattern: {
                        value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                        message:
                          "Spaces at the start & numbers are not allowed",
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="col-6 ">
                  <label htmlFor="title">Number</label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors.number ? "is-invalid" : ""
                    }`}
                    {...register("number", {
                      required: "* Number is required",
                    })}
                  />
                  {errors.number && (
                    <div className="invalid-feedback">
                      {errors.number.message}
                    </div>
                  )}
                </div>
                <div className="col-6 ">
                  <label htmlFor="title">Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "* Email is required",
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="col-6 ">
                  <label htmlFor="title">Old Password</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.oldpassword ? "is-invalid" : ""
                    }`}
                    {...register("oldpassword", {
                      required: "* Please enter old password",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "* Minimum 8 characters, One Uppercase, One Lowercase, One Number, and One Special Character required",
                      },
                    })}
                  />
                  {errors.oldpassword && (
                    <div className="invalid-feedback">
                      {errors.oldpassword.message}
                    </div>
                  )}
                </div>

                <div className="col-6 my-2">
                  <label htmlFor="title">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter New Password..."
                    className={`form-control ${
                      errors.newpassword ? "is-invalid" : ""
                    }`}
                    {...register("newpassword", {
                      required: "* Please enter new password",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "* Minimum 8 characters, One Uppercase, One Lowercase, One Number, and One Special Character required",
                      },
                    })}
                  />
                  {errors.newpassword && (
                    <div className="invalid-feedback">
                      {errors.newpassword.message}
                    </div>
                  )}
                </div>
                <div className="col-6 my-2">
                  <label htmlFor="title">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Enter Confirm Password..."
                    className={`form-control ${
                      errors.cpassword ? "is-invalid" : ""
                    }`}
                    {...register("cpassword", {
                      required: "* Please enter old password",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "* Minimum 8 characters, One Uppercase, One Lowercase, One Number, and One Special Character required",
                      },
                    })}
                  />
                  {errors.cpassword && (
                    <div className="invalid-feedback">
                      {errors.cpassword.message}
                    </div>
                  )}
                </div>
              </div>
              <Button
                className="primary_btn w-100 my-3 mx-0 px-0"
                appearance="primary"
                color="red"
                type="submit"
              >
                <span className="fw-bold py-2 px-0">Update Profile</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default MyProfile;
