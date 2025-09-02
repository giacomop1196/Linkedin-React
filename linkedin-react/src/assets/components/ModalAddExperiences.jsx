{
  /*  "role": "Full Stack Web Developer",
  "company": "FizzBuzz",
  "startDate": "2022-06-16",
  "endDate": "2023-06-16", // può essere null
  "description": "Implementing new features",
  "area": "Milan",*/
}

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function AddExperiences({ show, closeModal, userId, getExperencies }) {
  
  const [formValues, setFormValues] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const changeValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const addExperiences = (e) => {
    e.preventDefault();
    const apiLinkExperiences = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    fetch(apiLinkExperiences, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Errore nel recupero dei dati");
      })
      .then((experiences) => {
        console.log(experiences, "Dati esperienza aggiunti:");
        closeModal();
        // Resetta i valori del form.
        setFormValues({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        getExperencies(userId)
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  };
  if (show == false) {
    return null;
  }
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Aggiungi Esperienze</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addExperiences}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aggiungi il tuo ruolo"
                autoFocus
                name='role'
                value={formValues.role}
                onChange={changeValues}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aggiungi l'azienda"
                autoFocus
                name='company'
                value={formValues.company}
                onChange={changeValues}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                name='startDate'
                value={formValues.startDate}
                onChange={changeValues}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                name='endDate'
                value={formValues.endDate}
                onChange={changeValues}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrivi il tuo ruolo</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name='description'
                value={formValues.description}
                onChange={changeValues}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Città</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dove?"
                autoFocus
                name='area'
                value={formValues.area}
                onChange={changeValues}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="file"
                autoFocus
           
              />
            </Form.Group>
            <Button variant="primary" type="submit" >Salva Cambiamenti</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperiences;
