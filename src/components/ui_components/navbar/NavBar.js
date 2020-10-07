import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navbar_outer_div">
      <div className="name">Made with &lt;3</div>
      <div onClick={props.onDivClicked} className="drop_down_div">
        {props.dayName}
        <span className="menu_icon">
          <MenuIcon />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
