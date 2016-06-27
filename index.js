var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express=require('express');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/page/index.html');
});

app.use('/js', express.static(__dirname +'/js'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
   socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
