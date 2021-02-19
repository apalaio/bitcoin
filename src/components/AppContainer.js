import React from "react";
import { convertDate } from "../helpers/TimeConversion";
import PageButtons from "./PageButtons";
import TableContainer from "./TableContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";

const AppContainer = ({
  currentPageData,
  totalPages,
  currentPage,
  setCurrentPage,
  resultsPerPage,
}) => {
  return (
    <Container fluid="md">
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          <b>USD/BTC</b>
        </h3>
        <span>
          {`${convertDate(currentPageData[0].time)} -
            ${convertDate(currentPageData[currentPageData.length - 1].time)}`}
        </span>
      </Row>
      <Row>
        <TableContainer
          resultsPerPage={resultsPerPage}
          currentPageData={currentPageData}
          currentPage={currentPage}
        />
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <PageButtons
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Row>
    </Container>
  );
};

export default AppContainer;
