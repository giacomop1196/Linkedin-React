import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useState } from "react";

const ModalAddPost = ({ show, closeModal }) => {
  const profileData = useSelector((state) => state.profile.data);
  const apiLink = "https://striveschool-api.herokuapp.com/api/posts/";
  const apiKey = import.meta.env.VITE_API_KEY;

  const [formValues, setFormValues] = useState({
    text: "",
  });

  const changeValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addPost = (e) => {
    e.preventDefault();

    fetch(apiLink, {
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
        console.log(experiences, "Dati post aggiunti:");
        closeModal();
        // Resetta i valori del form.
        setFormValues({
          text: "",
        });
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  };

  return (
    <>
      {profileData && (
        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>Ciao {profileData.name} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={addPost}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Di cosa vorresti parlare?"
                  autoFocus
                  name="text"
                  value={formValues.text}
                  onChange={changeValues}
                  required
                />
              </Form.Group>
              <Button variant="secondary" onClick={closeModal}>
                Chiudi
              </Button>
              <Button variant="primary" type="submit">
                Pubblica
              </Button>
            </Form>
          </Modal.Body>
          <div>
            <i className="bi bi-emoji-smile"></i>{" "}
          </div>
          <div>
            <i className="bi bi-image"></i>
            <i className="bi bi-calendar3"></i>
            <i className="bi bi-patch-check-fill"></i>
            <i className="bi bi-plus-lg"></i>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalAddPost;
