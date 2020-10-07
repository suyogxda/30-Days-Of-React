import React from "react";
import "./RandomColors.css";
import { isDark, generateRandomColor } from "../../../utils/Utils";

// This function generates a color bar with text using JSX
const generateBar = () => {
  let hexColor = generateRandomColor();
  let textColor = "white";
  if (isDark(hexColor)) {
    textColor = "white";
  } else {
    textColor = "dark";
  }
  let barJsx = (
    <div
      style={{ backgroundColor: hexColor, color: textColor }}
      className="color_bar"
    >
      {hexColor}
    </div>
  );
  return barJsx;
};

/*
    Main functional Component which generates n numbers of color bars, 
    and wraps them in a responsive div
*/
const RandomColors = (props) => {
  let colorBars = [];
  for (let i = 0; i < parseInt(props.numbersOfBar); ++i) {
    colorBars.push(generateBar());
  }
  return <div className="color_div">{colorBars}</div>;
};

export default RandomColors;
