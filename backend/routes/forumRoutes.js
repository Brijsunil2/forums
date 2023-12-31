import express from "express";
const router = express.Router();
import { getForums, createForum } from "../controllers/forumControllers.js";

router.get("/:skip", getForums);
router.post("/create-forum", createForum);

export default router;
