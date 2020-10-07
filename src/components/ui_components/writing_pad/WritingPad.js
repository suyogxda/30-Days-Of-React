import React from "react";
import "./WritingPad.css";

const WritingPad = (props) => {
  return (
    <div className="writing_pad_outer_div">
      <div className="writing_pad_inner_div">
        <h1 className="note_topic">{props.noteTopic}</h1>
        <h2 className="note_sub_topic">{props.noteSubTopic}</h2>
        <p className="note_content">{props.noteContent}</p>
      </div>
    </div>
  );
};

export default WritingPad;
