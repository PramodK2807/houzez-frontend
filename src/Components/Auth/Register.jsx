import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox } from "rsuite";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { RegisterUser } from "../../ApiServices/loginHttpsServices";

const Register = () => {
  const [tnc, setTnc] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onFileSelection = (e) => {
    let img = e.target.files[0];
    setFile(img);
    setImageUrl(URL.createObjectURL(img));
  };

  const onSubmit = async (info) => {
    try {
      setLoader(true);
      if (!tnc) {
        Swal.fire({
          toast: true,
          icon: "error",
          position: "top-end",
          title: "Please Accept Terms and Conditions",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        return false;
      }

      console.log(file);

      const formData = new FormData();
      formData.append("fullName", info.fullName);
      formData.append("email", info.email);
      formData.append("mobile", info.mobile);
      formData.append("password", info.password);
      if (file) {
        formData.append("profile_image", file);
      }
      let { data } = await RegisterUser(formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Registered Successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("reset").click();
        setFile([]);
        setImageUrl("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const password = watch("password");
  return (
    <div className="font_nunito">
      <div className="welcome_text text-center">
        <h3>Welcome Back Sign in to Continue</h3>
        {/* <span>
          Don't Have an Account? <a>Login</a>
        </span> */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row my-3">
          <div className="text-center">
            <div className="position-relative profile_image">
              <label htmlFor="image">
                <img
                  src={imageUrl ? imageUrl : "/images/auth_bg.jpg"}
                  className="w-100 h-100 object-fit-cover cursor-pointer"
                  alt=""
                />
                <i class="fa-solid fa-camera profile_edit cursor-pointer"></i>
                <input
                  type="file"
                  className="d-none"
                  id="image"
                  name="image"
                  onChange={onFileSelection}
                />
              </label>
            </div>
          </div>

          <div className="col-12 my-2">
            <input
              type="text"
              placeholder="Full name..."
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              {...register("fullName", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors?.fullName && (
              <p className="invalid-feedback">{errors.fullName.message}</p>
            )}
          </div>
          <div className="col-12 my-2">
            <input
              type="email"
              placeholder="Email..."
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email && (
              <p className="invalid-feedback">{errors.email.message}</p>
            )}
          </div>
          <div className="col-12 my-2">
            <input
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              type="number"
              placeholder="Mobile..."
              {...register("mobile", {
                required: "Mobile is required",
                minLength: {
                  value: 10,
                  message: "Mobile must be 10 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Mobile must be 10 characters",
                },
              })}
            />
            {errors?.mobile && (
              <p className="invalid-feedback">{errors.mobile.message}</p>
            )}
          </div>
          <div className="col-lg-6 my-2 position-relative">
            <input
              type={passVisible ? "text" : "password"}
              placeholder="Password..."
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "* Please Enter Your Password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                },
              })}
            />
            <span onClick={() => setPassVisible(!passVisible)} className=" eye">
              {!passVisible ? (
                <i className="fa fa-eye-slash" />
              ) : (
                <i className="fa fa-eye" />
              )}
            </span>
            {errors?.password && (
              <p className="invalid-feedback">{errors.password.message}</p>
            )}
          </div>
          <div className="col-lg-6 my-2">
            <input
              type="password"
              placeholder="Confirm Password..."
              className={`form-control ${errors.cpassword ? "is-invalid" : ""}`}
              {...register("cpassword", {
                required: "* Please password again",
                validate: (value) =>
                  value === password ||
                  "Passwords do not match",
              })}
            />
            {errors?.cpassword && (
              <p className="invalid-feedback">{errors.cpassword.message}</p>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <label htmlFor="yes" className="d-block">
              <Checkbox
                name="available"
                onChange={() => setTnc(!tnc)}
                value="true"
                id="yes"
                checked={tnc}
                color="green"
              >
                By Registering You Confirm That You Accept Terms & Conditions
                and Privacy Policy
              </Checkbox>
            </label>
          </div>

          <Button
            appearance="primary"
            color="red"
            className="py-3 my-2"
            type="submit"
            loading={loader}
          >
            <span className="fw-bold">Register</span>
          </Button>
          <button className="d-none" id="reset" type="reset">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
