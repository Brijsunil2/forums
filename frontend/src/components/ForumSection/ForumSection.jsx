import "./ForumSection.css";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetForumMutation } from "../../slices/forumsApiSlice.js";
import { Container, Spinner, Modal, Button } from "react-bootstrap";
import ForumHeader from "./ForumHeader.jsx";
import ForumCreatePost from "./ForumCreatePost.jsx";

const ForumSection = () => {
  const { id } = useParams();
  const navagate = useNavigate();
  const [forumData, setForumData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [getForum, { isLoading }] = useGetForumMutation();

  const handleModalClose = () => setShowModal(false);

  const handleModalShow = () => setShowModal(true);

  const fetchForum = useCallback(async () => {
    try {
      const res = await getForum({ id }).unwrap();
      setForumData({
        ...res.forum,
        createdAt: new Date(res.forum.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        updatedAt: new Date(res.forum.updatedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        updatedAtTime: new Date(res.forum.updatedAt).toLocaleTimeString(
          "en-US"
        ),
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      navagate("/");
    }
  }, [id, getForum, navagate]);

  useEffect(() => {
    fetchForum();
  }, [fetchForum]);

  return (
    <>
      {isLoading ? (
        <Container className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <div className="forumsection-container">
          <Container>
            <ForumHeader
              title={forumData.title}
              author={forumData.author}
              createdAt={forumData.createdAt}
              updatedAt={forumData.updatedAt}
              updatedAtTime={forumData.updatedAtTime}
              desc={forumData.desc}
            />
          </Container>
          <Container className="py-2 text-end">
            <Button onClick={handleModalShow}>+ Reply</Button>
          </Container>
        </div>
      )}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumCreatePost />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForumSection;
