import React, { useState } from "react";

import "./Pagination.scss";

export const Pagination = ({ currentPage, disabled, lastPage, callback }) => {
  const [page, setPage] = useState(currentPage);

  const onClickNext = () => {
    setPage((prevPage) => {
      const next = prevPage + 1;
      callback(next);

      return next;
    });
  };

  const onClickPrev = () => {
    setPage((prevPage) => {
      const next = prevPage - 1;
      callback(next);

      return next;
    });
  };

  return (
    <div className="Pagination">
      <button
        className="Pagination__Button"
        disabled={disabled || page === 1}
        onClick={onClickPrev}
      >
        prev
      </button>
      <span className="Pagination__Status">
        {page} of {lastPage}
      </span>
      <button
        className="Pagination__Button"
        disabled={disabled || page === lastPage}
        onClick={onClickNext}
      >
        next
      </button>
    </div>
  );
};
