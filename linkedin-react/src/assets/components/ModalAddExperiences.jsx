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

function AddExperiences({ show, closeModal }) {
  if (show == false) {
    return null;
  }
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Experiences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Add previous company" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description of your role</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" placeholder="Where.." autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperiences;
