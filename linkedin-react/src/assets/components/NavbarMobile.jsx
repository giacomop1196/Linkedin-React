import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/MediaQueries.css";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNavBar = () => {
  const profileData = useSelector((state) => state.profile.data);

  const location = useLocation();

  return (
    <>
      {profileData && (
        <Container
          fluid
          className="z-1 bg-white sticky-navbar d-md-none d-lg-none"
        >
          <Row className="justify-content-center p-0">
            <Col xs={12} md={10} lg={8} className="p-0">
              <Navbar expand="lg" className="bg-body-light h6">
                <Container
                  fluid
                  className="d-flex justify-content-center align-items-center"
                >
                  <Nav
                    className="mx-auto my-2 my-lg-0 justify-content-center"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <div className="d-flex">
                      <div className="d-flex flex-column align-items-center mx-4 mt-2">
                        {" "}
                        <i
                          className={
                            location.pathname === "/"
                              ? "blue-link bi bi-house-door-fill"
                              : "bi bi-house-door-fill"
                          }
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                        <Link
                          className={
                            location.pathname === "/"
                              ? "blue-link"
                              : "text-black"
                          }
                          to="/"
                        >
                          <span style={{ fontSize: "0.75rem" }}>Home</span>
                        </Link>
                      </div>
                      <div className="d-flex flex-column align-items-center mx-4 mt-2">
                        {" "}
                        <i
                          className="bi bi-people-fill"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                        <Link className="text-black">
                          <span style={{ fontSize: "0.75rem" }}>Rete</span>
                        </Link>
                      </div>
                      <div className="d-flex flex-column align-items-center mx-4 mt-2">
                        <i
                          className={
                            location.pathname === "/jobs"
                              ? "blue-link bi bi-briefcase-fill"
                              : "bi bi-briefcase-fill"
                          }
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                        <Link
                          className={
                            location.pathname === "/jobs"
                              ? "blue-link"
                              : "text-black"
                          }
                          to="/jobs"
                        >
                          <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
                        </Link>
                      </div>

                      <div className="d-flex flex-column align-items-center mx-4 mt-2">
                        <i
                          className="bi bi-bell-fill"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                        <Link className="text-black">
                          <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
                        </Link>
                      </div>
                    </div>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default MobileNavBar;
