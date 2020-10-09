import React from "react";
import "./Portfolio.css";
import SuyogImage from "../../images/portfolio_suyog.jpg";
import TagButton from "../../ui_components/tag_button/TagButton";

const Portfolio = (props) => {
  let themeStyle = props.darkTheme
    ? { backgroundColor: "black", color: "white" }
    : {};
  return (
    <div className="portfolio_outer_div">
      <div style={themeStyle} className="portfolio_main_div">
        {/* User avatar */}
        <p style={{ fontWeight: "lighter" }}>
          Prerequisite to get started react.js
          <ul style={{ marginTop: "0px" }}>
            HTML <br />
            CSS <br /> JavaScript
          </ul>
        </p>
        <img className="user_avatar" src={SuyogImage} alt="" />
        {/* Note that I'll be using <br> a lot of times, 
          as I don't want to style when the solutuion is provided by a 5 characters html tag :P */}
        <br />
        <h2 style={{ fontWeight: "normal" }}>SUYOG ADHIKARI</h2>
        <p style={{ fontWeight: "lighter" }}>AI/ML Developer, Nepal</p>
        {/* This division containsthe skill tags. I've made a different component for this */}
        <div className="tag_button_div">
          <TagButton tagButtonName="Placeholder 1" />
          <TagButton tagButtonName="Placeholder 2" />
          <TagButton
            onButtonClicked={props.onButtonClicked}
            tagButtonName="Change theme"
            tagButtonId="themeButton"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
