function add(x) {
  function fn(n) { return add(x + n) };
  fn.valueOf = function() { return x };
  return fn;
}
