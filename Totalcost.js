function rentalCarCost(days) {
  var total;
  if(days >= 7){
total=days*40-50;
}else
if(days < 7 && days>=3){
total=days*40-20;
}
else{
total=days*40
}
return total;
}