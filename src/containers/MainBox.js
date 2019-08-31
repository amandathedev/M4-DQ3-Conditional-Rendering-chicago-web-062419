import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";
import { strict } from "assert";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "profile"
    };
  }

  changeState = page => {
    this.setState({
      page: page
    });
    console.log(this.state);
  };

  capitalize = (sting) => {
    return strict.charAt(0).toUpperCase() + strict.slice(1);
  }

  pageToRender = () => {
    return {capitalize(this.state.page)}
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar activeItem={this.state.page} changeState={this.changeState} />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
