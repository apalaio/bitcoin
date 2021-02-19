import React from "react";
import TableElement from "./TableElement/TableElement";
import Table from "react-bootstrap/Table";

const TableContainer = ({ currentPageData, resultsPerPage, currentPage }) => {
  const numberOffset = resultsPerPage * (currentPage - 1);
  return (
    <Table striped bordered hover responsive="md">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>High</th>
          <th>Low</th>
          <th>High-Low</th>
          <th>Open</th>
          <th>Close</th>
          <th>Close-Open</th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((day, index) => {
          return (
            <TableElement
              day={day}
              rowNum={index + 1 + numberOffset}
              key={index}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableContainer;
