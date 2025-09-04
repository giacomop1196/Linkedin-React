import { Card, Button, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const RightSidebar = () => {

  const profileData = useSelector((state) => state.profile.data);

  const newsItems = [
    {
      id: 1,
      title: "Venezia 82: racconti dal Lido",
      time: "15 ore fa",
      readers: "2.202 lettori"
    },
    {
      id: 2,
      title: "Leonardo Maria Del Vecchio rileva Bo...",
      time: "1 giorno fa",
      readers: "687 lettori"
    },
    {
      id: 3,
      title: "Licenziato il ceo di Nestlè",
      time: "20 ore fa",
      readers: "521 lettori"
    }
  ];

  return (
    <>
      {/* LinkedIn News */}
      <Card className="mb-3 shadow-sm border-0">
        <Card.Header className="bg-transparent border-0 pb-0">
          <h6 className="mb-0 fw-semibold">LinkedIn Notizie</h6>
          <p className="small text-muted mb-0">Storie principali</p>
        </Card.Header>
        <Card.Body className="pt-2">
          {newsItems.map((item, index) => (
            <div key={item.id} className={`${index < newsItems.length - 1 ? 'mb-2 pb-2 border-bottom' : ''}`}>
              <h6 className="small mb-1 fw-semibold">{item.title}</h6>
              <div className="d-flex justify-content-between align-items-center">
                <span className="small text-muted">{item.time}</span>
                <span className="small text-muted">{item.readers}</span>
              </div>
            </div>
          ))}
          <Button variant="link" className="p-0 text-primary small mt-1">
            Mostra altro
          </Button>
        </Card.Body>
      </Card>

      {/* Profile Update Ad */}
      {profileData && 
      <Card className="mb-2 shadow-sm border-0">
        <Card.Body className="p-2">
          <div className="d-flex align-items-center mb-2">
            <Image
              src={profileData.image}
              roundedCircle
              style={{ width: '35px', height: '35px' }}
              className="me-2"
            />
            <div className="flex-grow-1">
              <h6 className="mb-0 fw-semibold small">Finisci di aggiornare il tuo profilo</h6>
              <small className="text-muted">Annuncio</small>
            </div>
            <div
              className="bg-primary rounded d-flex align-items-center justify-content-center"
              style={{ width: '25px', height: '25px' }}
            >
              <i className="bi bi-linkedin text-white small"></i>
            </div>
          </div>
          <Button variant="outline-primary" size="sm" className="w-100 rounded-pill small">
            Le tue preferenze
          </Button>
        </Card.Body>
      </Card>
}

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

export default RightSidebar;
