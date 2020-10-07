import React from "react";
import Button from "../button/Button";
import "./Switcher.css";

/* 
    So, this is a switcher component.
    It is used to switch between the 3 exercises
    It was not mentioned in the exercises.
    But stil, I did extra work because:
        -> It makes the task of presenting the stuffs I did today much easier
        -> I was enjoying building the components. :D
        -> I had some free time (^_^)
*/

const generateButtons = (props) => {
  let totalButtons = [];
  for (let i = 0; i < parseInt(props.numOfButtons); ++i) {
    let buttonId = "button_" + String(i + 1);
    let buttonName = "Exercise " + String(i + 1);
    totalButtons.push(
      <Button
        buttonId={buttonId}
        onButtonClicked={props.onButtonClicked}
        buttonName={buttonName}
      />
    );
  }
  return totalButtons;
};

const Switcher = (props) => {
  return (
    // So, this is the only div used in this component
    <div className="switcher">
      {/* So, I used `numOfButtons` Button components in the switcher */}
      {/* The onClick and id are required to switch functionality */}
      {generateButtons(props)}
    </div>
  );
};

export default Switcher;
