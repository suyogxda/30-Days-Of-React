import React, { Component } from "react";
import Banner from "../ui_components/banner/Banner";
import Portfolio from "./portfolio/Portfolio";
import Footer from "../ui_components/footer/Footer";

/* eslint-disable */
class DayEight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darktheme: false,
    };
  }
  changeTheme = (event) => {
    if (event.target.id === "themeButton") {
      if (this.state.darktheme) {
        this.setState({ darktheme: false });
      } else {
        this.setState({ darktheme: true });
      }
    }
  };
  render() {
    let content = (
      <span>
        Suyog Adhikari
        <br /> Oct 8, 2020
      </span>
    );
    return (
      <div>
        <Banner
          darkTheme={this.state.darktheme}
          title="Welcome to 30 Days Of React"
          headerOne="Getting Started React"
          headerTwo="JavaScript Library"
          content={content}
        />
        <Portfolio
          darkTheme={this.state.darktheme}
          onButtonClicked={this.changeTheme}
        />
        <Footer
          darkTheme={this.state.darktheme}
          content="Copyright Suyog, 2020"
        />
      </div>
    );
  }
}
export default DayEight;
