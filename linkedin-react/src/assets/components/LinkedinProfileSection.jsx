import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import RightSidebar from './RightSidebar';
const LinkedinProfileSection = () => {
    return (
        <Container fluid className='bg-light d-flex px-5'>
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card className="mt-4 mb-4">
                        {/* Immagine Copertina */}
                        <div style={{ position: 'relative' }}>
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4yuU5Y7hjAdc-Mp8qTZZ4lhIWvkv-Dsz0Q&s"
                                style={{ height: '200px', objectFit: 'cover' }} />
                            <Button variant="light" className="rounded-circle" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-pencil"></i>
                            </Button>
                        </div>
                        <Card.Body>
                            {/* Immagine Profilo */}
                            <div style={{ position: 'relative' }}>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4yuU5Y7hjAdc-Mp8qTZZ4lhIWvkv-Dsz0Q&s"
                                    roundedCircle
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                        border: '4px solid white',
                                        marginTop: '-75px',
                                    }} />
                            </div>
                            <Row className="mt-3">
                                <Col>
                                    <h4>Giacomo Pillitteri <i className="bi bi-patch-check-fill" style={{ fontSize: '0.8em', color: '#0a66c2' }}></i></h4>
                                    <p className="text-muted">
                                        Sviluppatore JAVA | PHP | Laravel | MySQL | HTML5 | CSS | JavaScript | VUE | REACT
                                    </p>
                                    <p className="text-muted">
                                        Italia - <a href="#">Informazioni di contatto</a>
                                    </p>
                                    <p className="text-muted">
                                        634 follower - <a href="#">Più di 500 collegamenti</a>
                                    </p>
                                    {/* Pulsanti */}
                                    <div>
                                        <Button variant="primary" className="me-2 rounded-5">
                                            Disponibile per
                                        </Button>
                                        <Button variant="outline-secondary" className="me-2 rounded-5">
                                            Aggiungi sezione del profilo
                                        </Button>
                                        <Button variant="outline-secondary" className='me-2 rounded-5'>Migliora Profilo</Button>
                                        <Button variant="outline-secondary" className='rounded-5'>Risorse</Button>
                                    </div>
                                </Col>

                                {/* Immagine ultima formazione */}
                                <Col xs="auto" className="d-flex align-items-start">
                                    <Image src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
                                        style={{ width: '50px', height: '50px' }} />
                                    <div className="ms-2">
                                        <p className="mb-0">EPICODE Institute of Technology</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>

                        {/* Card Disponibile Per... */}
                        <Card className="m-4">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Card.Title>Disponibile a lavorare</Card.Title>
                                    <Button variant="light" className="rounded-circle">
                                        <i className="bi bi-pencil"></i>
                                    </Button>
                                </div>
                                <Card.Text className="text-muted">
                                    Ruoli di Java, PHP Web Developer, Sviluppatore SQL, Sviluppatore Javascript e Laravel Developer
                                </Card.Text>
                                <a href="#">Mostra dettagli</a>
                            </Card.Body>
                        </Card>
                    </Card>

                    {/* Card Analisi */}
                    <Card className="mb-4">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>Analisi</Card.Title>
                                <small className="text-muted"><i className="bi bi-globe"></i> Solo per te</small>
                            </div>
                            <Row className="text-center">
                                <Col>
                                    <i className="bi bi-people-fill" style={{ fontSize: '24px' }}></i>
                                    <h4>9 visualizzazioni del profilo</h4>
                                    <p className="text-muted">Scopri chi ha visitato il tuo profilo.</p>
                                </Col>
                                <Col>
                                    <i className="bi bi-newspaper" style={{ fontSize: '24px' }}></i>
                                    <h4>0 impressioni del post</h4>
                                    <p className="text-muted">Crea un post per aumentare l'interesse.</p>
                                    <small className="text-muted">Ultimi 7 giorni</small>
                                </Col>
                                <Col>
                                    <i className="bi bi-search" style={{ fontSize: '24px' }}></i>
                                    <h4>1 comparsa nei motori di ricerca</h4>
                                    <p className="text-muted">Vedi quante volte compari nei risultati di ricerca.</p>
                                </Col>
                            </Row>
                            <hr />
                            <div className="text-center">
                                <a href="#">Mostra tutte le analisi →</a>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Card Informazioni */}
                    <Card className="mb-4">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>Informazioni</Card.Title>
                            </div>
                            <Row>
                                <Col>
                                    <p className="text-muted">Mi sono diplomato come geometra, ma la mia passione mi ha spinto verso un’altra strada. Dopo aver fatto una serie di lavori saltuari, come l’addetto alle vendite e il portalettere ho capito che il mio sogno era intraprendere una carriera che potesse essere legata alla mia passione per l’informatica e l’economia.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card esperienze */}
                    <Card className="mb-3">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>Esperienza</Card.Title>
                                <div>
                                    <i className="bi bi-plus" style={{ fontSize: '24px', marginRight: '10px' }}></i>
                                    <i className="bi bi-pencil"></i>
                                </div>
                            </div>

                            {/* Esperienze da ciclcare */}
                            <div className="d-flex mb-4">
                                <Image src="" rounded
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    className="me-3" />
                                <div>
                                    <h6 className="mb-0">Sviluppatore Web</h6>
                                    <p className="text-muted mb-0">Cartmusic · A tempo pieno</p>
                                    <p className="text-muted mb-0">nov 2024 - apr 2025 · 6 mesi</p>
                                    <p className="text-muted mb-2">Palermo · Ibrido</p>
                                    <p className="mb-2">
                                        Sviluppo di Web Application in PHP con framework Laravel e Vue.js
                                    </p>
                                    <p className="fw-bold small">
                                        <i className="bi bi-tag-fill" style={{ fontSize: '14px', marginRight: '5px' }}></i>
                                        HTML5, SQL e +2 competenze
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>


                    {/* Card Formazione */}
                    <Card className="mb-3">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>Formazione</Card.Title>
                                <div>
                                    <i className="bi bi-plus" style={{ fontSize: '24px', marginRight: '10px' }}></i>
                                    <i className="bi bi-pencil"></i>
                                </div>
                            </div>

                            {/* Esperienze da ciclcare */}
                            <div className="d-flex mb-4">
                                <Image src="" rounded
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    className="me-3" />
                                <div>
                                    <h6 className="mb-0">Epicode</h6>
                                    <p className="text-muted mb-0">Corso Sviluppatore Java</p>
                                    <p className="text-muted mb-0">nov 2024 - apr 2025 · 6 mesi</p>
                                    <p className="mb-2">
                                        Sviluppo di Web Application in PHP con framework Laravel e Vue.js
                                    </p>
                                    <p className="fw-bold small">
                                        <i className="bi bi-tag-fill" style={{ fontSize: '14px', marginRight: '5px' }}></i>
                                        HTML5, SQL e +2 competenze
                                    </p>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>

                    {/* Card Licenze e Certificazioni */}
                    <Card className="mb-3">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>Licenze e Certificazioni</Card.Title>
                                <div>
                                    <i className="bi bi-plus" style={{ fontSize: '24px', marginRight: '10px' }}></i>
                                    <i className="bi bi-pencil"></i>
                                </div>
                            </div>

                            {/* Esperienze da ciclcare */}
                            <div className="d-flex mb-4">
                                <Image src="" rounded
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    className="me-3" />
                                <div>
                                    <h6 className="mb-0">Epicode</h6>
                                    <p className="text-muted mb-0">Corso Sviluppatore Java</p>
                                    <p className="text-muted mb-0">nov 2024 - apr 2025 · 6 mesi</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <RightSidebar />
                </Col>
            </Row>
        </Container>
    );
};

export default LinkedinProfileSection;