export const getCurrentPageData = (currentPage, dataArray, resultsPerPage) => {
  let firstIndex = dataArray.length - 1 - resultsPerPage * (currentPage - 1);
  let lastIndex = dataArray.length - resultsPerPage * currentPage;
  if (lastIndex < 0) {
    lastIndex = 0;
  }

  let currentPageData = dataArray
    .filter((_, index) => {
      return index <= firstIndex && index >= lastIndex;
    })
    .reverse();

  return currentPageData;
};
