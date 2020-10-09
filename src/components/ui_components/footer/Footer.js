import React from "react";
import "./Footer.css";

const Footer = (props) => {
  let themeStyle = props.darkTheme
    ? { backgroundColor: "black", color: "white" }
    : {};
  return (
    <div style={themeStyle} className="footer_main_div">
      {props.content}
    </div>
  );
};

export default Footer;
