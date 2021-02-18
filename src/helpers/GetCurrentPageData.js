export const getCurrentPageData = (currentPage, dataArray, resultsPerPage) => {
  let firstIndex = dataArray.length - 1 - resultsPerPage * (currentPage - 1);
  let lastIndex = dataArray.length - resultsPerPage * currentPage;
  if (lastIndex < 0) {
    lastIndex = 0;
  }
  console.log(firstIndex, lastIndex);

  let currentPageData = dataArray
    .filter((_, index) => {
      return index <= firstIndex && index >= lastIndex;
    })
    .reverse();

  // console.log("dataArray", dataArray);
  // console.log("currentPageData", currentPageData);

  return currentPageData;
};
