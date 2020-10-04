import React from "react";
import "./InputText.css";

const InputText = (props) => {
  return (
    <input
      type={props.inputType}
      placeholder={props.inputPlaceHolder}
      className="input_text_div"
    />
  );
};

export default InputText;
