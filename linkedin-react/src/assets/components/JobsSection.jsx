import { Container, Row, Col, Card, Button, Spinner, Alert, Badge, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const JobsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const apiLink = 'https://strive-benchmark.herokuapp.com/api/jobs';

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchTerm, selectedCategory]);

  const getJobs = () => {
    fetch(apiLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Errore nel recupero dei dati');
      })
      .then((jobsData) => {
        console.log(jobsData, 'dati lavori arrivati');
        const allJobs = jobsData.data || jobsData;
        setJobs(allJobs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const filterJobs = () => {
    if (!jobs || jobs.length === 0) {
      setFilteredJobs([]);
      return;
    }

    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(job => job.category === selectedCategory);
    }

    setFilteredJobs(filtered);
  };

  const getUniqueCategories = () => {
    if (!jobs || jobs.length === 0) {
      return [];
    }
    const categories = jobs.map(job => job.category).filter(Boolean);
    return [...new Set(categories)];
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Data non disponibile';
    return new Date(dateString).toLocaleDateString('it-IT');
  };

  return (
    <>
      {/* Spinner */}
      {isLoading && (
        <Container fluid className="min-vh-100 bg-light">
          <Row className="p-5">
            <div className="text-center">
              <Spinner animation="grow" />
              <p className="mt-3">Caricamento...</p>
            </div>
          </Row>
        </Container>
      )}

      {/* Errore */}
      {isError && (
        <Container fluid className="min-vh-100 bg-light">
          <Row className="p-5">
            <Alert variant="danger" className="text-center">
              Errore nel caricamento dei dati!
            </Alert>
          </Row>
        </Container>
      )}

      {/* Contenuto principale */}
      {!isLoading && !isError && (
        <Container fluid className="bg-light">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="p-4">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Offerte di Lavoro</h2>
              </div>

              {/* Filtri */}
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ricerca per parola chiave</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Es. Sviluppatore, Marketing, Sales..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="">Tutte le categorie</option>
                          {getUniqueCategories().map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Statistiche */}
              <div className="text-center mb-4">
                <p className="text-muted">
                  {filteredJobs.length} offerte trovate
                </p>
              </div>

              {/* Lista lavori */}
              <Row>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <Col xs={12} key={job._id} className="mb-3">
                      <Card className="h-100 shadow-sm">
                        <Card.Body>
                          <Row>
                            <Col md={8}>
                              <div>
                                  <Card.Title className="h5 mb-1">
                                    {job.title || 'Titolo non disponibile'}
                                  </Card.Title>
                                  <Card.Subtitle className="text-muted mb-2">
                                    {job.company_name || 'Azienda non specificata'}
                                  </Card.Subtitle>
                                  <div className="mb-2">
                                    {job.category && (
                                      <Badge bg="secondary" className="me-2">
                                        {job.category}
                                      </Badge>
                                    )}
                                    {job.job_type && (
                                      <Badge bg="info" className="me-2">
                                        {job.job_type}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-muted small mb-2">
                                    <i className="bi bi-geo-alt-fill me-1"></i>
                                    {job.location || 'Località non specificata'}
                                  </p>
                                  <p className="text-muted small mb-2">
                                    <i className="bi bi-calendar-event me-1"></i>
                                    Pubblicato il: {formatDate(job.createdAt)}
                                  </p>
                                  {job.salary && (
                                    <p className="text-success fw-bold small mb-2">
                                      <i className="bi bi-currency-euro me-1"></i>
                                      {job.salary}
                                    </p>
                                  )}
                                </div>
                            </Col>
                            <Col md={4} className="d-flex align-items-center justify-content-end">
                              <Button variant="primary">
                                Candidati
                              </Button>
                            </Col>
                          </Row>

                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col xs={12}>
                    <Card>
                      <Card.Body className="text-center py-5">
                        <i className="bi bi-search display-1 text-muted mb-3"></i>
                        <h4>Nessun lavoro trovato</h4>
                        <p className="text-muted">
                          Prova a modificare i filtri di ricerca per trovare più risultati.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default JobsSection;
