import React from "react";
import "./BackDrop.css";

const BackDrop = (props) =>
  props.show ? <div className={"BackDrop"} onClick={props.clicked} /> : null;

export default BackDrop;
