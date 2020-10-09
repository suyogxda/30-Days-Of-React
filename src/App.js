import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/ui_components/navbar/NavBar";
import DayChoices from "./components/ui_components/day_choices/DayChoices";

import DayOne from "./components/day_1/DayOne";
import DayTwo from "./components/day_2/DayTwo";
import DayThree from "./components/day_3/DayThree";
import DayFour from "./components/day_4/DayFour";
import DayFive from "./components/day_5/DayFive";
import DaySix from "./components/day_6/DaySix";
import DaySeven from "./components/day_7/DaySeven";
import DayEight from "./components/day_8/DayEight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navButtonClicked: false,
      displayedChoices: [],
      listOfButtons: [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 7",
        "Day 8",
      ],
      listOfDays: [
        <DayOne />,
        <DayTwo />,
        <DayThree />,
        <DayFour />,
        <DayFive />,
        <DaySix />,
        <DaySeven />,
        <DayEight />,
        // <Banner
        //   darkTheme={true}
        //   title="Welcome to 30 days of React"
        //   content="Alakazam is a great Pokemon, xD"
        //   headerOne="This is header one"
        //   headerTwo="This is header two"
        // />,
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
      </div>
    );
  }
}

export default App;
