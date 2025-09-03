import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const ModalEditPost = ({ show, closeModal, postId, refreshPost }) => {

  const profileData = useSelector((state) => state.profile.data);
  const apiLink = `https://striveschool-api.herokuapp.com/api/posts/${postId}`
  const apiKey = import.meta.env.VITE_API_KEY;

  const [resultPost, setResultPost] = useState(null);

  useEffect(() => {
    if (show && postId) {
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
        .then((post) => {
          setResultPost(post);
        })
        .catch((error) => {
          console.error("Errore nel recupero dei dati:", error);
        });
    }
  }, [show, postId, apiKey]);

  const [formValues, setFormValues] = useState({
    text: "",
  });


  useEffect(() => {
    if (resultPost) {
      setFormValues({
        text: resultPost.text || "",
      });
    }
  }, [resultPost]);

  const changeValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editPost = (e) => {

    e.preventDefault();

    fetch(apiLink, {
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
        throw new Error("Errore nel recupero dei dati");
      })
      .then((experiences) => {
        console.log(experiences, "Dati post modificati:");
        closeModal()
        refreshPost()
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
      {profileData &&
        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>Ciao {profileData.name}, di cosa vuoi parlare?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={editPost}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Modifica Testo</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Modifica il testo"
                  autoFocus
                  name='text'
                  value={formValues.text}
                  onChange={changeValues}
                  required
                />
              </Form.Group>
              <Button variant="secondary" onClick={closeModal}>
                Chiudi
              </Button>
              <Button variant="primary" type="submit">Pubblica</Button>
            </Form>
          </Modal.Body>
        </Modal>
      }
    </>
  );
};

export default ModalEditPost;
