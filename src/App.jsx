import Time from "./components/Time";
import Count from "./components/Count";
import Display from "./components/Display";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("flex");
  return (
    <Container
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      {" "}
      <Row>
        {" "}
        <Button
          onClick={() => setDisplay(display === "flex" ? "none" : "flex")}
          className="mb-5"
        >
          {" "}
          {display === "flex" ? "Hide Everything" : "Show Everything"}{" "}
        </Button>{" "}
      </Row>
      <Row style={{ display: display }}>
        <Col xl="6">
          {" "}
          <Time />
        </Col>
        <Col xl="6">
          {" "}
          <Count />{" "}
        </Col>
        <Col xl="12">
          <Display />
        </Col>
      </Row>
    </Container>
  );
}
