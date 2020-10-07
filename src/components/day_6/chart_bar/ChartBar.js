import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let passivePercentage = 100 - parseFloat(props.percentage);
  return (
    <div className="single_bar_div">
      <div className="country_div">{props.country}</div>
      <div className="bar_div">
        <div
          className="active_bar_div"
          style={{ flexBasis: props.percentage + "%" }}
        ></div>
        <div
          className="passive_bar_div"
          style={{ flexBasis: passivePercentage + "%" }}
        ></div>
      </div>
      <div className="population_div">{props.population}</div>
    </div>
  );
};

export default ChartBar;
