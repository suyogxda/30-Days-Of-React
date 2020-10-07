import React from "react";
import "./ColorBlock.css";

const ColorBlock = (props) => {
  return (
    <div style={props.divStyle} className="number_block">
      <h1 style={props.textStyle}>{props.textInBox}</h1>
    </div>
  );
};

export default ColorBlock;
