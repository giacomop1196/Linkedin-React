import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

const InputSearchMobile = ({ handleSearch, searchQuery }) => {
  return (
    <Navbar className="bg-body-tertiary justify-content-between  d-md-none  d-lg-none">
      <Form
        onSubmit={handleSearch}
        className="d-none d-md-flex mx-3 flex-grow-1"
        style={{ maxWidth: "300px" }}
      >
        <Form.Control
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type=" search"
          placeholder="🔍 Cerca"
          className="me-2 rounded-pill"
          aria-label="Search"
        />
      </Form>
    </Navbar>
  );
};
export default InputSearchMobile;
