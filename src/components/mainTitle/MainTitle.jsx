import React from "react";
import Logo from "../../assets/logo.svg";
import "./mainTitle.css";

const mainTitle = () => {
  return (
    <div className="main-title-container">
      <div className="lines-with-logo">

        <div className="line line1"></div>
        <div>
        <img src={Logo} alt="logo"  style={{ width: "100px", height: "50px", zIndex: "2"}}className="main-title-logo" />
        </div>
        
        <div className="line line2"></div>
      </div>
      <h1 className="main-title">Charles Cantin - photographe</h1>
      <div className="line line3"></div>
    </div>
  );
}; 

export default mainTitle;
