import React, { Component } from "react";

import "./App.css";
import NumbersGrid from "./components/number_grid/NumbersGrid";
import HexBlocks from "./components/hex_blocks/HexBlocks";
// import ChartBar from "./components/chart_bar/ChartBar";
import Chart from "./components/chart/Chart";
import Switcher from "./components/switcher/Switcher";

let numbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

let hexColors = [
  "#2a4ec3",
  "#163293",
  "#949339",
  "#f8f7ac",
  "#e96c33",
  "#364e40",
  "#2a31e8",
  "#432d79",
  "#8e30dd",
  "#c6f97b",
  "#10617b",
  "#d5ba18",
  "#c41ef8",
  "#452a18",
  "#756c7c",
  "#935ec4",
  "#f02ae3",
  "#c2fbf0",
  "#29bd72",
  "#569eac",
  "#130704",
  "#84ccc0",
  "#ba3194",
  "#08486d",
  "#8d1de6",
  "#6b2e54",
  "#e7f6c8",
  "#5e7dda",
  "#8197ba",
  "#a5209f",
  "#3e1365",
  "#b396cc",
];

const populationList = {
  WORLD: 7693165599,
  CHINA: 1377422166,
  INDIA: 1295210000,
  USA: 323947000,
  INDONESIA: 258705000,
  BRAZIL: 206135893,
  PAKISTAN: 194125062,
  NIGERIA: 186988000,
  BANGLADESH: 161006790,
  RUSSIA: 146599183,
  JAPAN: 126960000,
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExercise: "buttonOne",
      visibleExercise: <NumbersGrid numberList={numbers} />,
    };
  }

  // This function is used to parse which button was pressed
  onButtonClicked = (event) => {
    this.setState({ currentExercise: event.target.id });
  };

  // This hook is used to see if the state currentExercise has changed or not
  // If the state currentExercise has been changed, then the hook will also change visibleExercise state accordingly
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentExercise !== this.state.currentExercise) {
      if (this.state.currentExercise === "buttonOne") {
        this.setState({
          visibleExercise: <NumbersGrid numberList={numbers} />,
        });
      } else if (this.state.currentExercise === "buttonTwo") {
        this.setState({
          visibleExercise: <HexBlocks hexCode={hexColors} />,
        });
      } else if (this.state.currentExercise === "buttonThree") {
        this.setState({
          visibleExercise: <Chart populationList={populationList} />,
        });
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.visibleExercise}
        <Switcher onButtonClicked={this.onButtonClicked} />
      </div>
    );
  }
}

export default App;
