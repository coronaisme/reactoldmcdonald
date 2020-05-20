import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles.css";
import Form from "./CreateAnimalForm.js";
import Pens from './Pens.js';


// [ { title:"animal species", animals: [1,2,3...], } ] pen
// [ { id:1, species:"species", gender:"gender", name:"name", image:"image" } ] animals


function App() {


  const [pens, setPensState] = useState([ { title:"cow", animals:[1] } ])

  const [animals, setAnimalsState] = useState([ 
  { id:1, species:"cow", gender:"female", name:"jason", image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fcd%2F26%2F3a%2Fcd263af1e1af8d0de15ba2ee25afdded.jpg&f=1&nofb=1"  }, 
  { id:2, species:"pig", gender:"male", name:"david", image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2018%2F04%2F180427-pig-brains-outside-body-feature.jpg%3Fquality%3D90%26strip%3Dall%26w%3D1200&f=1&nofb=1"  } 
  ])



  return (
    <div className="App">
     <Container className="farm">
        <Row>
          <Col><h1>McDonalds Farm in React</h1></Col>
        </Row>
        <Row>
          <Col><Form /></Col> 
        </Row>    
        <Row>
         <Col><Pens pens={pens} animals={animals} /></Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
