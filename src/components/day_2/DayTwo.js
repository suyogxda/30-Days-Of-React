import React, { Component } from "react";
import WritingPad from "../ui_components/writing_pad/WritingPad";

class DayTwo extends Component {
  noteTopic = "30 Days of React";
  noteSubTopic = "#Day 2";
  noteContent = (
    <span>
      Day 2 was all about answering questions, and writing some JSX I guess.
      <br />
      <br />
      So, there is nothing much to see here. Go to the next page.
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
export default DayTwo;
