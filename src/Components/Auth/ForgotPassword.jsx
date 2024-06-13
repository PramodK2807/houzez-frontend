import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "rsuite";
import OTPInput, { ResendOTP } from "otp-input-react";
import {
  SendOtpOnEmail,
  VerifyOTP,
} from "../../ApiServices/loginHttpsServices";

const ForgotPassword = () => {
  const [showPage, setShowPage] = useState("Email");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const renderButton = (buttonProps) => {
    return (
      <button type="submit" {...buttonProps}>
        Resend
      </button>
    );
  };
  const renderTime = (remainingTime) => {
    return <span>Resend OTP again in {remainingTime}</span>;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      let { data } = await SendOtpOnEmail({ email });
      if (data && !data?.error) {
        setShowPage("OTP");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const handleReSendOtp = async () => {
    try {
      setLoader(true);
      let { data } = await SendOtpOnEmail({ email });
      if (data && !data?.error) {
        setShowPage("OTP");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      let { data } = await VerifyOTP({ email, otp: OTP });
      if (data && !data?.error) {
        navigate("/Change-Password", { state: { email } });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                    Forgot Password
                  </a>
                </li>
              </ul>

              <div class="tab-content p-3 login_page" id="ex2-content">
                {showPage === "Email" && (
                  <div
                    class="tab-pane fade show active"
                    id="ex3-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                  >
                    <div className="font_nunito">
                      <div className="welcome_text text-center">
                        <h3>Please enter your email to reset password</h3>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12 my-2">
                          <input
                            className="w-100"
                            type="email"
                            placeholder="Email..."
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>

                        <div className="text-end">
                          <Link to={"/auth"}>Back to Login</Link>
                        </div>

                        <div className="px-3">
                          <Button
                            appearance="primary"
                            color="red"
                            className="py-3 my-2 w-100"
                            type="button"
                            onClick={handleSendOtp}
                            disabled={!email}
                            loading={loader}
                          >
                            <span className="fw-bold">Send OTP</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {showPage === "OTP" && (
                  <div
                    class="tab-pane fade show active"
                    id="ex3-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                  >
                    <div className="font_nunito">
                      <div className="welcome_text text-center">
                        <h3>Please verify your OTP, sent on your Email</h3>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12 mt-2">
                          <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            secure
                          />
                          <ResendOTP
                            renderButton={renderButton}
                            renderTime={renderTime}
                            onResendClick={(e) => handleReSendOtp(e)}
                            maxTime={10}
                          />
                        </div>

                        <div className="px-3">
                          <Button
                            appearance="primary"
                            color="red"
                            className="py-3 my-2 w-100"
                            onClick={handleVerifyOtp}
                          >
                            <span className="fw-bold">Verify OTP</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
