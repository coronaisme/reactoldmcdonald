import React from "react";
import Pen from "./Pen.js";
import { Row, Col } from "react-bootstrap";

function Pens({ animals, pens, slaughter }) {
  return (
    <Row>
      {pens.map((pen) => (
        <Col key={Math.random()}>
          <Pen
            style={{ height: "490px" }}
            slaughter={slaughter}
            pen={pen}
            animals={animals}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Pens;
