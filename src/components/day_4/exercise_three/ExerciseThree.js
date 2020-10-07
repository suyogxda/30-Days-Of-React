import React from "react";
import "./ExerciseThree.css";
import Button from "../../ui_components/button/Button";
import InputText from "../../ui_components/input_text/InputText";

const ExerciseThree = () => {
  return (
    // So, this is the main div which has gray background
    <div className="ex3_outer_div">
      {/* This is the inner div with white background, where all the contents are */}
      <div className="ex3_inner_div">
        <h1>SUBSCRIBE</h1>
        {/* I am using br to make sure that I don't have to fix that spacing using css. It's way easier for me */}
        <br />
        <br />
        <p>Sign up with your email address to receive news and update.</p>
        <br />
        <br />
        {/* This is the div where, I put the input texts in a flex so that it would be responsive */}
        <div className="input_div">
          {/* The input fields are put here using InputText component */}
          <InputText inputType="text" inputPlaceHolder="First name" />
          <InputText inputType="text" inputPlaceHolder="Last name" />
          <InputText inputType="text" inputPlaceHolder="Email" />
        </div>
        {/* Made a new div for a single button coz I had to put the button at the center */}
        <div className="ex3_button_div">
          {/* The button are put here using Button component */}
          <Button buttonName="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default ExerciseThree;
