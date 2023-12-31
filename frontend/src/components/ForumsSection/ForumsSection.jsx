import "./ForumsSection.css";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Modal, Spinner } from "react-bootstrap";
import { useGetForumsMutation } from "../../slices/forumsApiSlice.js";
import ForumEntry from "./ForumEntry";
import Searchbar from "../Searchbar/Searchbar";
import ForumCreateForm from "./ForumCreateForm";

const ForumsSection = () => {
  const DESC_MAX_LENGTH = 300;
  const init = useRef(false);
  const [showModal, setShowModal] = useState(false);
  const [forums, setForums] = useState([]);
  const [page, setPage] = useState(1);

  const [getForums, { isLoading }] = useGetForumsMutation();

  const getForumsHandler = async (skip) => {
    try {
      const res = await getForums({ skip: skip }).unwrap();
      setForums(res);
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (!init.current) {
      getForumsHandler(page - 1);
    }

    return () => (init.current = true);
  }, [init, getForumsHandler, forums, setForums]);

  const handleModalClose = () => setShowModal(false);

  const handleModalShow = () => setShowModal(true);

  const searchBarSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="forumssection-container">
        <Container>
          <h2>Forums</h2>
          <Container>
            <Row className="mt-2">
              <Col xs={8}>
                <Searchbar submitFunc={searchBarSubmit} />
              </Col>
              <Col className="text-end">
                <Button onClick={handleModalShow}>Create Forum</Button>
              </Col>
            </Row>
          </Container>
          <Container className="forumentries-container">
            {isLoading ? (
              <Container className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Container>
            ) : (
              forums.map((forum) => (
                <ForumEntry
                  key={forum._id}
                  author={forum.author}
                  dateCreated={new Date(forum.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }
                  )}
                  title={forum.title}
                  desc={forum.desc.slice(0, DESC_MAX_LENGTH) + "..."}
                  numPosts={forum.numPosts}
                />
              ))
            )}
          </Container>
        </Container>
      </div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Forum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumCreateForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForumsSection;
