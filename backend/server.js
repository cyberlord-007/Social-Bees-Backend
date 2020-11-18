const express = require('express');
const socketio = require('socket.io');
const router = require('./router');
const http = require('http');
const { addUser, removeUser, getUser, logUserInRoom } = require('./users');

const port = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('signin', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.emit('message', { user: 'admin', text: `${user.name}` });

    socket.join(user.room);
  });

  socket.on('disconnect', () => {
    console.log('user left ->');
  });
});

app.use(router);

server.listen(port, () => console.log(`server started on ${port}`));
