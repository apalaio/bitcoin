import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const PageButtons = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageClick = num => {
    setCurrentPage(num);
  };

  const prevClick = () => {
    setCurrentPage(--currentPage);
  };

  const nextClick = () => {
    setCurrentPage(++currentPage);
  };

  return (
    <>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <Button onClick={prevClick} disabled={currentPage === 1}>
          &lt;
        </Button>

        <ButtonGroup aria-label="Page buttons" className="mr-2 ml-2">
          {[...Array(totalPages)].map((_, index) => {
            return (
              <Button
                key={index}
                disabled={currentPage === index + 1}
                onClick={e => {
                  pageClick(Number(e.currentTarget.innerText));
                }}
              >
                {index + 1}
              </Button>
            );
          })}
        </ButtonGroup>

        <Button onClick={nextClick} disabled={currentPage === totalPages}>
          &gt;
        </Button>
      </ButtonToolbar>
    </>
  );
};

export default PageButtons;
