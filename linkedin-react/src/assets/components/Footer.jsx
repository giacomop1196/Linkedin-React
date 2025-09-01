import { Row, Col, Container, Dropdown } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid className="px-4 py-5">
        <Row>
          <Col className="footer-column">
            <div className="d-flex flex-column ">
              <a href="#" className="ms-2">
                Informazioni
              </a>
              <a href="#" className="ms-2">
                Informativa sulla Community Professionale
              </a>

              <Dropdown className="mt-2 ">
                <Dropdown.Toggle className="btn-white btn-sm">
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Contratto di licenza{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Informativa sui cookie{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Informativa sul copyright{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Contratto di licenza{" "}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Opzioni relative all'informative sulla privacy (Stato della
                    California){" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <a href="#" className="mt-2 ms-2">
                Sales Solutions
              </a>
              <a href="#" className="mt-2 ms-2">
                Centro Sicurezza
              </a>
            </div>
          </Col>

          <Col className="footer-column">
            <div className="d-flex flex-column">
              <a href="#">Accessibilità</a>
              <a href="#">Carriera</a>
              <a href="#">Opzioni per gli annunci pubblicitari</a>
              <a href="#">Mobile</a>
            </div>
          </Col>

          <Col className="footer-column">
            <div className="d-flex flex-column">
              <a href="#">Talent Solutions</a>
              <a href="#">Soluzioni di marketing</a>
              <a href="#">Pubblicità</a>
              <a href="#">Piccole imprese</a>
            </div>
          </Col>

          <Col>
            <div className="footer-icon-block">
              <i className="bi bi-question-circle-fill"></i>
              <div>
                <p className="mp">Domande?</p>
                <a href="#">Visita il nostro centro assistenza.</a>
              </div>
            </div>

            <div className="footer-icon-block">
              <i className="bi bi-gear-fill"></i>
              <div>
                <p className="mp">Gestisci il tuo account e la tua privacy</p>
                <a href="#">Vai alle impostazioni.</a>
              </div>
            </div>

            <div className="footer-icon-block">
              <i className="bi bi-shield-slash"></i>
              <div>
                <p className="mp">Trasparenza sui contenuti consigliati.</p>
                <a href="#">Scopri di più sui contenuti consigliati.</a>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="mb-2">Seleziona Lingua</div>
            <Dropdown className="lng">
              <Dropdown.Toggle className="btn-white" id="dropdown-basic">
                Italiano (Italiano){" "}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  Spagnolo (Spanish)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Inglese (English)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Francese(French)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-muted ">
            Linkedin Corporation &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
