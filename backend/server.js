import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/dbConfig.js";
import forumRoutes from "./routes/forumRoutes.js";
import {
  socketOnDisconnect,
  socketOnForumReply,
} from "./controllers/ioController.js";

const port = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(cors());

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/forums", forumRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Server Online"));
}

io.on("connection", (socket) => {
  console.log(`Client with id ${socket.id} has connected.`);
  socket.on("forumReply", (reply) => socketOnForumReply(socket, reply));
  socket.on("disconnect", socketOnDisconnect);
});

app.use(notFound);
app.use(errorHandler);

httpServer.listen(port, () => console.log(`Server started on port ${port}`));
