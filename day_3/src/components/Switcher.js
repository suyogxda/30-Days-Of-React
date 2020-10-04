import React from "react";
import Button from "./Button";
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

const Switcher = (props) => {
  return (
    // So, this is the only div used in this component
    <div className="switcher">
      {/* So, I used three Button components in the switcher */}
      {/* The onClick and id are required to switch functionality */}
      <Button
        buttonId="buttonOne"
        onButtonClicked={props.onButtonClicked}
        buttonName="Exercise 1"
      />
      <Button
        buttonId="buttonTwo"
        onButtonClicked={props.onButtonClicked}
        buttonName="Exercise 2"
      />
      <Button
        buttonId="buttonThree"
        onButtonClicked={props.onButtonClicked}
        buttonName="Exercise 3"
      />
    </div>
  );
};

export default Switcher;
