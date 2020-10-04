import React from "react";
import "./Tags.css";

const Tags = (props) => {
  const tags = props.tagNames.map((tag) => {
    return <div className="tag">{tag}</div>;
  });
  return <div className="tags">{tags}</div>;
};

export default Tags;
