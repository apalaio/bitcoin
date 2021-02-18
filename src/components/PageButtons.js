import React from "react";

const PageButtons = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageClick = num => {
    console.log("button was clicked", num, currentPage);
    setCurrentPage(num);
  };

  const prevClick = () => {
    setCurrentPage(--currentPage);
    console.log("previous page", currentPage);
  };

  const nextClick = () => {
    setCurrentPage(++currentPage);
    console.log("next page", currentPage);
  };

  return (
    <>
      <button onClick={prevClick} disabled={currentPage === 1}>
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            key={index}
            disabled={currentPage === index + 1}
            onClick={e => {
              pageClick(Number(e.currentTarget.innerText));
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <button onClick={nextClick} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </>
  );
};

export default PageButtons;
