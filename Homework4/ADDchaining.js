var add = (function() {
debugger;
    var factory = function(value) {
    debugger;
        var fn = function(num) {
        debugger;
            return factory(value + num);
        };
        // This is the main hack: 
        // We will return a function that when compared / concatted will call .toString and return a number.
        // Never use this in production code...
        fn.toString = function() {
        debugger;
            return value;
        };
        return fn;
    };
    return factory(0);
})();
