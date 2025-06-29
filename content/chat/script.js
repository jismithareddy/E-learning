// Install express and socket.io via npm: npm install express socket.io
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Set up express app and server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chat message', (msg) => {
    // Broadcast the message to all connected users
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
