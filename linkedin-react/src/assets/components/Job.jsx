import { Container, Row, Col, Card, Button, Image, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import LeftSidebarJob from "./LeftSidebarJob";

const Job = () => {

    const location = useLocation(); // Legge il parametro di ricerca dall'URL
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search");

    const apiKey = import.meta.env.VITE_API_KEY;

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [jobs, setJobs] = useState(null);
    const [expandedJobId, setExpandedJobId] = useState(null);

    const handleCardClick = (jobId) => {
        setExpandedJobId(expandedJobId === jobId ? null : jobId);
    };

    useEffect(() => {
        const getJobs = () => {
            setIsLoading(true);
            setIsError(false);
            // se c'è la query il link api è diverso
            const apiLink = searchQuery
                ? `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchQuery}&limit=10`
                : "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10";

            fetch(apiLink, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + apiKey,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error("Errore nel recupero dei dati");
                })
                .then((job) => {
                    console.log(job, "dati lavori arrivati");
                    setJobs(job);
                })
                .catch((error) => {
                    console.error("Errore nel recupero dei dati:", error);
                    setIsError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        // Chiama la funzione ogni volta che la query di ricerca cambia
        getJobs();
    }, [searchQuery, apiKey, location.search]);

    console.log(jobs);

    return (
        <>
            {/* Spinner */}
            {isLoading && (
                <Container
                    fluid
                    className="min-vh-100 bg-light d-flex justify-content-center align-items-center "
                >
                    <Row className="d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center gap-3 ">
                            <Image src="./img/LinkedIn_2021.svg" className="h-25 w-25" />
                            <LinearProgress className="w-100 w-sm-75 w-md-50 w-lg-25" />
                        </div>
                    </Row>
                </Container>
            )}
            {/* Errore se vado nel catch */}
            {isError && (
                <Container fluid className="min-vh-100 bg-light">
                    <Row className="p-5">
                        <Alert variant="danger" className="text-center">
                            <i className="bi bi-exclamation-triangle-fill"></i> Errore nel
                            recupero dei dati!
                        </Alert>
                    </Row>
                </Container>
            )}
            {jobs &&
                <Container fluid className="bg-light d-flex p-2 p-sm-5 justify-content-center">
                    <Row className="justify-content-center">
                        <Col>
                            <LeftSidebarJob />
                        </Col>
                        <Col xs={12} md={10} lg={8} className="bg-white border-1 border rounded-3 p-3">
                            <h5 className="mb-3">
                                {searchQuery ? `Risultati per: "${searchQuery}"` : "Le principali offerte di lavoro per te"}
                            </h5>
                            <p className="text-muted small">
                                {searchQuery
                                    ? `Mostrando risultati di ricerca per "${searchQuery}"`
                                    : "In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi"
                                }
                            </p>
                            {/* Offerta di lavoro */}
                            {jobs.data.length > 0 ? (
                                jobs.data.map((job) => (
                                    <Card className="my-3 border-0 border-bottom rounded-0 pointer" key={job._id} onClick={() => handleCardClick(job._id)}>
                                        <Card.Body>
                                            <Row className="align-items-center">
                                                <Col xs="auto" className="d-flex align-items-center">
                                                    <div className="bg-light d-flex justify-content-center align-items-center" >
                                                        <Image src="./img/job.jpg" className="rounded-circle object-fit-cover" style={{ width: '50px', height: '50px' }}/>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <Card.Title className="h6 text-primary mb-0">{job.title}</Card.Title>
                                                    <Card.Text className="mb-0">{job.company_name}, {job.candidate_required_location} ({job.job_type})</Card.Text>
                                                    <div className="d-flex align-items-center mt-1">
                                                        <i className="bi bi-three-dots text-muted me-2"></i>
                                                        <span className="text-success small">Valutazione attiva delle candidature</span>
                                                    </div>
                                                </Col>
                                                <Col xs="auto" className="d-flex align-items-center">
                                                    <i className="bi bi-three-dots me-2 text-muted"></i>
                                                    <i className="bi bi-x text-muted" style={{ fontSize: '1.5rem' }}></i>
                                                </Col>
                                            </Row>
                                            <div className="mt-3">
                                                <span className="text-success small me-2">Promosso</span>
                                                <span className="text-muted small">·</span>
                                                <span className="text-primary small ms-2">Candidatura semplice</span>
                                            </div>
                                        </Card.Body>
                                        {/* Descrizione annuncio */}
                                        {expandedJobId === job._id && (
                                            <div dangerouslySetInnerHTML={{ __html: job.description }} />
                                        )}
                                    </Card>
                                ))
                            ) : (
                                <p>Nessun annuncio da mostrare.</p>
                            )}

                            <div className="text-center mt-4">
                                <Button variant="link" className="text-decoration-none">
                                    Mostra tutto <span aria-hidden="true">&rarr;</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Job;
