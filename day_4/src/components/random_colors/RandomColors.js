import React from "react";
import "./RandomColors.css";
const isDark = (color) => {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return false;
  } else {
    return true;
  }
};

const generateRandomColor = () => {
  const hexChars = "0123456789abcdef";
  let randomColor = "#";
  for (let i = 0; i < 6; ++i) {
    let currentIndex = parseInt(Math.random() * hexChars.length);
    randomColor += hexChars[currentIndex];
  }
  return randomColor;
};
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

const RandomColors = (props) => {
  let colorBars = [];
  for (let i = 0; i < parseInt(props.numbersOfBar); ++i) {
    colorBars.push(generateBar());
  }
  return <div className="color_div">{colorBars}</div>;
};

export default RandomColors;
