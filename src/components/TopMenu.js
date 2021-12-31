import React from "react";
import logo from "../assets/images/Marvel_Logo.png";
import search from "../assets/images/search.png";

const TopMenu = () => {
  return (
    <div className="topMenu">
      <div className="contentLogo">
        <img src={logo} alt="" />
      </div>
      <div className="contSearch">
        <div className="inputGroup">
          <input type="text" placeholder="Search character..."/>
          <span>
            <img src={search} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
