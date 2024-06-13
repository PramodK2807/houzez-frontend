import React from "react";

const CommonHeadingSection = ({ title = "Featured Props" }) => {
  return (
    <div>
      <div className="text-center py-5 font_nunito">
        <div className="top_section">
          <p className="top_title">{title}</p>
          <div className="second_title position-relative py-2">
            <p className="dark_title">Most {title}</p>
            <p className="fade_title">Most {title}</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, ex! Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeadingSection;
