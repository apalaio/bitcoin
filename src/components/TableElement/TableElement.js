import React from "react";
import { convertDate } from "../../helpers/TimeConversion";
import { getStyledDiff } from "../../helpers/StyleHelper";
import { getTruncatedNumber } from "../../helpers/NumberTruncate";
import "./TableElement.css";

const TableElement = ({ day, rowNum }) => {
  const highLowDiff = day.high - day.low;
  const truncatedHLDiff = getTruncatedNumber(highLowDiff, 2);
  const styledHLDiff = getStyledDiff(highLowDiff);

  const openCloseDiff = day.close - day.open;
  const truncatedOCDiff = getTruncatedNumber(openCloseDiff, 2);
  const styledOCDiff = getStyledDiff(openCloseDiff);

  return (
    <tr>
      <td>{rowNum}</td>
      <td>{convertDate(day.time)}</td>
      <td>{day.high}</td>
      <td>{day.low}</td>
      <td
        className={`${styledHLDiff.classColor}`}
      >{`${styledHLDiff.symbol}${truncatedHLDiff}`}</td>
      <td>{day.open}</td>
      <td>{day.close}</td>
      <td
        className={`${styledOCDiff.classColor}`}
      >{`${styledOCDiff.symbol}${truncatedOCDiff}`}</td>
    </tr>
  );
};

export default TableElement;
