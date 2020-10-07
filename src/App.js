import React, { Component } from "react";
import "./App.css";
import ExerciseOne from "./components/day_4/exercise_one/ExerciseOne";
import ExerciseTwo from "./components/day_4/exercise_two/ExerciseTwo";
import ExerciseThree from "./components/day_4/exercise_three/ExerciseThree";
import RandomColors from "./components/day_4/random_colors/RandomColors";
import NavBar from "./components/ui_components/navbar/NavBar";
import HoverButton from "./components/ui_components/hover_button/HoverButton";
import DayChoices from "./components/ui_components/day_choices/DayChoices";

import DayOne from "./components/day_1/DayOne";
import DayTwo from "./components/day_2/DayTwo";
import DayThree from "./components/day_3/DayThree";
import DayFour from "./components/day_4/DayFour";
import DayFive from "./components/day_5/DayFive";
import DaySix from "./components/day_6/DaySix";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navButtonClicked: false,
      displayedChoices: [],
      listOfButtons: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
      listOfDays: [
        <DayOne />,
        <DayTwo />,
        <DayThree />,
        <DayFour />,
        <DayFive />,
        <DaySix />,
      ],
      currentIndex: 0,
    };
  }

  onDayButtonClicked = (event) => {
    this.setState({ displayedChoices: [] });
    this.setState({ navButtonClicked: false });
    this.setState({ currentIndex: parseInt(event.target.id) });
    console.log(this.state.currentIndex);
  };
  onNavButtonClicked = (event) => {
    if (!this.state.navButtonClicked) {
      this.setState({
        displayedChoices: (
          <DayChoices
            onButtonClicked={this.onDayButtonClicked}
            listOfButtons={this.state.listOfButtons}
          />
        ),
      });
      this.setState({ navButtonClicked: true });
    } else {
      this.setState({ displayedChoices: [] });
      this.setState({ navButtonClicked: false });
    }
  };
  render() {
    return (
      <div className="App">
        {/* <RandomColors numbersOfBar={6} /> */}
        <NavBar
          onDivClicked={this.onNavButtonClicked}
          dayName={this.state.listOfButtons[this.state.currentIndex]}
        />
        {this.state.displayedChoices}
        {this.state.listOfDays[this.state.currentIndex]}

        {/* <DayChoices listOfButtons={["Day 1", "Day 2"]} /> */}
      </div>
    );
  }
}

export default App;
