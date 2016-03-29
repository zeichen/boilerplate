var socket = io.connect('https://sockmebrick.herokuapp.com:443');

  function addParticipantsMessage (data) {
    var message = '';
    if (data.numUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.numUsers + " participants";
    }
    console.log(message);
  }

  // Whenever the server emits 'login', log the login message
  socket.on('login', function (data) {
    connected = true;
  
    addParticipantsMessage(data);
  });

 
  socket.on('new message', function (data) {
//console.log(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', function (data) {
    console.log(data.username + ' joined');
    addParticipantsMessage(data);
   // Game.addUser(data.username);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function (data) {
    console.log(data.username + ' left');
    addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', function (data) {
   // addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('stop typing', function (data) {
   // removeChatTyping(data);
  });

  module.exports=socket;