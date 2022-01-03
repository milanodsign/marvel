import React from "react";
import characters from "../assets/images/characters.png";
import Pagination from "./Pagination";

const CardsComponent = (props) => {
  const openModalViewMore = (id) => {
    document.body.style.overflowY = "hidden";
    props.setModalVisible(true);
    props.setViewMore(true);
    props.setIdPerson(id);
  };
  const getComicData = async (uri) => {
    await fetch(uri)
      .then((response) => response.json())
      .then((response) => {
        props.setComicRes(response.data.results);
      });
  };

  const openModalFavourites = (resourceURI) => {
    document.body.style.overflowY = "hidden";
    props.setModalVisible(true);
    getComicData(resourceURI + "?" + props.credentials);
  };
  return (
    <>
      <div className="topContent">
        <div>
          <img src={characters} alt="" />
          <h2>Characters</h2>
        </div>
        <div>
          <select
            onChange={(evt) => {
              {
                props.setPersonPerPage(evt.target.value);
                props.setCurrentPage(1);
              }
            }}
          >
            <option value="20">Amount per page</option>
            {Array(5)
              .fill()
              .map((_, i) => (
                <option key={i} value={(i + 1) * 10}>
                  {(i + 1) * 10} per page
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="listCards">
        {props.currentPersons.length === 0 ? (
          <p>No matches</p>
        ) : (
          props.currentPersons &&
          props.currentPersons.map((item, i) => (
            <div key={i} className="card">
              <div className="topContentCard">
                <span>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                </span>
                <span>
                  <h2>{item.name}</h2>
                  {item.description !== "" ? (
                    <p>{item.description}</p>
                  ) : (
                    <p className="withoutDescription">Without description</p>
                  )}

                  <span
                    className="btnViewMore"
                    onClick={() => openModalViewMore(item.id)}
                  >
                    View More
                  </span>
                </span>
              </div>
              <div className="comicList">
                <h3>Related comics</h3>
                <div className="contComicsTitles">
                  {item.comics.items &&
                    item.comics.items.slice(0, 4).map((comic, ind) => (
                      <span
                        className="comicRelated"
                        key={ind}
                        onClick={() => openModalFavourites(comic.resourceURI)}
                      >
                        {comic.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <Pagination
          personPerPage={props.personPerPage}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          cantHeros={props.marvelHeros.length}
        />
      </div>
    </>
  );
};

export default CardsComponent;
