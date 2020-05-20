import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";



function CreateAnimalForm() {


  const [ formInputs, setFormInputs ] = useState({ species:"", name:"", gender:{male:true, female:false}, image:"" })

  return (
    <Form>

      <Form.Group controlId="formSpecies">
        <Form.Label>Species</Form.Label>
        <Form.Control value={formInputs.species} type="text" placeholder="Enter Species" />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={formInputs.name} type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image Url</Form.Label>
        <Form.Control value={formInputs.image} type="text" placeholder="Enter Image Url" />
      </Form.Group>


      <Form.Group controlId="formGender">
        <Form.Check type="radio" aria-label="radio 1" inline label="Male" checked={formInputs.gender.male} onChange={() => setFormInputs({ ...formInputs, gender: { ...formInputs.gender, male: !formInputs.gender.male, female:!formInputs.gender.female } })}/>
        <Form.Check type="radio" aria-label="radio 2" inline label="Female"  checked={formInputs.gender.female} onChange={() => setFormInputs({ ...formInputs, gender: { ...formInputs.gender, female: !formInputs.gender.female, male:!formInputs.gender.male } })} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CreateAnimalForm;