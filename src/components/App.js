import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData } from "../services/Cryptocompare";
import { getCurrentPageData } from "../helpers/GetCurrentPageData";
import AppContainer from "./AppContainer";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [dataArray, setDataArray] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [currentPageData, setCurrentPageData] = useState([]);

  const resultsPerPage = 20;
  const totalPages = Math.ceil(dataArray.length / resultsPerPage);

  useEffect(() => {
    async function getArray() {
      setDataArray(await getData());
      return dataArray;
    }
    if (!dataArray.length) {
      getArray();
    }

    if (dataArray.length) {
      setCurrentPageData(
        getCurrentPageData(currentPage, dataArray, resultsPerPage)
      );
    }
  }, [currentPage, dataArray]);

  return (
    <>
      {dataArray && currentPageData.length ? (
        <>
          <AppContainer
            currentPageData={currentPageData}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            resultsPerPage={resultsPerPage}
          />
        </>
      ) : (
        <Spinner
          animation="grow"
          role="status"
          style={{
            position: "fixed",
            margin: "auto",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
          }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </>
  );
}

export default App;
