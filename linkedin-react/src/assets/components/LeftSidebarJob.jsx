import { Card, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const LeftSidebarJob = () => {

  const profileData = useSelector((state) => state.profile.data);

  const navigate = useNavigate();

  const goToProfile = () => {

    navigate('/profile');
  };

  return (
    <>
      {/* Profile Card */}
      {profileData &&
        <Card className="mb-3 shadow-sm border-0 rounded-3">
          <div className="position-relative">
            {/* Background Image */}
            <div
              className="bg-primary rounded-top-3"
              style={{
                height: '60px',
                background: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)'
              }}
            ></div>
            {/* Profile Picture */}
            <div className="position-absolute" style={{ top: '30px', left: '50%', transform: 'translateX(-50%)' }}>
              <Image src={profileData.image}
                roundedCircle
                style={{ width: '80px', height: '80px', border: '3px solid white' }}
              />
            </div>
          </div>
          <Card.Body className="pt-5 text-center">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <Link to="/profile" className='text-black'><h5 className="mb-0 me-2">{profileData.name} {profileData.surname}</h5></Link>
              <i className="bi bi-patch-check-fill text-primary"></i>
            </div>
            <p className="text-muted small mb-2">
              Sviluppatore JAVA | PHP | Laravel | MySQL | HTML5 | CSS | JavaScript | React
            </p>
            <p className="text-muted small mb-3">
              <i className="bi bi-geo-alt me-1"></i>
              Italia
            </p>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Image
                src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
                style={{ width: '20px', height: '20px' }}
                className="me-2"
              />
              <span className="small text-muted">EPICODE Institute of Technology</span>
            </div>
            <Button onClick={goToProfile} variant="outline-primary" size="sm" className="w-100 rounded-pill mb-2">
              Mostra profilo
            </Button>
          </Card.Body>
        </Card>
      }

      {/* Navigation Links */}
      <Card className="mb-3 shadow-sm border-0 rounded-3">
        <Card.Body className="p-3">
          <div className="d-flex align-items-center mb-3 pointer">
            <i className="bi bi-list me-3"></i>
            <span>Preferenze</span>
          </div>
          <div className="d-flex align-items-center mb-3 pointer">
            <i className="bi bi-bookmark-fill me-3"></i>
            <span>Le mie offerte di lavoro</span>
          </div>
          <div className="d-flex align-items-center mb-3 border-bottom pb-3 pointer">
            <i className="bi bi-slash-square-fill me-3"></i>
            <span>Le mie informazioni sulla carriera</span>
          </div>

          <div className="d-flex align-items-center mb-3 blue-link fw-bold pointer">
            <i className="bi bi-pencil-square me-3"></i>
            <span>Pubblica offerta gratuita</span>
          </div>
        </Card.Body>
      </Card>

      {/* Footer Links */}
      <div className="text-center">
        <div className="d-flex flex-wrap justify-content-center mb-1">
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Informazioni</Button>
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Accessibilità</Button>
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Centro assistenza</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-1">
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Privacy e condizioni</Button>
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Opzioni per gli annunci pubblicitari</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-1">
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Pubblicità</Button>
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Servizi alle aziende</Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-1">
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Scarica l'app LinkedIn</Button>
          <Button variant="link" className="p-0 text-muted small text-decoration-none mx-2">Altro</Button>
        </div>
        <p className="small text-muted mb-0">
          LinkedIn LinkedIn Corporation © 2025
        </p>
      </div>

    </>
  );
};

export default LeftSidebarJob;
