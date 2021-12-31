import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const ViewMore = (props) => {
  const [personaje, setPersonaje] = useState();
  const personF = async () => {
    setPersonaje(
      await props.marvelHeros.filter((item) => item.id === props.idPerson)
    );
  };
  useEffect(async () => {
    await personF();
  }, []);
  return (
    <>
      {!personaje ? (
        <Loading />
      ) : (
        <div className="viewMore">
          <div className="contImgViewMore">
            <span>
              <img
                src={`${personaje[0].thumbnail.path}.${personaje[0].thumbnail.extension}`}
                alt=""
              />
            </span>
          </div>
          <div className="contDescViewMore">
            <h2>{personaje[0].name}</h2>
            {personaje[0].description === "" ? (
              <p className="noDescription">
                Without description
              </p>
            ) : (
              <p>{personaje[0].description}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ViewMore;
