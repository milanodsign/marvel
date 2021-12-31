import React, { useState } from "react";
import logo from "../assets/images/Marvel_Logo.png";
import search from "../assets/images/search.png";

const TopMenu = (props) => {
  const [valueSearch, setValueSearch] = useState("");
  const fetchMarvelSearch = async (query) => {
    const Uri =
          "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&ts=1&apikey=b02b74954698fd91cb1ff51056fe7fa9&hash=d01c42364e4db3b09879cb33abe1edf4"
    const Uri2 = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&orderBy=name&limit=100&ts=1&apikey=b02b74954698fd91cb1ff51056fe7fa9&hash=d01c42364e4db3b09879cb33abe1edf4`

    await fetch(query === "" ? Uri : Uri2)
      .then((response) => response.json())
      .then((response) => {
        props.setMarvelHeros(response.data.results);
      });
      console.log(props.marvelHeros)
  };
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
      </div>
    </div>
  );
};

export default TopMenu;
