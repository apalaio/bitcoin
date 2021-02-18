import React, { useState, useEffect, Children } from "react";
import { getData } from "../services/Cryptocompare";
import { convertDate } from "../helpers/TimeConversion";
import { getCurrentPageData } from "../helpers/GetCurrentPageData";
import PageButtons from "./PageButtons";
import TableContainer from "./TableContainer";

function App() {
  const [dataArray, setDataArray] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [currentPageData, setCurrentPageData] = useState([]);

  const resultsPerPage = 20;
  const totalPages = Math.ceil(dataArray.length / resultsPerPage);

  useEffect(() => {
    async function getArray() {
      setDataArray(await getData());
      console.log(dataArray);
      return dataArray;
    }
    if (!dataArray.length) {
      getArray();
    }

    if (dataArray.length) {
      // console.log(
      //   "dataArray.length got accessed",
      //   dataArray.length,
      //   Boolean(dataArray)
      // );
      setCurrentPageData(
        getCurrentPageData(currentPage, dataArray, resultsPerPage)
      );
    }
  }, [currentPage, dataArray]);

  /** 2 USEEFFECTS 
  // useEffect(() => {
  //   async function getArray() {
  //     setDataArray(await getData());
  //     console.log(dataArray);
  //     return dataArray;
  //   }

  //   getArray();
  //   setCurrentPageData(
  //     getCurrentPageData(currentPage, dataArray, resultsPerPage)
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log("just entered 2nd useEffect ");
  //   if (dataArray.length) {
  //     console.log(
  //       "dataArray.length got accessed",
  //       dataArray.length,
  //       Boolean(dataArray)
  //     );
  //     setCurrentPageData(
  //       getCurrentPageData(currentPage, dataArray, resultsPerPage)
  //     );
  //   }
  // }, [currentPage, dataArray]);
  */

  console.log("how many times?", currentPageData[0]);

  return (
    <div className="App">
      {dataArray && currentPageData.length ? (
        <>
          <TableContainer currentPageData={currentPageData} />
          <PageButtons
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

// The API returns 101 days worth of data in ASCENDING time
// That means the most current date is LAST (index 100)
// Which in turns means that, to display results i have to iterate
// through the days object in REVERSE order, starting from index 100

//Entry #101 is the current date
//Every 00.00 (12am) UTC/GMT a new day is added

// //IF current day does not show with the rest of the results:
// const tableData = [...dataArray];
// const currentDay = tableData.pop();
