import React, { Component } from "react";
import WritingPad from "../ui_components/writing_pad/WritingPad";

/* eslint-disable */
class DaySeven extends Component {
  noteTopic = "30 Days of React";
  noteSubTopic = "#Day 7";
  noteContent = (
    <span>
      Day 7 was all about class based components and rebuilding previously done
      examples using class based components.
      <br />
      <br />
      So, I skipped it. Why should I build something redundant?. Day 8 has a
      couple of cool exercises. See you on next one.
      <br />
      <br />
      <a>Peace (^_^)</a>
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
export default DaySeven;
