import React from "react";
import logo from "../assets/images/logoCircle.png";

const Loading = () => {
  return (
    <div style={{height:'calc(100vh - 135px)'}}>
      <div className="loading">
        <img id="loading" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loading;
