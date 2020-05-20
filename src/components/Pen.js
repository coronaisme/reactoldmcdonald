import React from 'react';
import Animal from './Animal.js'
import { Row, Col } from "react-bootstrap";
import { getAnimalsForPen } from '../utilites/utils.js';


// [ { title:"animal species", animals: [1,2,3...], } ] pen
// [ { id:1, species:"species", gender:"gender", name:"name", image:"image" } ] animals





function Pen({ pen, animals }) {

  let animalsForThisPen = getAnimalsForPen(animals, pen)
  
  
  return (
    <Row>
        {animalsForThisPen.map(animal => <Col key={animal.id}><Animal animal={animal} /></Col>)}
    </Row>
  )
}

export default Pen;