import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import PropertyCards from "../Common/PropertyCards";
import { GetMyProperty } from "../../ApiServices/dashHttpServices";
import secureLocalStorage from "react-secure-storage";

const MyProperty = () => {
  const [property, setProperty] = useState([]);

  const id = secureLocalStorage.getItem("houzez_admin_id");

  useEffect(() => {
    getMyProperty();
  }, []);

  const getMyProperty = async () => {
    try {
      let { data } = await GetMyProperty(id);
      if (data && !data?.error) {
        setProperty(data?.property);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserLayout active={"My Property"}>
      {/* <CommonHeadingSection /> */}

      <div className="">
        <form className="font_nunito">
          <div className="border box_shadow">
            <p className="user_title_heading_div">My Property</p>
            {property && property?.length > 0 ? (
              property?.map((item) => (
                <>
                  <PropertyCards property={item} added={"Added On"} />
                </>
              ))
            ) : (
              <h3 className="text-center py-5">Add your properties</h3>
            )}
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default MyProperty;
