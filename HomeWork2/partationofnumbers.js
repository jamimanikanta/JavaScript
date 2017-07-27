function partitionOn(pred, items) {
    debugger;
    var truthies = items.filter(pred);
    var falsies = items.filter(function (a) { return !pred(a) });
    items.length = 0;
    items.push.apply(items, falsies.concat(truthies));
    return falsies.length;
}
var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {
    return n % 2 == 0
}
var i = partitionOn(isEven, items);