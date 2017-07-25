function rentalCarCost(d){
  var total;
  if(d >= 7){
total=d*40-50;
}else
if(d < 7 && d>=3){
total=d*40-20;
}
else{
total=d*40
}
return total;
}