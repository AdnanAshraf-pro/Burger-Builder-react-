import React from "react";
import Aux from "../../../hoc/Aux";
import BackDrop from "../BackDrop/BackDrop";
import "./Modal.css";
function Modal(props) {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className="Modal"
      >
        {props.children}
      </div>
    </Aux>
  );
}

export default Modal;
