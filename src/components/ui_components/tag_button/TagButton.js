import React from "react";
import "./TagButton.css";

const TagButton = (props) => {
  return (
    <div
      onClick={props.onButtonClicked}
      id={props.tagButtonId}
      className="tag_button"
    >
      {props.tagButtonName}
    </div>
  );
};

export default TagButton;
