import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light text-dark border-top font_nunito  footer">
      <div className="container ">
        <div className="row py-5">
          <div className="col-lg-4">
            <div className="footer_header">
              <NavLink
                to="/"
                className="navbar-brand d-flex align-items-center"
              >
                <img
                  src="/images/houzez.png"
                  alt="houzez"
                  width={60}
                  height={60}
                  className="p-0 m-0"
                />{" "}
                <h1>
                  <span>Houzez</span>
                </h1>
              </NavLink>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when unknown printer took a galley type scrambled.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div>
              <h6 className="footer_title">Quick Links</h6>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div>
              <h6 className="footer_title">Quick Links</h6>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <p className="text-center py-3 mb-0">
          Copyright &copy; 2020 All rights reserved by{" "}
          <Link to={"/"}>Houzez</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
