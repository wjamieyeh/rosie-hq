//jenn 

const configureScheduler = io => {
  io.on('connection', socket => {
    socket.on('send-message', messageData => {
      messageData.id = Math.random();
      console.log('trying to send message');
      io.emit('get-message', messageData);
    });

    socket.on('send-delete-message', messageId => {
      io.emit('get-delete-message', messageId);
    });
  });
};

module.exports = configureScheduler;
