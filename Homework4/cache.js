function cache(func) {
  // do your magic here
  var arr = [];
  //check the arguments
  return function() {
     var funcArgs = arguments;
    for (var i = 0, length = arr.length; i < length; i++) {
      var args = arr[i].args;
      if(args.length !== arguments.length) continue;
      if (Array.prototype.slice.call(args).every(function(val, idx) {
          return  val === funcArgs[idx];
        })) {
        return arr[i].result;
      }
    }
    var result =  func.apply(null, arguments);
    arr.push({ "args" :arguments , "result" :  result});
    return result;
  }
}
