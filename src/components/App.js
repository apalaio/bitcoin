import React, { useState, useEffect } from "react";
import { getData } from "../services/Cryptocompare";
import { convertDate } from "../helpers/TimeConversion";
import PageButtons from "./PageButtons";

function App() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    async function getArray() {
      setDataArray(await getData());
      console.log(dataArray);
    }
    getArray();
  }, []);

  console.log("outside effect log ", dataArray);
  console.table(dataArray);

  return (
    <div className="App">
      {dataArray ? (
        // dataArray.map(day => {
        //   return <p>{convertDate(day.time)}</p>;
        // })
        <PageButtons dataArray={dataArray} />
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

//Page buttons can be hardcoded as 5 for the excercise, OR
// pages can be dynamically created, depending on how many
// we are getting from the API. (#results/#results per page)

//the current page button should be disabled. If there is no
//previous/ next page, then previous/next button should be
//disabled accordingly
