import React from "react";
import "../assets/css/login.css";
import Layout from "./Layout/Layout";
import LoginC from "./Auth/LoginC";
import Register from "./Auth/Register";

const Login = () => {
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
                    Login
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex3-tab-2"
                    data-bs-toggle="tab"
                    href="#ex3-tabs-2"
                    role="tab"
                    aria-controls="ex3-tabs-2"
                    aria-selected="false"
                  >
                    Register
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
                  <LoginC />
                </div>
                <div
                  class="tab-pane fade"
                  id="ex3-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex3-tab-2"
                >
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
