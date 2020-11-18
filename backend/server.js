const express = require('express');
const socketio = require('socket.io');
const router = require('./router');
const http = require('http');

const port = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New user connected!');

  socket.on('disconnect', () => {
    console.log('user left ->');
  });
});

app.use(router);

server.listen(port, () => console.log(`server started on ${port}`));
