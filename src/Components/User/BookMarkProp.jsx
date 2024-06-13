import React from "react";
import { Button } from "rsuite";
import UserLayout from "./UserLayout";
import CommonHeadingSection from "../Common/CommonHeadingSection";
import PropertyCards from "../Common/PropertyCards";

const BookMarkProp = () => {
  return (
    <UserLayout active={"Bookmark Property"}>
      {/* <CommonHeadingSection /> */}

      <div className="">
        <form className="font_nunito">
          <div className="border mt_12 box_shadow">
            <p className="user_title_heading_div">Bookmark Property</p>
            <PropertyCards />
            <PropertyCards />
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default BookMarkProp;
