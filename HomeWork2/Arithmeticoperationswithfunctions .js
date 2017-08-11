function expression(n) {
    var f = function () {
        return arguments.length === 0 ? n : arguments[0](n);
    }
    return f;
};

zero = expression(0);
one = expression(1);
two = expression(2);
three = expression(3);
four = expression(4);
five = expression(5);
six = expression(6);
seven = expression(7);
eight = expression(8);
nine = expression(9);


function plus(n) { return function (m) { return m + n; }; }
function minus(n) { return function (m) { return m - n; }; }
function times(n) { return function (m) { return m * n; }; }
function dividedBy(n) { return function (m) { return m / n; }; }
