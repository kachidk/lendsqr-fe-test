import React from "react";
import "./index.scss";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  perPage: number;
  total: number;
  changePage: (page: number) => void;
  currentPage: number;
  setPerPage: (perPage: number) => void;
};

export const UsersPagination: React.FC<Props> = ({
  className,
  style,
  perPage,
  total,
  changePage,
  currentPage,
  setPerPage,
}) => {
  function handleNewPerPage(newPerPage: number) {
    setPerPage(newPerPage);
    changePage(1);
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={["users-page__users-pagination", className].join(" ")}
      style={{ ...style }}
    >
      <div className="users-page__users-pagination__per-page">
        <div className="users-page__users-pagination__per-page__text">
          Showing
        </div>

        <select
          name="cars"
          id="cars"
          className="users-page__users-pagination__per-page__select"
          onChange={(e) => handleNewPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </select>

        <div className="users-page__users-pagination__per-page__text">
          out of 100
        </div>
      </div>

      <div>page {currentPage}</div>

      <div className="users-page__users-pagination__buttons">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="users-page__users-pagination__buttons__prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="users-page__users-pagination__buttons__center-wrapper">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => changePage(number)}
              className="users-page__users-pagination__buttons__center"
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
          className="users-page__users-pagination__buttons__next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
