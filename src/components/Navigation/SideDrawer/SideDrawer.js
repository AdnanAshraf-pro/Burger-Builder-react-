import React from "react";
import Aux from "../../../hoc/Aux";
import Logo from "../../Logo/Logo";
import BackDrop from "../../Ui/BackDrop/BackDrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
function SideDrawer(props) {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="LogoDiv2">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;
