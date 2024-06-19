import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import PropertyCards from "../Common/PropertyCards";
import { GetBookmarkedProperty } from "../../ApiServices/dashHttpServices";
import secureLocalStorage from "react-secure-storage";

const BookMarkProp = () => {
  const [property, setProperty] = useState([]);

  const id = secureLocalStorage.getItem("houzez_admin_id");

  useEffect(() => {
    getMyProperty();
  }, []);

  const getMyProperty = async () => {
    try {
      let { data } = await GetBookmarkedProperty(id);
      if (data && !data?.error) {
        setProperty(data?.property);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserLayout active={"Bookmark Property"}>
      {/* <CommonHeadingSection /> */}

      <div className="">
        <form className="font_nunito">
          <div className="border mt_12 box_shadow">
            <p className="user_title_heading_div">Bookmark Property</p>
            {property && property?.length > 0 ? (
              property?.map((item) => (
                <>
                  <PropertyCards property={item} added={"Bookmarked on"} />
                </>
              ))
            ) : (
              <h3 className="text-center py-5">No properties bookmarked</h3>
            )}
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default BookMarkProp;
