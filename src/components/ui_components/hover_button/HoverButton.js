import React from "react";
import "./HoverButton.css";

const HoverButton = (props) => {
  return (
    <div
      onClick={props.onButtonClicked}
      id={props.buttonId}
      className="hover_button"
    >
      {props.buttonName}
    </div>
  );
};

export default HoverButton;
