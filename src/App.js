import React, { useState, useEffect } from "react";
import "./css/App.css";
import Loading from "./components/Loading";
import TopMenu from "./components/TopMenu";
import CardsComponent from "./components/CardsComponent";
import Favourites from "./components/Favourites";
import Modals from "./components/Modals";

const App = () => {
  const credentials =
    "ts=1&apikey=b02b74954698fd91cb1ff51056fe7fa9&hash=d01c42364e4db3b09879cb33abe1edf4";
  const [marvelHeros, setMarvelHeros] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage, setPersonPerPage] = useState(20);

  const [modalVisible, setModalVisible] = useState(false);

  const [viewMore, setViewMore] = useState(false);
  const [idPerson, setIdPerson] = useState();

  const [uriComicData, setUriComicData] = useState();
  const [comicRes, setComicRes] = useState();

  const [comicFavourites, setComicFavourites] = useState([]);
  const [addedFav, setAddedFav] = useState(false);

  const Uri =
    "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&" +
    credentials;
  const fetchMarvel = async () => {
    await fetch(Uri)
      .then((response) => response.json())
      .then((response) => {
        setMarvelHeros(response.data.results);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetchMarvel();
    setLoading(false);
  }, []);

  const indexOfLastPerson = currentPage * personPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personPerPage;
  const currentPersons =
    marvelHeros && marvelHeros.slice(indexOfFirstPerson, indexOfLastPerson);
  return (
    <div className="App">
      <Modals
        {...{
          marvelHeros,
          modalVisible,
          setModalVisible,
          viewMore,
          setViewMore,
          idPerson,
          uriComicData,
          setComicRes,
          comicRes,
          uriComicData,
          comicFavourites,
          setComicFavourites,
          addedFav,
          setAddedFav,
        }}
      />
      <TopMenu {...{ credentials, marvelHeros, setMarvelHeros }} />
      <div className="container">
        <div className="contLeft">
          {!marvelHeros === true ? (
            <Loading />
          ) : (
            <CardsComponent
              {...{
                credentials,
                marvelHeros,
                currentPersons,
                setModalVisible,
                setViewMore,
                setIdPerson,
                personPerPage,
                currentPage,
                setCurrentPage,
                setPersonPerPage,
                setUriComicData,
                setComicRes,
                comicFavourites,
              }}
            />
          )}
        </div>
        <div className="contRight">
          <Favourites
            {...{ comicFavourites, setComicFavourites, setAddedFav }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
