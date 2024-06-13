import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login";
import secureLocalStorage from "react-secure-storage";

const Navbar = ({ navActive }) => {
  console.log("nav", navActive);

  let user = secureLocalStorage.getItem("userDetails");

  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img
            src="/images/houzez.png"
            alt="houzez"
            width={60}
            height={60}
            className="p-0 m-0"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                User Panel
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <NavLink
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="/" className="dropdown-item">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="dropdown-item">
                    Another action
                  </NavLink>
                </li>
              </ul>
            </li> */}
          </ul>
          {!user && (
            <div className="d-flex">
              <div>
                <NavLink to="/auth" className="primary_btn rounded-pill">
                  <i class="fa-regular fa-user"></i>
                  <span className="ms-3">Sign In</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/auth" className="secondary_btn rounded-pill">
                  <i class="fa-solid fa-plus"></i>
                  <span className="ms-3">Create Property</span>
                </NavLink>
              </div>
            </div>
          )}
          {user && (
            <div>
              <NavLink to="/User/My-Profile" className="nav_user_icon">
                <i class="fa-solid fa-user-tie "></i>
              </NavLink>
              <NavLink
                to="/User/add-new-property"
                className="secondary_btn rounded-pill ms-2"
              >
                <i class="fa-solid fa-plus"></i>
                <span className="ms-3">Create Property</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
