import "./ForumsSection.css";
import { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import ForumEntry from "./ForumEntry";
import Searchbar from "../Searchbar/Searchbar";
import ForumCreateForm from "./ForumCreateForm";

const ForumsSection = () => {
  const [showModal, setShowModal] = useState(false);

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
            <ForumEntry
              author="Hello"
              dateCreated="10/10/2023"
              title="Some Title"
              subtitle="The subtitle"
              numPosts="50"
            />
            <ForumEntry
              author="Hello"
              dateCreated="10/10/2023"
              title="Some Title"
              subtitle=""
              numPosts="50"
            />
            <ForumEntry
              author="Hello"
              dateCreated="10/10/2023"
              title="Some Title"
              subtitle="The subtitle"
              numPosts="50"
            />
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
