import express from "express";
import chats from "./data/data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Flex Chat API up and running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
