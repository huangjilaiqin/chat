
var io = require('socket.io-client');
var host = 'ws://localhost:5001';
var host2 = 'ws://127.0.0.1:5002';
var rehost = 'ws://192.168.41.102:5001';
var yuhost = 'http://ws.qqshidao.com';
var uhost = 'http://ws.51winball.com';
var uhost2 = 'ws://123.59.40.113:5002';

var length = 1;

function bench(){
    if(length){
        length--;
        var socket = io.connect(uhost2, {
            'timeout': 1000,
            'reconnectionAttempts': 50,
            forceNew: true,
            transport: "websocket",
        });

        //*
        socket.on('connect', function(){
            console.log('connect');
        });
        //*/
        socket.on('reconnect', function(){
            console.log('reconnection');
        });
        socket.on('disconnect', function(){
            console.log('disconnect');
        });
        setTimeout(bench, 5);
    }
    else{
        console.log('done');
    }
}

bench();
