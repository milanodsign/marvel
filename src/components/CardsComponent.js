import React from "react";
import characters from "../assets/images/characters.png";

const CardsComponent = (props) => {
  return (
    <>
      <div className="topContent">
        <div>
          <img src={characters} alt="" />
          <h2>Characters</h2>
        </div>
        <div>
          <select name="" id="">
            <option value="">Sort by</option>
          </select>
        </div>
      </div>
      <div className="listCards">
        {props.marvelHeros &&
          props.marvelHeros.map((item, i) => (
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
                  <span className="btnViewMore">View More</span>
                </span>
              </div>
              <div className="comicList">
                <h3>Related comics</h3>
                <div className="contComicsTitles">
                  {item.comics.items &&
                    item.comics.items.slice(0, 4).map(
                      (comic, ind) =>
                        <span key={ind}>{comic.name}</span>
                    )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardsComponent;
