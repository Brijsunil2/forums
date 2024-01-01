import "./ForumScreen.css";
import { useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetForumMutation } from "../../slices/forumsApiSlice.js";

const ForumScreen = () => {
  const { id } = useParams();
  const navagate = useNavigate();

  const [getForum, {isLoading}] = useGetForumMutation();

  const fetchForum = useCallback(async () => {
    try {
      const res = await getForum({id}).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err?.data?.message || err.error);
      navagate("/");
    }
  }, [id, getForum, navagate]);

  useEffect(() => {
    fetchForum();
  }, [fetchForum]);

  return (
    <div>{id}</div>
  )
}

export default ForumScreen