
var io = require('socket.io-client');

var host = 'ws://localhost:5001';
var host2 = 'ws://localhost:5002';
var rehost = 'ws://192.168.41.102:5001';
var yuhost = 'http://ws.qqshidao.com';
var uhost = 'http://ws.51winball.com';

var uhost2 = 'ws://123.59.40.113:5002';

var length = 5000;
var connect = 0;
var error = 0;
var disconnect = 0;
var reconnect = 0;

setInterval(function(){
    //console.log('connect:', connect, 'disconnect:', disconnect, 'reconnect:', reconnect, 'error:', error);
}, 1000);

function bench(){
    if(length){
        length--;
        var socket = io.connect(uhost2, {
            'timeout': 1000,
            'reconnectionAttempts': 50,
            forceNew: true,
        });

        socket.on('connect', function(){
            connect++;
            this.on('disconnect', function(){
                disconnect++;
            });
            this.on('reconnect', function(){
                reconnect++;
            });
            this.on('error', function(){
                error++;
            });
        });
        setTimeout(bench, 5);
    }
    else{
        console.log('done');
    }
}

bench();


