import "./App.css";
import React, { Component } from "react";
import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThree from "./components/ExerciseThree";
import Switcher from "./components/Switcher";

export default class App extends Component {
  constructor(props) {
    super(props);
    /*
      The state contains three stuffs:
        -> tagList => List of skills to show in portfolio
        -> currentExercise: to store the id of current exercise
        -> visibleExercise => To store the component to display current page
    */
    this.state = {
      tagList: ["HTML", "CSS", "PYTHON"],
      currentExercise: "buttonOne",
      visibleExercise: <ExerciseOne />,
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
        this.setState({ visibleExercise: <ExerciseOne /> });
      } else if (this.state.currentExercise === "buttonTwo") {
        this.setState({
          visibleExercise: <ExerciseTwo tagNames={this.state.tagList} />,
        });
      } else if (this.state.currentExercise === "buttonThree") {
        this.setState({ visibleExercise: <ExerciseThree /> });
      }
    }
  }

  // Render function
  render() {
    return (
      <div>
        {/* To display exercises */}
        {this.state.visibleExercise}
        {/* To switch between exercises */}
        <Switcher onButtonClicked={this.onButtonClicked} />
      </div>
    );
  }
}
