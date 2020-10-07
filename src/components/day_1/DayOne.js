import React, { Component } from "react";
import WritingPad from "../ui_components/writing_pad/WritingPad";

class DayOne extends Component {
  noteTopic = "30 Days of React";
  noteSubTopic = "#Day 1";
  noteContent = (
    <span>
      So, me and few of my friends decided to learn react from{" "}
      <a href="https://github.com/Asabeneh/30-Days-Of-React">this repo.</a> And
      it all began. So, I stared reading the contents written by{" "}
      <a href="https://github.com/Asabeneh">Asabeneh</a>, and did his exercises
      almost regularly. This website contains all the exercises I've done. Press
      the top right button on Navbar to navigate between them. Things I skipped
      were writing down questions like: "What is JSX?", "What is React?", "How
      do you do this?", "What is props?", "Write a function to print this
      array", "Go study, you fucking idiot" blah...blah....blah. I mean who tf
      writes them down like a high school student racing with his teacher's
      speech so that he doesn't miss a word xD
      <br /> <br />
      Anyway, there are some topics, for example: day 3, day 4 and day 5, where
      the exercises are to build same components using different methods like
      using functional component, class component or JSX, etc. So, in case of
      these types of exercises, I've skipped down to using just a single method.
      But still, you'll find it on all days coz I've linked them all to single
      work.
      <br /> <br />
      Also, if you are good at using react, and by any chance, get to stroll
      this repo, I am a complete noob xD. I don't know much about the standard
      react coding and template guide. So, you can create an issue...which will
      help me learn from my mistakes. Anyway, Seeya (^_^)
      <br /> <br />
      <a href="#">
        P.S: Most of my codes are responsive. And also some code still needs to
        be commented and formatted properly. So, bear with it for now.
      </a>
    </span>
  );
  render() {
    return (
      <WritingPad
        noteTopic={this.noteTopic}
        noteSubTopic={this.noteSubTopic}
        noteContent={this.noteContent}
      />
    );
  }
}
export default DayOne;
