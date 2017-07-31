function prefill(n, v) {
debugger;
  if (typeof n === 'boolean' || ~~n != n || +n < 0) {throw new TypeError(n + ' is invalid')}
  
  return Array.apply(null, new Array(parseInt(n, 10))).map(function() {
  debugger;
  return v;});
}