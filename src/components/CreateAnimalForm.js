import React, { useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

function CreateAnimalForm({ addAnimalToFarm, currentBiggestId }) {
  const [formInputs, setFormInputs] = useState({
    species: "",
    name: "",
    gender: { male: true, female: false },
    image: "",
  });

  const handleCreateAnimalClick = (e) => {
    e.preventDefault();
    let animal = {
      species: formInputs.species,
      name: formInputs.name,
      gender: formInputs.gender.male ? "male" : "female",
      image:
        formInputs.image === ""
          ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.agoramedia.com%2Feverydayhealth%2Fgcms%2Fanimals-that-can-cure-human-diseases-08-pg-full.jpg&f=1&nofb=1"
          : formInputs.image,
      id: currentBiggestId + 1,
    };
    addAnimalToFarm(animal);

    setFormInputs({
      species: "",
      name: "",
      gender: { male: true, female: false },
      image: "",
    });
  };

  const handleSelect = (animalImgURL) => {
    setFormInputs({
      ...formInputs,
      image:animalImgURL
    })
  };

  return (
    <Form>
      <Form.Group controlId="formSpecies">
        <Form.Label>Species</Form.Label>
        <Form.Control
          value={formInputs.species}
          type="text"
          placeholder="Enter Species"
          onChange={(e) =>
            setFormInputs({ ...formInputs, species: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={formInputs.name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }
        />
      </Form.Group>

      {/* <Form.Group controlId="formImage">
        <Form.Label>Image Url</Form.Label>
        <Form.Control value={formInputs.image} type="text" placeholder="Enter Image Url"  onChange={(e) => setFormInputs({ ...formInputs, image: e.target.value })} />
      </Form.Group> */}

      <DropdownButton
        drop="right"
        onSelect={handleSelect}
        alignRight
        title="Select Image"
      >
        <Dropdown.Item
          style={{ marginRight: "10px", marginLeft: "10px" }}
          eventKey="https://cdn.drawception.com/drawings/lLM8KLSdZj.png"
        >
          <img
            alt="cow"
            style={{ width: "125px", height: "125px" }}
            src="https://cdn.drawception.com/drawings/lLM8KLSdZj.png"
          />
        </Dropdown.Item>
        <Dropdown.Item
          style={{ marginRight: "10px", marginLeft: "10px" }}
          eventKey="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9U_EiXJkmQGp8Joc388B9XqhLC881vZUsGcSsGK2OzjCrLzy&usqp=CAU"
        >
          <img
            alt="pig"
            style={{ width: "125px", height: "125px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9U_EiXJkmQGp8Joc388B9XqhLC881vZUsGcSsGK2OzjCrLzy&usqp=CAU"
          />
        </Dropdown.Item>
        <Dropdown.Item
          style={{ marginRight: "10px", marginLeft: "10px" }}
          eventKey="https://static.turbosquid.com/Preview/001238/305/1V/chicken-cartoon-3D-model_D.jpg"
        >
          <img
            alt="chicken"
            style={{ width: "125px", height: "125px" }}
            src="https://static.turbosquid.com/Preview/001238/305/1V/chicken-cartoon-3D-model_D.jpg"
          />
        </Dropdown.Item>
        <Dropdown.Item
          style={{ marginRight: "10px", marginLeft: "10px" }}
          eventKey="https://i.pinimg.com/originals/07/ac/e8/07ace8310c35169ba45101d608ca47bc.jpg"
        >
          <img
            alt="sheep"
            style={{ width: "125px", height: "125px" }}
            src="https://i.pinimg.com/originals/07/ac/e8/07ace8310c35169ba45101d608ca47bc.jpg"
          />
        </Dropdown.Item>
      </DropdownButton>

      {/* function App() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
      
      <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
} */}

      <Form.Group controlId="formGender">
        <Form.Check
          type="radio"
          aria-label="radio 1"
          inline
          label="Male"
          checked={formInputs.gender.male}
          onChange={() =>
            setFormInputs({
              ...formInputs,
              gender: {
                ...formInputs.gender,
                male: !formInputs.gender.male,
                female: !formInputs.gender.female,
              },
            })
          }
        />
        <Form.Check
          type="radio"
          aria-label="radio 2"
          inline
          label="Female"
          checked={formInputs.gender.female}
          onChange={() =>
            setFormInputs({
              ...formInputs,
              gender: {
                ...formInputs.gender,
                female: !formInputs.gender.female,
                male: !formInputs.gender.male,
              },
            })
          }
        />
      </Form.Group>

      <Button variant="primary" type="click" onClick={handleCreateAnimalClick}>
        Create Animal
      </Button>
    </Form>
  );
}

export default CreateAnimalForm;
