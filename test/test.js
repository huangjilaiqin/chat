
var os = require('os');

var comm = 0;
var i=10;
while(i){
    setTimeout(function(){
        comm++;        
        console.log(comm);
    }, 1000*i);
    i--;
}



