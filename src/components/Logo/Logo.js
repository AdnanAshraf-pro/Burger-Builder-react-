import React from "react";
import LogoImg from "../../assets/images/133 burger-logo.png";
import "./Logo.css";
function Logo() {
  return (
    <div className="Logo">
      <img src={LogoImg} alt="my logo" />
    </div>
  );
}

export default Logo;
