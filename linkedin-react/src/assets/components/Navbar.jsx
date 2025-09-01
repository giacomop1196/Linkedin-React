

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container,Row,Col} from 'react-bootstrap';

const NavBar= ()=>{
    return (
       <Container fluid className='bg-light border-bottom'>
            <Row className="justify-content-center p-0">
                <Col xs={12} md={10} lg={8} className='p-0'>
         <Navbar expand="lg" className="bg-body-light h6">
      <Container fluid className='d-flex justify-content-center align-items-center'>
        <Navbar.Brand href="#"><i class="bi bi-linkedin" style={{fontSize:"1.8rem",color: "#0A66C2"}}></i></Navbar.Brand>
          <Form className="d-none d-md-flex mx-3 flex-grow-1 " style={{ maxWidth: "300px" }}>
            <Form.Control
              type=" search"
              placeholder="🔍 Cerca"
              className="me-2"
              aria-label="Search"
              classNamer='rounded-pill'
            />
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='d-flex border-end'>
            <Nav.Link href="#lavoro" className="d-flex flex-column align-items-center mx-3"> <i className="bi bi-house-door-fill" style={{ fontSize: "1.5rem" }}></i>
              <span style={{ fontSize: "0.75rem" }}>Home</span></Nav.Link>
            <Nav.Link href="#lavoro" className="d-flex flex-column align-items-center mx-3">  <i className="bi bi-people-fill" style={{ fontSize: "1.5rem" }}></i>
              <span style={{ fontSize: "0.75rem" }}>Rete</span></Nav.Link>
                    <Nav.Link href="#lavoro" className="d-flex flex-column align-items-center mx-3">
              <i className="bi bi-briefcase-fill" style={{ fontSize: "1.5rem" }}></i>
              <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
            </Nav.Link>
                  <Nav.Link href="#messaggi" className="d-flex flex-column align-items-center mx-3">
              <i className="bi bi-chat-dots-fill" style={{ fontSize: "1.5rem" }}></i>
              <span style={{ fontSize: "0.75rem" }}>Messaggistica</span>
            </Nav.Link>
               <Nav.Link href="#notifiche" className="d-flex flex-column align-items-center mx-3">
              <i className="bi bi-bell-fill" style={{ fontSize: "1.5rem" }}></i>
              <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
            </Nav.Link>
              <NavDropdown
              title={
                <img
                  src="https://via.placeholder.com/32" 
                  alt="avatar"
                  className="rounded-circle d-flex flex-column align-items-center mx-4"
                  style={{ width: "25px", height: "25px", objectFit: "cover" }}
                  />
                }
                id="nav-avatar-dropdown"
                align="end"
                >
                  
              <NavDropdown.Item href="#profilo">Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#impostazioni">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
            </NavDropdown>
            </div>
           
  
  <div className="d-flex align-items-start position-relative">
  <div className="d-flex flex-column align-items-center me-1">
    <i className="bi bi-layout-text-window" style={{ fontSize: "1.5rem" }}></i>
    <span style={{ fontSize: "0.75rem" }}>Per le aziende</span>
  </div>

  
  <NavDropdown  id="nav-dropdown-apps"   className="align-self-start"
    style={{ marginTop: '1.2rem' }}>
        <div>
    <NavDropdown.Item className="border-bottom">
      <h5><strong>Le mie app</strong></h5>
    </NavDropdown.Item>
    <NavDropdown.Item>
        <i className="bi bi-compass-fill d-flex my-1" href='compass'><h5 className='ms-2'>Trova Lead</h5></i>
      
    </NavDropdown.Item>
    <NavDropdown.Item>
        <i class="bi bi-chat-dots-fill"><h5>Gruppi</h5></i>
     
    </NavDropdown.Item>
    <NavDropdown.Header>Talent</NavDropdown.Header>
    <NavDropdown.Item>
      <h5><strong>Pubblica un'offerta di lavoro</strong></h5>
    </NavDropdown.Item>
    <NavDropdown.Item>
      <h5><strong>Talent Insights</strong></h5>
    </NavDropdown.Item>
    <NavDropdown.Header>Vendite</NavDropdown.Header>
    <NavDropdown.Item>
      <h5><strong>Marketplace dei servizi</strong></h5>
    </NavDropdown.Item>
    <NavDropdown.Header>Marketing</NavDropdown.Header>
    <NavDropdown.Item>
      <h5><strong>Pubblicizza</strong></h5>
    </NavDropdown.Item>
    <NavDropdown.Header>Learning</NavDropdown.Header>
    <NavDropdown.Item>
      <h5><strong>Learning</strong></h5>
    </NavDropdown.Item>
    </div>
    
  </NavDropdown>
</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    </Row>
</Container>
     
    )
}
export default NavBar
          




              
       
          