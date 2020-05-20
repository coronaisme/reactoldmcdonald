import React from 'react';
import { Card, Button } from 'react-bootstrap';



function Animal({ animal: { id, species, gender, name, image }, slaughter, animal }) {

  const handleSlaughter = () => {

    slaughter(animal)

  }


  return (
   

      <Card style={{ width: '18rem', borderStyle:"solid", padding:"5px", borderRadius:"20px"}}>
        <Card.Img variant="top" src={`${image}`} width="200px" height="200px" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {species}
            <br/>
            {gender}
          </Card.Text>
          <Button onClick={handleSlaughter} variant="primary">SLAUGHTER</Button>
        </Card.Body>
      </Card>
        
    
  )
}

export default Animal;