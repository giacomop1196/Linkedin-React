
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar= ()=>{
    return (
         <Navbar expand="lg" className="bg-body-light h4">
      <Container fluid className='d-flex justify-content-center align-items-center'>
        <Navbar.Brand href="#"><i class="bi bi-linkedin" style={{fontSize:"1.8rem",color: "#0A66C2"}}></i></Navbar.Brand>
          <Form className="d-none d-md-flex mx-5 flex-grow-1 rounded-pill" style={{ maxWidth: "300px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}
export default NavBar
          

              
       
          