import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import DeleteExperience from "./deleteExperiece";

function ModalEditExperience({
  showEdit,
  closeEditModal,
  userId,
  experienceId,
  getExperencies,
}) {
  const [resultExperencie, setResultExperencie] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLink = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;
  const editApiLink = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;

  const [formValues, setFormValues] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // useEffect dopo che il modale viene aperto
  useEffect(() => {
    if (showEdit && userId && experienceId) {
      fetch(apiLink, {
        method: "GET",
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
        .then((experience) => {
          setResultExperencie(experience);
        })
        .catch((error) => {
          console.error("Errore nel recupero dei dati:", error);
        });
    }
  }, [showEdit, userId, experienceId, apiKey]);

  console.log('id esperienza:' , experienceId)

  // Questo useEffect popola il form non appena i dati dell'esperienza sono disponibili
  useEffect(() => {
    if (resultExperencie) {
      setFormValues({
        role: resultExperencie.role || "",
        company: resultExperencie.company || "",
        // Formattare bene la data
        startDate: resultExperencie.startDate
          ? resultExperencie.startDate.split("T")[0]
          : "",
        endDate: resultExperencie.endDate
          ? resultExperencie.endDate.split("T")[0]
          : "",
        description: resultExperencie.description || "",
        area: resultExperencie.area || "",
      });
    }
  }, [resultExperencie]);

  const changeValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Funzione per modificare un esperienza
  const editExperience = (e) => {
    e.preventDefault();
    fetch(editApiLink, {
      method: "PUT",
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
        throw new Error("Errore nell'aggiornamento dei dati");
      })
      .then((updatedExperience) => {
        console.log(updatedExperience, "Esperienza aggiornata:");
        closeEditModal();
        getExperencies(userId);
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento dei dati:", error);
      });
  };

  if (showEdit == false) {
    return null;
  }

  return (
    <Modal show={showEdit} onHide={closeEditModal}>
      <Modal.Header>
        <Modal.Title>Modifica l'esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={editExperience}>
          <Form.Group className="mb-3">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={formValues.role}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Azienda</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formValues.company}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={formValues.startDate}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di fine</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={formValues.endDate}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrivi il tuo ruolo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formValues.description}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Città</Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={formValues.area}
              onChange={changeValues}
              required
            />
          </Form.Group>
          <div className="d-flex w-100 justify-content-between">
            <DeleteExperience
              profile_id={userId}
              experience_id={experienceId}
              closeEditModal={closeEditModal}
              getExperencies={getExperencies}
            />
            <div>
              <Button
                variant="secondary"
                onClick={closeEditModal}
                className="me-2"
              >
                Chiudi
              </Button>
              <Button variant="primary" type="submit">
                Salva Cambiamenti
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditExperience;
