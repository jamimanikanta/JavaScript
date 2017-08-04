var Cat = (function () {
  var cats = [];
  var constructor = function (name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw Error("Must specify a name and a weight");
    }
    Object.defineProperty(this, 'name', {
      get: function () { return name }
    });
    Object.defineProperty(this, 'weight', {
      get: function () { return weight },
      set: function (x) { weight = x; return weight }
    });
    cats.push(this);
  };
  constructor.averageWeight = function() {
    return cats.reduce(function (sum, cat) { return sum + cat.weight }, 0) / cats.length;
  };
  return constructor;
}());