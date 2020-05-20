import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";



function CreateAnimalForm({ addAnimalToFarm, currentBiggestId }) {


  const [ formInputs, setFormInputs ] = useState({ species:"", name:"", gender:{male:true, female:false}, image:"" })


  const handleCreateAnimalClick = (e) => {
    e.preventDefault()
    let animal = {
      species: formInputs.species,
      name: formInputs.name,
      gender: formInputs.gender.male ? "male" : "female",
      image: formInputs.image === "" ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.agoramedia.com%2Feverydayhealth%2Fgcms%2Fanimals-that-can-cure-human-diseases-08-pg-full.jpg&f=1&nofb=1" : formInputs.image,
      id: currentBiggestId + 1
    }
      addAnimalToFarm(animal)
    
      setFormInputs({ species:"", name:"", gender:{male:true, female:false}, image:"" })
  }


  return (
    <Form>

      <Form.Group controlId="formSpecies">
        <Form.Label>Species</Form.Label>
        <Form.Control value={formInputs.species} type="text" placeholder="Enter Species" onChange={(e) => setFormInputs({ ...formInputs, species: e.target.value })} />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={formInputs.name} type="text" placeholder="Enter Name" onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })} />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image Url</Form.Label>
        <Form.Control value={formInputs.image} type="text" placeholder="Enter Image Url"  onChange={(e) => setFormInputs({ ...formInputs, image: e.target.value })} />
      </Form.Group>

      {/* CHANGING TO DROPDOWN */}


      <Form.Group controlId="formGender">
        <Form.Check type="radio" aria-label="radio 1" inline label="Male" checked={formInputs.gender.male} onChange={() => setFormInputs({ ...formInputs, gender: { ...formInputs.gender, male: !formInputs.gender.male, female:!formInputs.gender.female } })}/>
        <Form.Check type="radio" aria-label="radio 2" inline label="Female"  checked={formInputs.gender.female} onChange={() => setFormInputs({ ...formInputs, gender: { ...formInputs.gender, female: !formInputs.gender.female, male:!formInputs.gender.male } })} />
      </Form.Group>


      <Button variant="primary" type="click" onClick={handleCreateAnimalClick} >
        Create Animal
      </Button>
    </Form>
  )
}

export default CreateAnimalForm;