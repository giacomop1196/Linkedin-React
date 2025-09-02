import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteExperience = ({
  profile_id,
  experience_id,
  closeEditModal,
  getExperencies,
}) => {
  const [showModal, setShowModal] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLinkExperiences = `https://striveschool-api.herokuapp.com/api/profile/${profile_id.profile_id}/experiences/${experience_id}`;

  const handleDelete = () => {
    fetch(apiLinkExperiences, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Esperienza eliminata con successo!");
          closeEditModal();
          getExperencies(profile_id);
        } else {
          throw new Error("Errore nella cancellazione dell'esperienza");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
      })
      .finally(() => {
        setShowModal(false); // Chiude il modale in ogni caso
      });
  };

  return (
    <>
      <p className="me-2 pointer" onClick={() => setShowModal(true)}>
        Elimina Esperienza
      </p>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Conferma Eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler eliminare questa esperienza? Questa azione non può
          essere annullata.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteExperience;