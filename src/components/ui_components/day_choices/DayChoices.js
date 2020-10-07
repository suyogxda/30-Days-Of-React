import React from "react";
import "./DayChoices.css";
import HoverButton from "../hover_button/HoverButton";

const DayChoices = (props) => {
  let listOfButtons = props.listOfButtons.map((i, n) => {
    return (
      <HoverButton
        key={n}
        onButtonClicked={props.onButtonClicked}
        buttonName={i}
        buttonId={String(n)}
      />
    );
  });
  return <div className="day_choice_outer_div">{listOfButtons}</div>;
};

export default DayChoices;
