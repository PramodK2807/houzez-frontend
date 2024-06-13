import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "rsuite";
import Layout from "../Layout/Layout";
import { ResetPassword, VerifyOTP } from "../../ApiServices/loginHttpsServices";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (info) => {
    // e.preventDefault();
    try {
      setLoader(true);
      let { data } = await ResetPassword({
        email: state?.email,
        password: info?.password,
      });
      if (data && !data?.error) {
        navigate("/auth");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const password = watch("password");
  return (
    <Layout>
      <div className="bg-white auth_bg">
        <div className="container">
          <div className="row align-items-center justify-content-center py-5">
            <div className="col-md-7 col-lg-6 bg-light border rounded p-0">
              <ul
                class="nav nav-tabs nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex3-tab-1"
                    data-bs-toggle="tab"
                    href="#ex3-tabs-1"
                    role="tab"
                    aria-controls="ex3-tabs-1"
                    aria-selected="true"
                  >
                    Reset Password
                  </a>
                </li>
              </ul>

              <div class="tab-content p-3 login_page" id="ex2-content">
                <div
                  class="tab-pane fade show active"
                  id="ex3-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex3-tab-1"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="font_nunito">
                      <div className="welcome_text text-center">
                        <h3>Please enter new password to reset</h3>
                      </div>

                      <div className="row mt-3">
                        <div className="col-lg-12 my-2 position-relative">
                          <input
                            type={passVisible ? "text" : "password"}
                            placeholder="Password..."
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
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
                          <span
                            onClick={() => setPassVisible(!passVisible)}
                            className=" eye"
                          >
                            {!passVisible ? (
                              <i className="fa fa-eye-slash" />
                            ) : (
                              <i className="fa fa-eye" />
                            )}
                          </span>
                          {errors?.password && (
                            <p className="invalid-feedback">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-12 my-2">
                          <input
                            type="password"
                            placeholder="Confirm Password..."
                            className={`form-control ${
                              errors.cpassword ? "is-invalid" : ""
                            }`}
                            {...register("cpassword", {
                              required: "* Please password again",
                              validate: (value) =>
                                value === password || "Passwords do not match",
                            })}
                          />
                          {errors?.cpassword && (
                            <p className="invalid-feedback">
                              {errors.cpassword.message}
                            </p>
                          )}
                        </div>

                        <div className="text-end">
                          <Link to={"/auth"}>Back to Login</Link>
                        </div>

                        <div className="px-3">
                          <Button
                            appearance="primary"
                            color="red"
                            className="py-3 my-2 w-100"
                            // onClick={() => setShowPage("OTP")}
                            type="submit"
                            loading={loader}
                          >
                            <span className="fw-bold">Reset</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
