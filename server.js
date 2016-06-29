var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express')

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/page/index.html');
});

app.use(express.static(__dirname + '/bootstrap'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
   socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(app.get('port'), function(){
  console.log('listening on *'+app.get('port'));
});
