import React from 'react';
import Pen from "./Pen.js";
import { Row, Col } from 'react-bootstrap';



function Pens({ animals, pens }) {



  return (
   
      <Row>

        {pens.map(pen => <Col key={Math.random()}><Pen pen={pen} animals={animals}/></Col>)}

      </Row>
   
  )
}

export default Pens;