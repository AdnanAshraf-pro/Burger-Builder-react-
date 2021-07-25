import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

class LayoutFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }

  SideDrawerCloseHandler = () => {
    this.setState({ showDrawer: false });
  };
  DrawerToggleClicked = () => {
    this.setState((prevState) => {
      return { showDrawer: !prevState.showDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar DrawerToggleClicked={this.DrawerToggleClicked} />
        <SideDrawer
          open={this.state.showDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default LayoutFunction;
