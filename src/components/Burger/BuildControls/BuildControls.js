import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
function BuildControls(props) {
  return (
    <div className="BuildControls">
      <p>
        Current price: Rs <strong>{props.price}</strong>
      </p>
      {controls.map((cntrl) => (
        <BuildControl
          label={cntrl.label}
          key={cntrl.label}
          ingredientAdded={() => props.ingredientAdded(cntrl.type)}
          removeIngredient={() => props.removeIngredient(cntrl.type)}
          disableInfo={props.disableInfo[cntrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchaseAble}
        onClick={props.purchaseHandler}
      >
        Order Now
      </button>
    </div>
  );
}

export default BuildControls;
