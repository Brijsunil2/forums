import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ForumEntry = ({
  author,
  dateCreated,
  title,
  desc = "",
  numPosts,
}) => {
  return (
    <motion.div
      className="forumentry-container"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Row className="d-flex p-3">
        <Col className="forumentry-col-1" xs={6}>
          <h3 className="forumentry-title">{title}</h3>
          <h4 className="forumentry-desc">{desc}</h4>
        </Col>
        <Col className="forumentry-col-2" xs={3}>
          <p className="forumentry-author">{author}</p>
          <p className="forumentry-datecreated">{dateCreated}</p>
        </Col>
        <Col className="forumentry-col-3">
          <p className="forumentry-numposts">{numPosts}</p>
          <p className="forumentry-numposts">Posts</p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ForumEntry;
