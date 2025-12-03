const express = require("express");
const app = express();

const SocketIO = require("socket.io");

const server = app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const io = SocketIO(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client.html");
});

io.on("connection", (socket) => {
  console.log("A user connected with ID: " + socket.id);
  socket.on("myname", (username) => {
    io.emit("myname", username);
  });

  socket.on("chatm", (message) => {
    io.emit("chatm", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected: " + socket.id);
  });
});
