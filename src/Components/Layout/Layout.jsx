import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, navActive }) => {
  return (
    <div>
      <Navbar navActive={navActive} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
