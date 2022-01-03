import React from "react";
import favourites from "../assets/images/favourites.png";
import btnDelete from "../assets/images/btn-delete.png";

const Favourites = (props) => {
  const deleteFav = async (id, title) => {
    if (
      window.confirm("Do you really want to delete the comic " + title + "?")
    ) {
      props.setComicFavourites(
        await props.comicFavourites.filter((item) => item.id !== id)
      );
      props.setAddedFav(false);
    }
  };
  return (
    <>
      <div className="topContent">
        <img src={favourites} alt="" />
        <h2>My favourites</h2>
      </div>
      <div className="contComicFav">
        {props.comicFavourites.length === 0 ? (
          <p className="noFav">There are no favorites</p>
        ) : (
          props.comicFavourites &&
          props.comicFavourites.map((item, i) => (
            <span key={i}>
              <img
                className="btnDel"
                src={btnDelete}
                alt=""
                title="Delete"
                onClick={() => deleteFav(item.id, item.title)}
              />
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
              />
              <p>{item.title}</p>
            </span>
          ))
        )}
      </div>
    </>
  );
};

export default Favourites;
