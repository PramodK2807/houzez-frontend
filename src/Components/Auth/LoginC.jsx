import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Radio } from "rsuite";
import { adminLogin } from "../../ApiServices/loginHttpsServices";
import secureLocalStorage from "react-secure-storage";

const LoginC = () => {
  const [remeber, setRemeber] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (info, event) => {
    event.preventDefault();
    let formData = {
      email: info.email.trim(),
      password: info.password.trim(),
    };

    const { data } = await adminLogin(formData);
    console.log(data);
    if (data && !data?.error) {
      secureLocalStorage.setItem("userDetails", data?.user);
      secureLocalStorage.setItem("houzez_admin_id", data?.user?._id);
      console.log("login", data?.results);
      navigate("/dashboard");
    }
  };

  return (
    <div className="font_nunito">
      <div className="welcome_text text-center">
        <h3>Welcome Back Sign in to Continue</h3>
        {/* <span>
          Don't Have an Account? <a>Sign Up!</a>
        </span> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row my-3">
          <div className="col-12 my-2">
            <input
              type="email"
              placeholder="Email..."
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "* Please enter an email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="col-12 my-2">
            <input
              type="text"
              placeholder="Password..."
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "* Please enter a password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "* Minimum 8 characters, One Uppercase, One Lowercase, One Number, and One Special Character required",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <label htmlFor="yes" className="d-block">
              <Checkbox
                name="available"
                onChange={() => setRemeber(!remeber)}
                value="true"
                id="yes"
                checked={remeber}
                color="green"
              >
                Remember Me
              </Checkbox>
            </label>

            <div>
              <Link to={"/Forgot-Password"}> Forgot Password</Link>
            </div>
          </div>

          <Button
            appearance="primary"
            color="red"
            className="py-3 my-2"
            type="submit"
          >
            <span className="fw-bold">Login</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginC;
