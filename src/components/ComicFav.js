import React, { useEffect } from "react";
import Loading from "./Loading";

const ComicFav = (props) => {
  return (
    <>
      {!props.comicRes ? (
        <div className="loadingComicView">
          <Loading />
        </div>
      ) : (
        <div className="viewMore comicFav">
          {props.comicRes &&
            props.comicRes.map((item, i) => (
              <div key={i}>
                <div className="contImgViewMore">
                  <span>
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt=""
                    />
                  </span>
                </div>
                <div className="contDescViewMore">
                  <h2>{item.title}</h2>
                  {item.description === null || item.description === "" ? (
                    <p className="noDescription">Without description</p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ComicFav;
