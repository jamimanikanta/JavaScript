function myexpression(number, myfun) {
    if (myfun === undefined) {
        return number;
    }
    return myfun(number);
}

function zero(myfun) {

    return myexpression(0, myfun);

}
function one(myfun) {

    return myexpression(1, myfun);

}

function two(myfun) {

    return myexpression(2, myfun);
}
function three(myfun) {

    return myexpression(3, myfun);

}
function four(myfun) {

    return myexpression(4, myfun);

}
function five(myfun) {

    return myexpression(5, myfun);

}
function six(myfun) {

    return myexpression(6, myfun);

}
function seven(myfun) {

    return myexpression(7, myfun);

}
function eight(myfun) {

    return myexpression(8, myfun);

}
function nine(myfun) {

    return myexpression(9, myfun);

}

function plus(right) {

    return function (left) {

        return left + right;
    }
}
function minus(right) {

    return function (left) {

        return left - right;
    }
}
function times(right) {

    return function (left) {

        return left * right;
    }
}
function dividedBy(right) {

    return function (left) {

        return left / right;
    }
}

