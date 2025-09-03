import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showDown, setShowDown] = useState(false);

  const clikShowDown = () => {
    setShowDown(!showDown);
  };
  return (
    <Container fluid className="bg-light border-bottom">
      <Row fluid className="justify-content-center p-0">
        <Col xs={12} md={10} lg={8} className="p-0">
          <Navbar expand="lg" className="bg-body-light h6">
            <Container
              fluid
              className="d-flex justify-content-center align-items-center"
            >
              <Navbar.Brand href="#">
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.8rem", color: "#0A66C2" }}
                ></i>
              </Navbar.Brand>
              <Form
                className="d-none d-md-flex mx-3 flex-grow-1 "
                style={{ maxWidth: "300px" }}
              >
                <Form.Control
                  type=" search"
                  placeholder="🔍 Cerca"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
              </Form>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mx-auto my-2 my-lg-0 justify-content-center"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <div className="d-flex border-end">
                    <Nav.Link
                      as={Link}
                      to="/home"
                      className="d-flex flex-column align-items-center mx-3"
                    >
                      <i
                        className="bi bi-house-door-fill"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.75rem" }}>Home</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#lavoro"
                      className="d-flex flex-column align-items-center mx-3"
                    >
                      {" "}
                      <i
                        className="bi bi-people-fill"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.75rem" }}>Rete</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#lavoro"
                      className="d-flex flex-column align-items-center mx-3"
                    >
                      <i
                        className="bi bi-briefcase-fill"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#messaggi"
                      className="d-flex flex-column align-items-center mx-3"
                    >
                      <i
                        className="bi bi-chat-dots-fill"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.75rem" }}>Messaggistica</span>
                    </Nav.Link>
                    <Nav.Link
                      href="#notifiche"
                      className="d-flex flex-column align-items-center mx-3"
                    >
                      <i
                        className="bi bi-bell-fill"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
                    </Nav.Link>
                    <NavDropdown
                      title={
                        <img
                          src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
                          alt="avatar"
                          className="rounded-circle d-flex flex-column align-items-center mx-4"
                          style={{
                            width: "25px",
                            height: "25px",
                            objectFit: "cover",
                          }}
                        />
                      }
                      id="nav-avatar-dropdown"
                      align="end"
                    >
                      <NavDropdown.Item as={Link} to="/profile">
                        Profilo
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#impostazioni">
                        Impostazioni
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <div className="d-flex align-items-start position-relative">
                    <div
                      className="d-flex flex-column align-items-center mx-2 text-center"
                      onClick={clikShowDown}
                    >
                      <i
                        className="bi bi-layout-text-window bi bi-compass-fill d-flex mx-2 fs-4 my-2"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <span style={{ fontSize: "0.80rem" }}>
                        Per le aziende
                      </span>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {showDown ? (
            <div
              className="bg-white rounded-3 shadow-lg position-fixed z-1 offset-md-3"
              style={{
                marginTop: "1.2rem",
                minWidth: "50px",
                maxWidth: "750px",
              }}
            >
              <div className="d-flex  p-5">
                <div className="border-end me-3 pe-3">
                  <div className="mb-4">
                    <h5>
                      <strong>Le mie app</strong>
                    </h5>
                  </div>
                  <div>
                    <div className="d-flex">
                      <i
                        className="blue-link bi bi-compass-fill d-flex mx-2 fs-3 mb-2"
                        href="compass"
                      ></i>
                      <h5 className="d-flex align-self-center">Trova Lead</h5>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center my-3">
                      <i className="blue-link bi bi-chat-dots-fill mb-2 mx-2 fs-3"></i>
                      <h5 className="d-flex align-self-center">Gruppi</h5>
                    </div>
                  </div>
                  <NavDropdown.Header>Talent</NavDropdown.Header>
                  <div>
                    <div className="d-flex align-items-center my-3">
                      <i className="blue-link bi bi-briefcase-fill  mb-2 mx-2 fs-3"></i>
                      <h5 className="ms-2 d-flex align-items-center">
                        <strong>Pubblica un'offerta di lavoro</strong>
                      </h5>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex  my-4">
                      <i className="blue-link bi bi-file-earmark-bar-graph mx-2 mb-2 fs-3"></i>
                      <h5 className="ms-2 d-flex align-self-center">
                        <strong>Talent Insights</strong>
                      </h5>
                    </div>
                  </div>
                  <NavDropdown.Header>Vendite</NavDropdown.Header>
                  <div>
                    <div className="d-flex my-4">
                      <i className="blue-link  bi bi-check-square mx-2 mb-2 fs-3"></i>
                      <h5 className="ms-2 d-flex align-self-center">
                        <strong>Marketplace dei servizi</strong>
                      </h5>
                    </div>
                  </div>
                  <NavDropdown.Header>Marketing</NavDropdown.Header>
                  <div>
                    <div className="d-flex my-4">
                      <i className="blue-link bi bi-arrow-up-left-circle mx-2 mx-2 mb-2 fs-3"></i>
                      <h5 className="ms-2 d-flex align-self-center">
                        <strong>Pubblicizza</strong>
                      </h5>
                    </div>
                  </div>
                  <NavDropdown.Header>Learning</NavDropdown.Header>
                  <div>
                    <div className="d-flex my-4">
                      <i className="blue-link bi bi-play-btn mx-2 mb-2 fs-3"></i>
                      <h5 className="ms-2 d-flex align-self-center">
                        <strong>Learning</strong>
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>
                    <strong>Scopri altro per il business</strong>
                  </h5>

                  <div>
                    <p className="fs-5">Assumi su Linkedin</p>
                    <p className="fs-6">Trova,assumi</p>
                  </div>
                  <div>
                    <p className="fs-5">Vendi con Linkedin</p>
                    <p className="fs-6">Sblocca nuove opportunità di vendita</p>
                  </div>
                  <div>
                    <p className="fs-5">offerta di lavoro gratuita</p>
                    <p className="fs-6">
                      Ottieni rapidamente candidati qualificati
                    </p>
                  </div>
                  <div>
                    <p className="fs-5">Fai pubblicità su Linkedin</p>
                    <p className="fs-6">
                      Acquisisci clienti e fai crescere la tua azineda
                    </p>
                  </div>
                  <div>
                    <p className="fs-5">Inizia con Premium</p>
                    <p className="fs-6">Amplia e sfrutta la tua rete</p>
                  </div>
                  <div>
                    <p className="fs-5">Impara conLinkedin</p>
                    <p className="fs-6">Corsi per formare i tuoi dipendenti</p>
                  </div>
                  <div>
                    <p className="fs-5">Centro per amministratori</p>
                    <p className="fs-6">
                      Gestisci i dettagli di fatturazione e account
                    </p>
                  </div>
                  <div>
                    <p className="fs-5">Crea una pagina azinedale +</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};
export default NavBar;
