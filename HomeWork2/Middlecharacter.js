function getMiddle(str) {
 var midpoint=(str.length) / 2; //get the middlecharacter
   
   return (str.length % 2 == 1) ? str.substring(midpoint, midpoint + 1) : str.substring(midpoint - 1, (midpoint - 1) + 2)
}
