import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ModalFooter } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ModalAddPost = ({ show, closeModal, refreshPost }) => {
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
        refreshPost();
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
          <Modal.Header>
            <Modal.Title>Ciao {profileData.name} </Modal.Title>
          </Modal.Header>
          <Form onSubmit={addPost} style={{ minHeight: "300px" }}>
            <Modal.Body>
              <Form.Control
                as="textarea"
                style={{ minHeight: "300px" }}
                placeholder="Di cosa vorresti parlare?"
                autoFocus
                name="text"
                value={formValues.text}
                onChange={changeValues}
                required
              />
            </Modal.Body>
            <div className="ms-2 mb-2 d-flex gap-3 px-3 pointer">
              <i className="bi bi-emoji-smile"></i>{" "}
            </div>

            <div className="ms-2 mb-2 d-flex gap-3 px-3">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-image">
                    Aggiungi un contenuto multimediale
                  </Tooltip>
                }
              >
                <i
                  className="bi bi-image fs-4"
                  style={{ cursor: "pointer", color: "grey" }}
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-image">Crea un evento </Tooltip>}
              >
                <i
                  className="bi bi-calendar3 fs-4"
                  style={{ cursor: "pointer", color: "grey" }}
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-image">
                    Festeggia un'occasione speciale{" "}
                  </Tooltip>
                }
              >
                <i
                  className="bi bi-patch-check-fill fs-4"
                  style={{ cursor: "pointer", color: "grey" }}
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-image">Altro </Tooltip>}
              >
                <i
                  className="bi bi-plus-lg fs-4"
                  style={{ cursor: "pointer", color: "grey" }}
                ></i>
              </OverlayTrigger>
            </div>
            <ModalFooter>
              <div>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-image">
                      Programma per un secondo momento{" "}
                    </Tooltip>
                  }
                >
                  <i className="bi bi-clock"></i>
                </OverlayTrigger>
              </div>
              <Button
                variant="secondary-subtle"
                onClick={closeModal}
                className="rounded-pill"
              >
                Chiudi
              </Button>
              <Button
                variant="secondary-subtle"
                type="submit"
                className="rounded-pill bg-dark-subtle px-4"
              >
                Pubblica
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ModalAddPost;
