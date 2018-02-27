var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    from: 'jess',
    text: 'Hey yo'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected to the server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
