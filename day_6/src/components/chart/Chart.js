import React from "react";
import ChartBar from "../chart_bar/ChartBar";
import "./Chart.css";

const getDetailedPopulation = (populationObject) => {
  let valuesArray = Object.values(populationObject);
  let countryArray = Object.keys(populationObject);
  valuesArray = valuesArray.map((i) => {
    return parseInt(i);
  });
  let maxPopulation = Math.max(...valuesArray);
  let detailedObject = valuesArray.map((i, n) => {
    let populationPercentage = (i / maxPopulation) * 100;
    let country = countryArray[n];
    return { country: country, stats: [populationPercentage, valuesArray[n]] };
  });
  return detailedObject;
};

const Chart = (props) => {
  let populationDetails = getDetailedPopulation(props.populationList);
  let chartBars = populationDetails.map((i, n) => {
    return (
      <ChartBar
        key={n}
        country={i.country}
        percentage={i.stats[0]}
        population={i.stats[1]}
      />
    );
  });
  return (
    <div className="number_grid_outer_div">
      <div className="number_grid_text_div">
        <h1>30 Days Of React</h1>
        <h2 style={{ fontWeight: "lighter" }}>World population</h2>
        <p>Ten most populated countries</p>
        <br />
        <div className="chart_inner_div">{chartBars}</div>
      </div>
    </div>
  );
};

export default Chart;
