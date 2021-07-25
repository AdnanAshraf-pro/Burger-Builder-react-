import React from "react";

import "./NavigationItem.css";

function NavigationItem(props) {
  return (
    <li className="NavigationItem">
      <a href={props.link} className={props.active ? props.active : null}>
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;
