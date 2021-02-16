import React, { useState } from "react";

const PageButtons = ({ dataArray }) => {
  const totalPages = Math.ceil((dataArray.length - 1) / 20);
  const currentDay = dataArray[dataArray.length - 1];

  let [currentPage, setCurrentPage] = useState(1);

  const pageClick = num => {
    console.log("button was clicked", num);
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
