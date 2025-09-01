import React, { useState } from 'react';
import { Card, Button, Image, Modal, ListGroup } from 'react-bootstrap';

const RightSidebar = () => {
  // Stati per gestire i modal
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showUrlModal, setShowUrlModal] = useState(false);

  // Stati per i dati del profilo - ora con localStorage
  const [profileLanguage, setProfileLanguage] = useState(() => {
    // Carica la lingua salvata dal localStorage o usa 'Italiano' come default
    return localStorage.getItem('linkedinProfileLanguage') || 'Italiano';
  });

  const [profileUrl, setProfileUrl] = useState(() => {
    // Carica l'URL salvato dal localStorage o usa l'URL di default
    return localStorage.getItem('linkedinProfileUrl') || 'www.linkedin.com/in/giacomo-pillitteri';
  });

  const [tempUrl, setTempUrl] = useState('');

  // Lingue disponibili
  const availableLanguages = [
    'Italiano', 'English', 'Español', 'Français', 'Deutsch',
    'Português', '日本語', '한국어', '中文'
  ];

  // Profili suggeriti
  const suggestedProfiles = [
    {
      id: 1,
      name: 'Qualcuno presso Università degli studi...',
      image: 'https://via.placeholder.com/40x40/0077b5/ffffff?text=U'
    },
    {
      id: 2,
      name: 'Qualcuno presso Università degli studi...',
      image: 'https://via.placeholder.com/40x40/0077b5/ffffff?text=U'
    },
    {
      id: 3,
      name: 'Qualcuno presso Edgemony',
      image: 'https://via.placeholder.com/40x40/0077b5/ffffff?text=E'
    }
  ];

  // Funzione per gestire il cambio di lingua con salvataggio in localStorage
  const handleLanguageChange = (language) => {
    setProfileLanguage(language);
    // Salva la nuova lingua nel localStorage
    localStorage.setItem('linkedinProfileLanguage', language);
    setShowLanguageModal(false);
  };

  // Funzione per salvare il nuovo URL con salvataggio in localStorage
  const handleUrlSave = () => {
    setProfileUrl(tempUrl);
    // Salva il nuovo URL nel localStorage
    localStorage.setItem('linkedinProfileUrl', tempUrl);
    setShowUrlModal(false);
  };

  const handleUrlCancel = () => {
    setTempUrl(profileUrl);
    setShowUrlModal(false);
  };

  return (

    <>
      {/* Card Lingua del profilo */}
      <div>
        <Card className="mb-3 mt-4 shadow-sm border-0">
          <Card.Body className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0 fw-semibold text-dark">Lingua del profilo</h6>
              <Button
                variant="link"
                className="p-0 text-muted"
                onClick={() => setShowLanguageModal(true)}>
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
            <p className="mb-0 text-dark">{profileLanguage}</p>
          </Card.Body>
        </Card>

        {/* Card Profilo pubblico e URL */}
        <Card className="mb-3 shadow-sm border-0">
          <Card.Body className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0 fw-semibold text-dark">Profilo pubblico e URL</h6>
              <Button
                variant="link"
                className="p-0 text-muted"
                onClick={() => {
                  setTempUrl(profileUrl);
                  setShowUrlModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
            <p className="mb-0 text-dark">{profileUrl}</p>
          </Card.Body>
        </Card>

        {/* Card Contenuto promosso - Iren Business Solutions */}
        <Card className="mb-3 shadow-sm border-0">
          <Card.Body className="p-3">
            <div className="d-flex align-items-center mb-2">
              <Image
                src="https://via.placeholder.com/40x40/00a651/ffffff?text=I"
                rounded
                className="me-2"
                style={{ width: '40px', height: '40px' }}
              />
              <div className="flex-grow-1">
                <h6 className="mb-0 fw-semibold">Iren Business Solutions</h6>
                <small className="text-muted">Promosso</small>
              </div>
            </div>
            <p className="mb-2 small">
              Giacomo, rimani al corrente sulle ultime notizie da Iren Business Solutions
            </p>
            <p className="mb-2 small text-muted">
              Rimani al corrente sulle ultime notizie e aggiornamenti di settore
            </p>
            <div className="d-flex align-items-center mb-3">
              <Image
                src="https://via.placeholder.com/24x24/0077b5/ffffff?text=B"
                rounded
                className="me-2"
                style={{ width: '24px', height: '24px' }}
              />
              <small className="text-muted">Anche Barbara segue</small>
            </div>
            <Button variant="primary" size="sm" className="w-100 rounded-pill">
              Segui
            </Button>
          </Card.Body>
        </Card>

        {/* Card Altri profili consultati */}
        <Card className="mb-3 shadow-sm border-0">
          <Card.Body className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0 fw-semibold">Altri profili consultati</h6>
              <small className="text-muted">
                <i className="bi bi-eye me-1"></i>
                Solo per te
              </small>
            </div>

            {suggestedProfiles.map((profile, index) => (
              <div key={profile.id} className={`d-flex align-items-center ${index < suggestedProfiles.length - 1 ? 'mb-3' : ''}`}>
                <Image
                  src={profile.image}
                  rounded
                  className="me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <div className="flex-grow-1">
                  <p className="mb-0 small">{profile.name}</p>
                </div>
                <Button variant="outline-primary" size="sm" className="rounded-pill">
                  Visualizza
                </Button>
              </div>
            ))}
          </Card.Body>
        </Card>

        {/* Modal per la selezione della lingua */}
        <Modal show={showLanguageModal} onHide={() => setShowLanguageModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Seleziona lingua del profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {availableLanguages.map((language) => (
                <ListGroup.Item
                  key={language}
                  action
                  active={language === profileLanguage}
                  onClick={() => handleLanguageChange(language)}
                  className="d-flex justify-content-between align-items-center"
                >
                  {language}
                  {language === profileLanguage && (
                    <i className="bi bi-check text-primary"></i>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLanguageModal(false)}>
              Annulla
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal per la modifica dell'URL */}
        <Modal show={showUrlModal} onHide={handleUrlCancel} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modifica URL del profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="profileUrl" className="form-label">
                Profilo pubblico e URL
              </label>
              <input
                type="text"
                className="form-control"
                id="profileUrl"
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                placeholder="Inserisci il tuo URL del profilo LinkedIn"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUrlCancel}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleUrlSave}>
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default RightSidebar;
