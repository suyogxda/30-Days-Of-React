import React, { Component } from "react";
import ExerciseOne from "./exercise_one/ExerciseOne";
import ExerciseTwo from "./exercise_two/ExerciseTwo";
import ExerciseThree from "./exercise_three/ExerciseThree";
import Switcher from "../ui_components/switcher/Switcher";
import RandomColors from "./random_colors/RandomColors";

class DayFour extends Component {
  constructor(props) {
    super(props);
    /*
      The state contains three stuffs:
        -> tagList => List of skills to show in portfolio
        -> currentExercise: to store the id of current exercise
        -> visibleExercise => To store the component to display current page
    */
    this.state = {
      tagList: [
        "HTML",
        "CSS",
        "Python",
        "Javascript",
        "Android",
        "JNI",
        "C++",
        "Machine learning",
        "Image processing",
        "OpenCV",
        "React",
        "Django",
        "Django Rest Framework",
      ],
      currentExercise: "buttonOne",
      visibleExercise: <ExerciseOne />,
      numberOfColorBars: "6",
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
      if (this.state.currentExercise === "button_1") {
        this.setState({ visibleExercise: <ExerciseOne /> });
      } else if (this.state.currentExercise === "button_2") {
        this.setState({
          visibleExercise: <ExerciseTwo tagNames={this.state.tagList} />,
        });
      } else if (this.state.currentExercise === "button_3") {
        this.setState({ visibleExercise: <ExerciseThree /> });
      } else if (this.state.currentExercise === "button_4") {
        this.setState({
          visibleExercise: (
            <RandomColors numbersOfBar={this.state.numberOfColorBars} />
          ),
        });
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
        <Switcher numOfButtons={4} onButtonClicked={this.onButtonClicked} />
      </div>
    );
  }
}

export default DayFour;
