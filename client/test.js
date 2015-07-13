
var _st = setTimeout;
setTimeout = function(fRef, mDelay) {
    if (typeof fRef == 'function') {
        var argu = Array.prototype.slice.call(arguments,2);
        var f = (function(){ fRef.apply(null, argu); });
        return _st(f, mDelay);
    }
    return _st(fRef,mDelay);
}

function a(name){
   console.log(name); 
   setTimeout(a, 2000, name);
}
a('huangji');
a('laiqin');
a('huangjilaiqin');
