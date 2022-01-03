import React, { useState } from "react";
import logo from "../assets/images/Marvel_Logo.png";
import search from "../assets/images/search.png";
import burguer from "../assets/images/burguer.png";
import closeBurguer from "../assets/images/closeBurguer.png";

const TopMenu = (props) => {
  const [valueSearch, setValueSearch] = useState("");
  const fetchMarvelSearch = async (query) => {
    const Uri =
          "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&"+props.credentials
    const Uri2 = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&orderBy=name&limit=100&${props.credentials}`

    await fetch(query === "" ? Uri : Uri2)
      .then((response) => response.json())
      .then((response) => {
        props.setMarvelHeros(response.data.results);
      });
  };
  const showFav = () => {
    if (props.showFavourites === false) {
      props.setShowFavourites(true)
    } else {
      props.setShowFavourites(false)
    }
  }
  return (
    <div className="topMenu">
      <div className="contentLogo">
        <img src={logo} alt="" />
      </div>
      <div className="contSearch">
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Search character..."
            value={valueSearch}
            onChange={(evt) => {
              fetchMarvelSearch(evt.target.value);
              setValueSearch(evt.target.value);
            }}
          />
          <span>
            <img src={search} alt="" />
          </span>
        </div>
        <div className="burguer" onClick={() => showFav()}>
          <img src={props.showFavourites === true ? closeBurguer : burguer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
