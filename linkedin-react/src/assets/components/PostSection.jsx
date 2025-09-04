import { Container, Row, Col, Card, Dropdown, Alert, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { setProfileData } from "../components/redux/profileSlice";
import { useDispatch } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import ModalAddPost from "./ModalAddPost";
import DeletePost from "./DeletePost";
import ModalEditPost from "./ModalEditPost";

const PostSection = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiLinkPost = `https://striveschool-api.herokuapp.com/api/posts/`;

  const apiLinkProfile = `https://striveschool-api.herokuapp.com/api/profile/me`;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [posts, setPosts] = useState(null);
  const [ultimiPosts, setUltimiPosts] = useState(null);

  const [result, setResult] = useState(null);

  useEffect(() => {
    getProfile();
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(apiLinkPost, {
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
      .then((post) => {
        console.log(post, "dati profilo arrivati");
        setPosts(post);
        ultimiPost(post)
        setIsLoading(false);
      })
      .then(() => {
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const dispatch = useDispatch();

  //Funzione per recuperare i dati del profilo
  const getProfile = () => {
    fetch(apiLinkProfile, {
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
      .then((profile) => {
        console.log(profile, "dati profilo arrivati");
        dispatch(setProfileData(profile));
        setResult(profile);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  // Modale Aggiungi Post
  const [showAddPostModal, setAddPostModal] = useState(false);

  // Funzione per aprire il Modale Aggiungi Post
  const openAddPostModal = () => {
    setAddPostModal(true);
  };
  // Funzione per chiudere il Modale Aggiungi Post
  const closeAddPostModal = () => {
    setAddPostModal(false);
  };

  // Funzione per recuperare gli ultimi 30 post
  const ultimiPost = (posts) => {
    const indiceDiPartenza = posts.length - 30;
    const ultimiTrentaElementi = posts.slice(indiceDiPartenza);
    setUltimiPosts(ultimiTrentaElementi.reverse());
    console.log(ultimiTrentaElementi);
  }

  // Modale Elimina Post
  const [showDeletePostModal, setDeletePostModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Funzione per aprire il Modale Elimina Post
  const openDeletePostModal = (postId) => {
    setSelectedPostId(postId);
    setDeletePostModal(true);
  };
  // Funzione per chiudere il Modale Elimina Post
  const closeDeletePostModal = () => {
    setDeletePostModal(false);
  };

  // Modale Modifica Post
  const [showEditPostModal, setEditPostModal] = useState(false);

  // Funzione per aprire il Modale Elimina Post
  const openEditPostModal = (postId) => {
    setSelectedPostId(postId);
    setEditPostModal(true);
  };
  // Funzione per chiudere il Modale Elimina Post
  const closeEditPostModal = () => {
    setEditPostModal(false);
  };

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
      {/* Container Principale */}
      <Container fluid className="bg-light d-flex px-5 justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={2}>
            <LeftSidebar />
          </Col>
          <Col xs={12} md={10} lg={8} className="w-25">
            <div className="p-3">
              {/* Barra di creazione post */}
              {result &&

                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={result.image}
                    alt="User Profile"
                    className="rounded-circle me-2"
                    style={{ width: '45px', height: '40px' }}
                  />
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Crea un post"
                    onClick={openAddPostModal}
                  />
                </div>

              }

              {/* Bottoni d'azione */}
              <div className="d-flex justify-content-around mb-3 text-muted">
                <div className="d-flex align-items-center">
                  <i className="bi bi-play-circle-fill me-1 text-danger"></i>
                  <span>Video</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-image me-1 text-success"></i>
                  <span>Foto</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-text me-1 text-info"></i>
                  <span>Scrivi un articolo</span>
                </div>
              </div>

              <hr />

              {/* Selettore di visualizzazione del feed */}
              <div className="d-flex justify-content-between align-items-center text-muted mb-3">
                <span>Seleziona la visualizzazione del feed:</span>
                <a href="#" className="text-decoration-none fw-bold">
                  Più rilevanti per primi{" "}
                  <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </div>

              {/* Card del post */}

              {ultimiPosts && ultimiPosts.length > 0 ? (
                ultimiPosts.map((post) => (
                  <Card className="shadow-sm mb-3" key={post._id}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="d-flex align-items-center">
                          <Image
                            src="https://yt3.googleusercontent.com/Zb8cRN_XEfYIEZWAbmjl3MVVd52rJ5moGp9ODcLX1A4eKiEWZc8Uxw_Vf_t9ygLypKZSq927slw=s900-c-k-c0x00ffffff-no-rj"
                            alt="Profile"
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px" }}
                          />
                          <div>
                            <Card.Subtitle className="mb-0 text-muted">
                              {post.user.username} ha diffuso questo post
                            </Card.Subtitle>
                            <div className="d-flex align-items-center mt-1">
                              <span className="fw-bold">{post.text}</span>
                            </div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "0.85em" }}
                            >
                              48,351 follower
                            </div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "0.85em" }}
                            >
                              {post.createdAt.split("T")[0]} •{" "}
                              <i className="bi bi-globe"></i>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Dropdown align="end">
                            <Dropdown.Toggle
                              variant="link"
                              id="dropdown-basic"
                              className="p-0"
                            >
                              <i className="bi bi-three-dots text-muted"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => openEditPostModal(post._id)}>
                                Modifica post
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Nascondi post
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Segnala
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <button
                            type="button"
                            className="btn-close ms-2"
                            aria-label="Close"
                            onClick={() => openDeletePostModal(post._id)}
                          ></button>
                        </div>
                      </div>

                      {/* Immagine del post */}
                      {post.image && (
                        <div className="position-relative">
                          <Card.Img
                            src={post.image}
                            alt="Post Image"
                            className="mt-2 rounded"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 p-3 w-100 text-white text-center"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                            }}
                          ></div>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>Nessun post da mostrare.</p>
              )}
            </div>
            <ModalAddPost show={showAddPostModal} closeModal={closeAddPostModal} refreshPost={getPosts} />
            <DeletePost show={showDeletePostModal} closeModal={closeDeletePostModal} postId={selectedPostId} refreshPost={getPosts} />
            <ModalEditPost show={showEditPostModal} closeModal={closeEditPostModal} postId={selectedPostId} refreshPost={getPosts} />
          </Col>
          <Col xs={12} md={10} lg={2}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostSection;
