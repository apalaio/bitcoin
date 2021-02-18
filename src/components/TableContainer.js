import React from "react";
import { convertDate } from "../helpers/TimeConversion";

const TableContainer = ({ currentPageData }) => {
  return (
    <>
      <span>USD/BTC</span>
      <span>
        {convertDate(currentPageData[0].time)} -
        {convertDate(currentPageData[currentPageData.length - 1].time)}
      </span>
    </>
  );
};

export default TableContainer;
