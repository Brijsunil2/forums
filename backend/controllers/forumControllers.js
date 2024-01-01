import asyncHandler from "express-async-handler";
import Forum from "../models/forumModel.js";

const getForums = asyncHandler(async (req, res) => {
  const regex = new RegExp(req.query.title, 'i');
  const forums = await Forum.aggregate()
    .match({title: {$regex: regex}})
    .skip(10 * req.query.skip)
    .limit(10)
    .sort({ createdAt: -1 })
    .project({ title: 1, desc: 1, author: 1, authorID: 1, createdAt: 1, updatedAt: 1, numPosts: { $size: "$posts" } });

  const count = await Forum.countDocuments({title: {$regex: regex}});

  if (forums && count) {
    res.status(200).json({count, forums});
  } else {
    res.status(500);
    throw new Error("Server is unable to find any forums");
  }
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
    res.status(201).json({
      _id: forum._id,
      title: forum.title,
      desc: forum.desc,
      author: forum.author,
      authorID: forum.authorID,
      createdAt: forum.createdAt,
    });
  } else {
    res.status(500);
    throw new Error("Server is unable to create a new forum");
  }
});

export { getForums, createForum };
