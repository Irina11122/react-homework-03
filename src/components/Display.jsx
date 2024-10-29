import { useState } from "react";
import cardOnePic from "/card1.jpg";
import cardTwoImg from "/card2.jpg";
import cardThreeImg from "/card3.jpg";
import cardFourImg from "/card4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Display() {
  const [display, setDisplay] = useState("flex");

  return (
    <Container>
      <div>
        {" "}
        <Button
          variant="secondary"
          className="mb-4"
          onClick={() => {
            setDisplay(display === "flex" ? "none" : "flex");
          }}
        >
          {" "}
          Hide Images{" "}
        </Button>
        <Row style={{ display: display }}>
          <Col xl="3" xs="12">
            {" "}
            <Card>
              {" "}
              <Card.Img src={cardOnePic} />{" "}
            </Card>
          </Col>{" "}
          <Col xl="3" xs="12">
            {" "}
            <Card>
              <Card.Img src={cardTwoImg} />{" "}
            </Card>
          </Col>{" "}
          <Col xl="3" xs="12">
            {" "}
            <Card>
              <Card.Img src={cardThreeImg} />{" "}
            </Card>
          </Col>{" "}
          <Col xl="3" xs="12">
            {" "}
            <Card>
              <Card.Img src={cardFourImg} />{" "}
            </Card>
          </Col>{" "}
        </Row>
      </div>
    </Container>
  );
}
