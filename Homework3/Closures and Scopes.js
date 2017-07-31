function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        callbacks.push(getdata(i));
    }

    function getdata(x) {

        return function () {

            return x;
        }

    }

    return callbacks;
}