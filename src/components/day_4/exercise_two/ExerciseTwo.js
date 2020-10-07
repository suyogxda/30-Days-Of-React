import React from "react";
import "./ExerciseTwo.css";
import Tags from "../tags/Tags";
import SuyogImage from "../../images/portfolio_suyog.jpg";

const ExerciseTwo = (props) => {
  // I didn't put the verify logo and that joined date sign, as it was a pain to search, download and import
  return (
    // This is the outer div, where you can see kind of grayish background if you look closely
    <div className="outer_portfolio_div">
      {/* The inner division, where all our contents like images, tags and texts are */}
      <div className="inner_portfolio_div">
        {/* This division contains User avatar, Name and occupation text */}
        <div className="user_info_div">
          {/* User avatar */}
          <img className="user_avatar" src={SuyogImage} alt="" />
          {/* Note that I'll be using <br> a lot of times, 
          as I don't want to style when the solutuion is provided by a 5 characters html tag :P */}
          <br />
          <h2 style={{ fontWeight: "normal" }}>SUYOG ADHIKARI</h2>
          <p style={{ fontWeight: "lighter" }}>AI/ML Developer, Nepal</p>
          <br />
        </div>
        <h2 style={{ fontWeight: "normal" }}>SKILLS</h2>
        {/* This division containsthe skill tags. I've made a different component for this */}
        <div className="skill_div">
          <Tags tagNames={props.tagNames} />
        </div>
        <br />
        <p style={{ fontWeight: "lighter" }}>Joined on Oct 4, 2020</p>
        <br />
        {/* End of inner portfolio div */}
      </div>
      {/* End of outer portfolio div */}
    </div>
  );
};

export default ExerciseTwo;
