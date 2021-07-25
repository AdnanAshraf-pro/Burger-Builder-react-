import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../Ui/Button/Button";

function OrderSummary(props) {
  let ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igkey}:
        </span>{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>

      <p>A delicious Burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total price: Rs <strong>{props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelHandler}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
}

export default OrderSummary;
