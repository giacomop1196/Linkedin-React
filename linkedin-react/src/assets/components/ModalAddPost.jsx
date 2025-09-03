import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalAddPost = ({ show, handleClose, userName }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ciao {userName}, di cosa vuoi parlare?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Scrivi qui il tuo post...</p>
        {/* Puoi aggiungere un form o input qui */}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary">Pubblica</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddPost;
