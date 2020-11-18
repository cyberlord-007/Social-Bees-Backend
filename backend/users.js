const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: 'User already exists!' };
  }
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const idx = users.findIndex((user) => user.id === id);

  if (idx !== -1) {
    return users.splice(idx, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const logUserInRoom = (room) => users.filter((person) => person.room === room);

module.exports = { addUser, removeUser, getUser, logUserInRoom };
