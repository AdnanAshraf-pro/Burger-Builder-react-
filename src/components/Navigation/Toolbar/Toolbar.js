import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "./Toolbar.css";
function Toolbar(props) {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.DrawerToggleClicked} />
      <div className="LogoDiv">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar;
