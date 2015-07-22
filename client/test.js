
var os = require('os');
console.log(os.cpus());
console.log(os.loadavg());
console.log(os.totalmem()/1024/1024);
console.log(os.freemem()/1024/1024);
console.log(os.networkInterfaces());

var hsh = {'name':'as;dfkjadfk', age:23};
console.log(hsh);
delete hsh['name'];
console.log(hsh);
delete hsh['age'];
console.log(hsh);
