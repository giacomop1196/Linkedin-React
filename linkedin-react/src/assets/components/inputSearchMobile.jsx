
import { Image, Navbar, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InputSearchMobile = () => {

  const profileData = useSelector((state) => state.profile.data);
  
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/jobs?search=${searchQuery}`);
    }
  };

  return (
    <Navbar className="bg-body-tertiary d-flex justify-content-center d-block d-md-none">
      <Image
        src={profileData.image}
        alt="avatar"
        className="rounded-circle d-flex flex-column align-items-center mb-0 p-0 pointer"
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
        }}
      />
      <Form
        onSubmit={handleSearch}
        className="mx-3 flex-grow-1 w-100"
        style={{ maxWidth: "300px" }}
      >
        <Form.Control
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type=" search"
          placeholder="🔍 Cerca"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <i className="bi bi-sort-down text-muted fs-3 me-3 pointer"></i>
      <i className="bi bi-chat-dots-fill text-muted fs-3 pointer"></i>
    </Navbar>
  );
};
export default InputSearchMobile;
