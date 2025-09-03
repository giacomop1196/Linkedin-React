import { Card, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const LeftSidebar = () => {

  const profileData = useSelector((state) => state.profile.data);

  const navigate = useNavigate();

  const goToProfile = () => {

    navigate('/profile');
  };

  return (
    <>
      {/* Profile Card */}
      {profileData &&
        <Card className="mb-3 shadow-sm border-0">
          <div className="position-relative">
            {/* Background Image */}
            <div
              className="bg-primary"
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

      {/* Profile Analytics */}
      <Card className="mb-3 shadow-sm border-0">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0 fw-semibold">Visitatori del profilo</h6>
              <p className="mb-0 text-muted small">9</p>
            </div>
            <Button variant="link" className="p-0 text-primary">
              Visualizza tutte le analisi
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Premium Offer */}
      <Card className="mb-3 shadow-sm border-0">
        <Card.Body className="p-3">
          <h6 className="mb-2 fw-semibold">Trova lavoro più velocemente con Premium</h6>
          <p className="small text-muted mb-3">
            Prova di nuovo per 0 EUR
          </p>
          <Button variant="primary" size="sm" className="w-100 rounded-pill">
            Prova Premium
          </Button>
        </Card.Body>
      </Card>

      {/* Navigation Links */}
      <Card className="mb-3 shadow-sm border-0">
        <Card.Body className="p-3">
          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-bookmark me-3 text-muted"></i>
            <span className="small">Elementi salvati</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-people me-3 text-muted"></i>
            <span className="small">Gruppi</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-newspaper me-3 text-muted"></i>
            <span className="small">Newsletter</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-calendar-event me-3 text-muted"></i>
            <span className="small">Eventi</span>
          </div>
        </Card.Body>
      </Card>

    </>
  );
};

export default LeftSidebar;
