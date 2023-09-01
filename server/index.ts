import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (if needed)
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Add your Socket.io event handlers here
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
