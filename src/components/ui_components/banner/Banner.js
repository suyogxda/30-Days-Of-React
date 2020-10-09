import React from "react";
import "./Banner.css";

const Banner = (props) => {
  let themeStyle = props.darkTheme
    ? { backgroundColor: "black", color: "white" }
    : {};
  return (
    <div style={themeStyle} className="banner_main_div">
      <h1 className="banner_h1">{props.title}</h1>
      <h2 className="banner_h2">{props.headerOne}</h2>
      <h3 className="banner_h3">{props.headerTwo}</h3>
      <p className="banner_p">{props.content}</p>
    </div>
  );
};

export default Banner;
