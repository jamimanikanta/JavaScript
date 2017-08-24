function isSantaClausable(obj) {
  return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}