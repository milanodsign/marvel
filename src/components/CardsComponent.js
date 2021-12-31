import React, { useState } from "react";
import characters from "../assets/images/characters.png";
import Pagination from "./Pagination";

const CardsComponent = (props) => {
  const openModalViewMore = (id) => {
    document.body.style.overflowY = "hidden";
    props.setModalVisible(true);
    props.setViewMore(true);
    props.setIdPerson(id);
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
            <option value="20">Sort by</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
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
                  <p>{item.description}</p>
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
                    item.comics.items
                      .slice(0, 4)
                      .map((comic, ind) => <span key={ind}>{comic.name}</span>)}
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
