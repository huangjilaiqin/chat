
var io = require('socket.io-client');
var host = 'ws://localhost:5002';
var uhost2 = 'ws://123.59.40.113:5002';
var socket = io.connect(host, {
    'timeout': 1000,
    //'reconnection': false,
    'reconnectionAttempts': 50,
    forceNew: true,
});

socket.on('connect', function(){
    console.log('connect');
});
socket.on('reconnect', function(){
    console.log('reconnect');
});
socket.on('disconnect', function(){
    console.log('disconnect');
});

