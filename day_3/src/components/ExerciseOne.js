import React from "react";
import "./ExerciseOne.css";
import HtmlLogo from "./images/html_logo.png";
import CssLogo from "./images/css_logo.png";
import JsLogo from "./images/js_logo.svg";
import ReactLogo from "./images/react_logo.png";

const ExerciseOne = (props) => {
  return (
    <div className="exercise_1">
      <p>Front End Technology</p>
      {/* Main div */}
      <div className="image_div">
        {/* Imported images are then displayed in different instances */}
        <img className="logo_image" src={HtmlLogo} alt="" />
        <img className="logo_image" src={CssLogo} alt="" />
        <img className="logo_image" src={JsLogo} alt="" />
        <img className="logo_image" src={ReactLogo} alt="" />
      </div>
    </div>
  );
};

export default ExerciseOne;
