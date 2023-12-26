import { Container, Row, Col } from "react-bootstrap";

const ForumEntry = ({
  author,
  dateCreated,
  title,
  subtitle = "",
  numPosts,
}) => {
  return (
    <Container className="forumentry-container">
      <Row className="d-flex p-3">
        <Col className="forumentry-col-1" xs={6}>
          <h3 className="forumentry-title">{title}</h3>
          <h4 className="forumentry-subtitle">{subtitle}</h4>
        </Col>
        <Col className="forumentry-col-2" xs={3}>
          <p className="forumentry-author">{author}</p>
          <p className="forumentry-datecreated">{dateCreated}</p>
        </Col>
        <Col className="forumentry-col-3">
          <p className="forumentry-numposts">{numPosts}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumEntry;
