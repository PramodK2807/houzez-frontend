import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const UserLayout = ({ children, active }) => {
  const [activeTab, setActiveTab] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [file, setFile] = useState([]);

  let data = secureLocalStorage.getItem("userDetails");

  useEffect(() => {
    if (data) {
      setImageUrl(data?.profile_image);
    }
  }, []);

  useEffect(() => {
    setActiveTab(active);
  }, []);

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block user_sidebar">
            <div className="">
              <div>
                <div className="position-relative">
                  <img
                    loading="lazy"
                    src={imageUrl || "/images/banne1.jpg"}
                    height={210}
                    className="w-100 object-fit-cover rounded border"
                    alt=""
                  />
                  <label htmlFor="image">
                    <div class="utf-change-photo-btn-item py-1">
                      <div class="utf-user-photo-upload">
                        <span>
                          <i class="fa fa-upload"></i> Upload Photo
                        </span>
                        <input
                          type="file"
                          className="upload tooltip top d-none"
                          id="image"
                          name="image"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setFile(file);
                            setImageUrl(URL.createObjectURL(file));
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="my-4 border rounded user_menus">
                  <div>
                    <Link
                      className={
                        activeTab === "My Profile" ? "sidebarActive" : ""
                      }
                      onClick={() => setActiveTab("My Profile")}
                      to="/User/My-Profile"
                    >
                      <i class="fa-solid fa-bed"></i> <span>My Profile</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={
                        activeTab === "Bookmark Property" ? "sidebarActive" : ""
                      }
                      onClick={() => setActiveTab("Bookmark Property")}
                      to="/User/save-property"
                    >
                      <i class="fa-regular fa-star"></i>
                      <span>Bookmark Property</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={
                        activeTab === "My Property" ? "sidebarActive" : ""
                      }
                      onClick={() => setActiveTab("My Property")}
                      to="/User/my-property"
                    >
                      <i class="fa-solid fa-bed"></i> <span>My Property</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={
                        activeTab === "CreateProperty" ? "sidebarActive" : ""
                      }
                      onClick={() => setActiveTab("CreateProperty")}
                      to="/User/add-new-property"
                    >
                      <i class="fa-solid fa-house-chimney-medical"></i>
                      <span>Add New Property</span>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="/">
                      <i class="fa-solid fa-bed"></i>{" "}
                      <span>Update Profile</span>
                    </Link>
                  </div> */}
                  <div>
                    <Link to="/">
                      <i class="fa-solid fa-bed"></i> <span>Logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mt-0">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default UserLayout;
