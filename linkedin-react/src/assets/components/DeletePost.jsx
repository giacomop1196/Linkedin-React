import { Modal, Button } from "react-bootstrap";

const DeletePost = ({ show, closeModal, postId, refreshPost }) => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLinkDeletePost = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

  const handleDelete = () => {
    fetch(apiLinkDeletePost, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Esperienza eliminata con successo!");
          closeModal();
          refreshPost();
        } else {
          throw new Error("Errore nella cancellazione del post");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
      })
      .finally(() => {
        closeModal(); // Chiude il modale in ogni caso
      });
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Conferma Eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler eliminare questo post? Questa azione non può
          essere annullata.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
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

export default DeletePost;