import React from "react";
import closeModalBtn from "../assets/images/btn-close.png";
import addFavouritesD from "../assets/images/btn-favourites-default.png";
import addShoppingCart from "../assets/images/shopping-cart-primary.png";
import btnCloseModal from "../assets/images/btnCloseModal.png";
import ViewMore from "./ViewMore";

const Modals = (props) => {
  const closeModal = () => {
    props.setModalVisible(false);
    document.body.style.overflowY = "auto";
    if (props.viewMore === true) {
      props.setViewMore(false);
    }
  };
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
        <div
          className="modalBody"
        >
          {props.viewMore === true && (
            <ViewMore
              marvelHeros={props.marvelHeros}
              idPerson={props.idPerson}
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
              <div className="addComic">
                <span className="btnFooter">
                  <img src={addFavouritesD} alt="" />
                  <span>ADD TO FAVOURITES</span>
                </span>
              </div>
              <div className="buyComic">
                <span className="btnFooter buyFor">
                  <img src={addShoppingCart} alt="" />
                  <span>BUY FOR $00,00</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modals;
