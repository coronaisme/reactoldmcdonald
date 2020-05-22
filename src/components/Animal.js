import React from "react";
import { Card, Button } from "react-bootstrap";


const cardStyles = {
  width: "18rem",
  borderStyle: "solid",
  padding: "5px",
  borderRadius: "20px"
}


function Animal({
  animal: { id, species, gender, name, image },
  slaughter,
  animal,
}) {
  const handleSlaughter = () => {
    slaughter(animal);
  };

  const handlePetting = () =>{
    let audio;
      if(species === 'cow'){
        audio = 'http://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3'
      } else if (species === 'chicken'){
        audio = 'http://soundbible.com/mp3/Rooster-SoundBible.com-1114473528.mp3'
      } else if(species === 'pig'){
        audio = 'http://soundbible.com/mp3/Pig Oink-SoundBible.com-1424738584.mp3'
      } else {
        audio = 'http://soundbible.com/mp3/Billy Goat Bleat-SoundBible.com-498372940.mp3'
      }
      let newAudio = new Audio(audio)
      newAudio.play()
      setTimeout(() => {
        newAudio.pause()
      }, 4000)
  }

  return (
    <Card
      style={cardStyles}
    >
      <Card.Img variant="top" src={`${image}`} width="200px" height="200px" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {species}
          <br />
          {gender}
        </Card.Text>
        <Button onClick={handleSlaughter} variant="primary">
          SLAUGHTER
        </Button><br/>
        <Button onClick={handlePetting} variant="primary">
          Pet Me!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Animal;
