import asyncHandler from "express-async-handler";
import Forum from "../models/forumModel.js";

const getForums = asyncHandler(async (req, res) => {
  // Forum.find({}).then(found => res.status().json(found))
  res.status(200).json({ message: "getForums"})
});

const createForum = asyncHandler(async (req, res) => {
  const { title, desc, author, authorID } = req.body;

  const forum = await Forum.create({
    title,
    desc,
    author,
    authorID,
  });

  if (forum) {
    res.status(201).json({ message: "Forum was created" });
  } else {
    res.status(500);
    throw new Error("Server is unable to create a new forum");
  }
});

export { getForums, createForum };
