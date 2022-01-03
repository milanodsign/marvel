import React from "react";
import closeModalBtn from "../assets/images/btn-close.png";
import addFavouritesD from "../assets/images/btn-favourites-default.png";
import addFavouritesP from "../assets/images/btn-favourites-primary.png"
import addShoppingCart from "../assets/images/shopping-cart-primary.png";
import btnCloseModal from "../assets/images/btnCloseModal.png";
import ViewMore from "./ViewMore";
import ComicFav from "./ComicFav";

const Modals = (props) => {
  const closeModal = () => {
    props.setModalVisible(false);
    document.body.style.overflowY = "auto";
    if (props.viewMore === true) {
      props.setViewMore(false);
    }
  };

  const addToFav = (data) => {
    props.setComicFavourites([...props.comicFavourites, data]);
  };

  if (props.comicFavourites.length !== 0) {
    for (let i = 0; i < props.comicFavourites.length; i++) {
      if (
        props.comicRes &&
        props.comicRes.find(
          (element) => element.id === props.comicFavourites[i].id
        )
      ) {
        props.setAddedFav(true);
      } else {
        props.setAddedFav(false);
      }
    }
  }

  return (
    <div
      className={
        props.modalVisible === true
          ? "modalContentBack fadeIn"
          : "modalContentBack fadeOut"
      }
    >
      <div className="modal">
        <img
          className="btnCloseModal"
          src={closeModalBtn}
          alt="Close"
          onClick={() => closeModal()}
        />
        <div className="modalBody">
          {props.viewMore === true ? (
            <ViewMore
              marvelHeros={props.marvelHeros}
              idPerson={props.idPerson}
            />
          ) : (
            <ComicFav
              uriComicData={props.uriComicData}
              setComicRes={props.setComicRes}
              comicRes={props.comicRes}
            />
          )}
        </div>
        <div className="modalFooter">
          {props.viewMore === true ? (
            <div className="closeModalVM" onClick={() => closeModal()}>
              <span className="btnFooter">
                <img src={btnCloseModal} alt="" />
                <span>CLOSE</span>
              </span>
            </div>
          ) : (
            <>
              <div className={props.addedFav === false ? "addComic" : "addComic addedFav"}>
                {props.addedFav === false ? (
                  <span
                    className="btnFooter"
                    onClick={() => addToFav(props.comicRes[0])}
                  >
                    <img src={addFavouritesD} alt="" />
                    <span>ADD TO FAVOURITES</span>
                  </span>
                ) : (
                  <span className="btnFooter">
                    <img src={addFavouritesP} alt="" />
                    <span>ADDED TO FAVOURITES</span>
                  </span>
                )}
              </div>
              <div className="buyComic">
                {!props.comicRes ? (
                  <span className="btnFooter buyFor">
                    <img src={addShoppingCart} alt="" />
                    <span>Without price</span>
                  </span>
                ) : !props.comicRes[0].prices[0] ? (
                  <span className="btnFooter buyFor">
                    <img src={addShoppingCart} alt="" />
                    <span>BUY FOR ${props.comicRes[0].prices[1].price}</span>
                  </span>
                ) : (
                  <span className="btnFooter buyFor">
                    <img src={addShoppingCart} alt="" />
                    <span>BUY FOR ${props.comicRes[0].prices[0].price}</span>
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modals;
