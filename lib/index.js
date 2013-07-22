var http = require('http');
var io   = {};
var pm2DevRefesh = {};
var socket       = {};
var socketPort   = 3333;
const PREFIX_MSG = '\x1B[33m⌬ PM2-DEV \x1B[39m';


var server = http.createServer().listen( socketPort, function(){

      console.log( PREFIX_MSG + " server listening at port:" + socketPort);
      io = require('socket.io').listen( server);
      /*
       * 0 - error
       1 - warn
       2 - info
       3 - debug
       *
       * */
      io.set('log level', 0);

      io.sockets.on('connection', function ( _socket)
      {
          socket = _socket;
          console.log( PREFIX_MSG +'socket connected')
         /* socket.emit('news', { hello: 'world' });
          socket.on('my other event', function (data) {
              console.log(data);
          });*/

          socket.on('disconnect', function(){
              console.log('socket disconnected');
          });
      });
});

module.exports.refreshBrowser = function () {
  console.log( PREFIX_MSG +'Refresh Browser');
  try {
     socket.emit('refresh');
   }catch(e){
      console.log( PREFIX_MSG +'no client connected');
   }
}