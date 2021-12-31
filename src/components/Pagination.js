import React from "react";

const Pagination = (props) => {
  const pageNumber = [];
  const arrowLeft = "❮";
  const arrowRight = "❯";
  for (let i = 1; i <= Math.ceil(props.cantHeros / props.personPerPage); i++) {
    pageNumber.push(i);
  }
  const moveLeft = () => {
    if (props.currentPage != 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };
  const moveRight = () => {
    if (props.currentPage != pageNumber.length) {
      props.setCurrentPage(props.currentPage + 1);
    }
  };
  return (
    <div>
      <span className={props.currentPage != 1 && "active"} onClick={() => moveLeft()}>{arrowLeft}</span>
      {pageNumber &&
        pageNumber.map((item) => (
          <span className={props.currentPage === item && "active"} key={item} onClick={() => props.setCurrentPage(item)}>
            {item}
          </span>
        ))}
      <span className={props.currentPage != pageNumber.length && "active"} onClick={() => moveRight()}>{arrowRight}</span>
    </div>
  );
};

export default Pagination;
