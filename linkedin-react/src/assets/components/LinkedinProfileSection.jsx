import { Container, Row, Col, Card, Button, Image, Spinner, Alert } from 'react-bootstrap';
import { useState, useEffect} from 'react'
import ProfileRightSidebar from './ProfileRightSidebar';
import AddExperiences from './ModalAddExperiences';
import ModalEditExperience from './ModalEditExperience';


const LinkedinProfileSection = () => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const apiLink = `https://striveschool-api.herokuapp.com/api/profile/me`

    //Loading - Error
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const [results, setResults] = useState(null)

    const [resultsExperencies, setResultsExperencies] = useState(null)

    // Modale Aggiungi Esperienza
    const [showExperenciesModal, setExperenciesModal] = useState(false);

    // Funzione per aprire il Modale Aggiungi Esperienza
    const openExperenciesModal = () => {
        setExperenciesModal(true);
    };
    // Funzione per chiudere il Modale Aggiungi Esperienza
    const closeExperenciesModal = () => {
        setExperenciesModal(false);
    };

    // Modale Modifica Esperienza
    const [showEditExperencieModal, setEditExperencieModal] = useState(false);
    const [selectedExperienceId, setSelectedExperienceId] = useState(null);

    // Funzione per aprire il Modale Modifica Esperienza
    const openEditExperencieModal = (experienceId) => {
        setSelectedExperienceId(experienceId);
        setEditExperencieModal(true);
    };
    // Funzione per chiudere il Modale Modifica Esperienza
    const closeEditExperencieModal = () => {
        setEditExperencieModal(false);
    };

    useEffect(() => {
        getResults()
    }, [])


    //Funzione per recuperare i dati del profilo
    const getResults = () => {

        fetch(apiLink, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((profile) => {
                console.log(profile, 'dati profilo arrivati')
                setResults(profile)
                setIsLoading(false)
                getExperencies(profile._id)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }

    const getExperencies = (profile_id) => {

        const apiLinkExperiences = `https://striveschool-api.herokuapp.com/api/profile/${profile_id}/experiences`

        fetch(apiLinkExperiences, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((experiences) => {
                console.log(experiences, 'dati esperienze arrivate:')
                setResultsExperencies(experiences)
                setIsLoading(false)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }


    // Funzione per gestire l'upload dell'immagine del profilo (versione senza async/await)
    const handleProfileImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        const formData = new FormData();

        formData.append('profile', file);

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${results._id}/picture`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + apiKey,
            },
        })
            .then(response => {
                if (response.ok) {
                    getResults(); // Aggiorna i dati del profilo per mostrare la nuova immagine
                } else {
                    console.error('Errore durante il caricamento dell\'immagine:', response.statusText);
                }
            })
            .catch(error => {
                console.error("Errore di rete:", error);
            });
    };

    return (
        <>
            {/* Spinner */}
            {isLoading && (
                <Container fluid className="min-vh-100 bg-light">
                    <Row className="p-5">
                        <div className="text-center mb-3">
                            <Spinner animation="grow" />
                        </div>
                    </Row>
                </Container>
            )}
            {/* Errore se vado nel catch */}
            {isError && (
                <Container fluid className="min-vh-100 bg-light">
                    <Row className="p-5">
                        <Alert variant="danger" className="text-center">
                            <i class="bi bi-exclamation-triangle-fill"></i> Errore nel recupero dei dati!
                        </Alert>
                    </Row>
                </Container>
            )}
            {/* Risultato */}
            {results && (
                <Container fluid className='bg-light d-flex px-5 justify-content-center'>
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
                                        <label htmlFor="file-input">
                                            <Image
                                                src={results.image}
                                                roundedCircle
                                                style={{
                                                    width: '150px',
                                                    height: '150px',
                                                    objectFit: 'cover',
                                                    border: '4px solid white',
                                                    marginTop: '-75px',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        </label>
                                        {/* Input file nascosto */}
                                        <input
                                            id="file-input"
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={handleProfileImageUpload}
                                        />
                                    </div>
                                    <Row className="mt-3">
                                        <Col>
                                            <h4>{results.name} {results.surname} <i className="bi bi-patch-check-fill" style={{ fontSize: '0.8em', color: '#0a66c2' }}></i></h4>
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
                                            <p className="text-muted">{results.bio}</p>
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
                                            <i className="bi bi-plus pointer" style={{ fontSize: '24px', marginRight: '10px' }} onClick={openExperenciesModal}></i>
                                            <i className="bi bi-pencil"></i>
                                        </div>
                                    </div>

                                    {/* Esperienze da ciclcare */}
                                    {resultsExperencies && resultsExperencies.length > 0 ? (
                                        resultsExperencies.map((exp) => (
                                            <div key={exp._id} className="d-flex mb-4 pointer" onClick={() => openEditExperencieModal(exp._id)}>
                                                <Image src='https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj'
                                                    rounded
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    className="me-3" />
                                                <div>
                                                    <h6 className="mb-0">{exp.role}</h6>
                                                    <p className="text-muted mb-0">{exp.company} · {exp.area}</p>
                                                    <p className="text-muted mb-0">Da: {exp.startDate.split("T")[0]} - A: {exp.endDate.split("T")[0] || 'Presente'}</p>
                                                    <p className="mb-2">{exp.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nessuna esperienza da mostrare.</p>
                                    )}
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
                                        <Image src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
                                            rounded
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
                                        <Image src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
                                            rounded
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
                            <ProfileRightSidebar username={results.username} profileName={results.name} />
                        </Col>
                        {/* Modale Aggiungi Esperienza */}
                        <AddExperiences getExperencies={getExperencies} show={showExperenciesModal} closeModal={closeExperenciesModal} userId={results._id} />
                        <ModalEditExperience getExperencies={getExperencies} showEdit={showEditExperencieModal} closeEditModal={closeEditExperencieModal} userId={results._id} experienceId={selectedExperienceId} />
                    </Row>
                </Container>
            )}
        </>
    );
};

export default LinkedinProfileSection;