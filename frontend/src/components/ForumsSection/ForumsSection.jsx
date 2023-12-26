import "./ForumsSection.css";
import { Container, Row, Col } from "react-bootstrap";
import ForumEntry from "./ForumEntry";

const ForumsSection = () => {
  return (
    <div className="forumssection-container">
      <Container>
        <h2>Forums</h2>
        <Container className="forumentries-container p-0">
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
