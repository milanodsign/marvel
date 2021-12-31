import React, { useState, useEffect } from "react";
import "./css/App.css";
import Loading from "./components/Loading";
import TopMenu from "./components/TopMenu";
import CardsComponent from "./components/CardsComponent";
import Favorites from "./components/Favorites";

const App = () => {
  const [marvelHeros, setMarvelHeros] = useState();
  const Uri =
    "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&ts=1&apikey=b02b74954698fd91cb1ff51056fe7fa9&hash=d01c42364e4db3b09879cb33abe1edf4";
  const fetchMarvel = async () => {
    await fetch(Uri)
      .then((response) => response.json())
      .then((response) => {
        setMarvelHeros(response.data.results);
      });
  };
  useEffect(() => {
    fetchMarvel();
  }, []);

  return (
    <div className="App">
      <TopMenu />
      <div className="container">
        <div className="contLeft">
          {!marvelHeros ? <Loading /> : <CardsComponent marvelHeros={marvelHeros} />}
          {/* <Loading /> */}
        </div>
        <div className="contRight">
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default App;
