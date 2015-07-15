
var io = require('socket.io-client');
var host = 'ws://localhost:5001';
var host2 = 'ws://localhost:5002';
var rehost = 'ws://192.168.41.102:5001';
var yuhost = 'http://ws.qqshidao.com';
var uhost = 'http://ws.51winball.com';
var uhost2 = 'ws://123.59.40.113:5002';

var length = 5000;

function bench(){
    if(length){
        length--;
        var socket = io.connect(host2, {
            'timeout': 1000,
            'reconnectionAttempts': 50,
            forceNew: true,
        });

        /*
        socket.on('connect', function(){
            console.log('connect');
        });
        */
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
