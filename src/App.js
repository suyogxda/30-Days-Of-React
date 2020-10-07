import React from "react";
import "./App.css";
import ExerciseOne from "./components/day_4/exercise_one/ExerciseOne";
import ExerciseTwo from "./components/day_4/exercise_two/ExerciseTwo";
import ExerciseThree from "./components/day_4/exercise_three/ExerciseThree";
import RandomColors from "./components/day_4/random_colors/RandomColors";
import DaySix from "./components/day_6/DaySix";
import DayFour from "./components/day_4/DayFour";

function App() {
  return (
    <div className="App">
      {/* <RandomColors numbersOfBar={6} /> */}
      <DayFour />
    </div>
  );
}

export default App;
