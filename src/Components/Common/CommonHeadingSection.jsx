import React from "react";

const CommonHeadingSection = ({ title, title2, description }) => {
  return (
    <div>
      <div className="text-center pt-5 font_nunito">
        <div className="top_section">
          <p className="top_title">{title}</p>
          <div className="second_title position-relative py-2">
            <p className="dark_title">{title2}</p>
            <p className="fade_title">{title2}</p>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeadingSection;
