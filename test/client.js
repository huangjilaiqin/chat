
var io = require('socket.io-client');
var log4js = require('log4js');
log4js.configure('log.json');
var log = log4js.getLogger('client');

var host = 'ws://localhost:5001';
var host2 = 'ws://127.0.0.1:5002';
var rehost = 'ws://192.168.41.102:5001';
var yuhost = 'http://ws.qqshidao.com';
var uhost = 'http://ws.51winball.com';

var uhost2 = 'ws://123.59.40.113:5002';

var length = 5000;
var connect = 0;
var error = 0;
var disconnect = 0;
var reconnect = 0;

/*
setInterval(function(){
    //console.log('connect:', connect, 'disconnect:', disconnect, 'reconnect:', reconnect, 'error:', error);
}, 1000);
*/
process.on('uncaughtException', function (err) {
    log.fatal('uncaughtException:', err);
    log.fatal('uncaughtException code:', err.code);
    log.fatal('uncaughtException:', err.stack);
});


function bench(){
    if(length){
        length--;
        var socket = io.connect(uhost2, {
            //'timeout': 1000,
            'reconnectionAttempts': 50,
            forceNew: true,
            transports: ["websocket", 'flashsocket', 'htmlfile', 'xhr-multipart', 'polling-xhr', 'jsonp-polling'],
        });

        socket.on('connect', function(){
        });
        socket.on('disconnect', function(){
        });
        socket.on('reconnect', function(){
        });
        socket.on('error', function(err){
            log.error(err);
        });
        setTimeout(bench, 5);
    }
    else{
        console.log('done');
    }
}

bench();

