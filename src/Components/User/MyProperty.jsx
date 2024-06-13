import React from 'react'
import UserLayout from './UserLayout'
import PropertyCards from '../Common/PropertyCards'

const MyProperty = () => {
  return (
    <UserLayout active={"My Property"}>
      {/* <CommonHeadingSection /> */}

      <div className="">
        <form className="font_nunito">
          <div className="border mt_12 box_shadow">
            <p className="user_title_heading_div">My Property</p>
            <PropertyCards />
            <PropertyCards />
          </div>
        </form>
      </div>
    </UserLayout>
  )
}

export default MyProperty
