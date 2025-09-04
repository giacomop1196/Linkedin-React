import { Modal, Button, ToastContainer, Toast } from "react-bootstrap";
import { useState, useEffect } from 'react';

const DeletePost = ({ show, closeModal, postId, refreshPost }) => {

  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLinkDeletePost = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

  useEffect(() => {
    if (toastShow) {
      const timer = setTimeout(() => {
        setToastShow(false);
      }, 5000); // Il toast scompare dopo 5 secondi
      return () => clearTimeout(timer);
    }
  }, [toastShow]);

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
          console.log("Post eliminato con successo!");
          closeModal();
          refreshPost();
          setToastMessage('Post eliminato con successo!');
          setToastVariant('success');
          setToastShow(true);
        } else {
          setToastMessage('Puoi eliminare solo i tuoi post!');
          setToastVariant('danger');
          setToastShow(true);
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

      {/* Messaggio di conferma */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={toastShow} onClose={() => setToastShow(false)} bg={toastVariant}>
          <Toast.Header>
            <strong className="me-auto">Notifica</strong>
          </Toast.Header>
          <Toast.Body className={toastVariant === 'danger' ? 'text-white' : ''}>
          <i className={toastVariant === 'danger' ? 'bi bi-exclamation-triangle' : 'bi bi-check-circle'}></i>  {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default DeletePost;