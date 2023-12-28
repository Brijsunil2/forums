import "./ForumsSection.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ForumEntry from "./ForumEntry";
import Searchbar from "../Searchbar/Searchbar";

const ForumsSection = () => {
  const searchBarSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="forumssection-container">
      <Container>
        <h2>Forums</h2>
        <Container>
          <Row className="mt-2">
            <Col xs={8}>
              <Searchbar submitFunc={searchBarSubmit} />
            </Col>
            <Col className="text-end">
              <Button>Create Forum</Button>
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
  );
};

export default ForumsSection;
