
var io = require('socket.io-client');
var host = 'ws://localhost:5002';
var rehost = 'ws://192.168.41.102:5001';
var yuhost = 'http://ws.qqshidao.com';
var uhost = 'http://ws.51winball.com';
var socket = io.connect(host, {
    'timeout': 1000,
    'reconnectionAttempts': 50,
    forceNew: true,
});

socket.on('connect', function(){
    console.log('connect');
    socket1.emit('data', 'msg from socket');
});
socket.on('disconnect', function(){
    console.log('disconnect');
});
var socket1 = io.connect(host, {
    'timeout': 1000,
    'reconnectionAttempts': 50,
    forceNew: true,
});

socket1.on('connect', function(){
    console.log('connect');
    socket1.emit('data', 'msg from socket1');
});
socket1.on('disconnect', function(){
    console.log('disconnect');
});
