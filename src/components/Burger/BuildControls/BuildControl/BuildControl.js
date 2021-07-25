import React from "react";
import "./BuildControl.css";
function BuildControl(props) {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        onClick={props.removeIngredient}
        disabled={props.disableInfo}
      >
        Less
      </button>
      <button className="More" onClick={props.ingredientAdded}>
        More
      </button>
    </div>
  );
}

export default BuildControl;
