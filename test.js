
var socketIO = require('socket.io-client');
var debug = require('debug')('test');
function foo(){
    console.log('asdf');
}

var ex = foo;
ex.myname = 'huangji';
console.log(ex.myname);
ex();
debug('hello');
var client = socketIO('ws://123.59.40.113:5002');
client.on('connect', function(){
    debug('connection');        
});
