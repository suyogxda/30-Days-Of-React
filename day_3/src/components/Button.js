import React, { Component } from "react";
import "./Button.css";

// I made a div as a button Component, coz why not?
const Button = (props) => {
  return (
    <div
      id={props.buttonId}
      onClick={props.onButtonClicked}
      className="button_div"
    >
      {props.buttonName}
    </div>
  );
};

export default Button;
