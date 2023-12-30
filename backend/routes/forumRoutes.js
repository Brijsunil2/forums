import express from "express";
const router = express.Router();
import { createForum } from "../controllers/forumControllers.js";


router.post("/", createForum);

export default router;