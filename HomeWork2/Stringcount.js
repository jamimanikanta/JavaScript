function countWords(str) {
var result;
if(str.trim().length===0){
result=str.trim().length;
}else{
result=str.trim().replace(/\s+/g,' ').split(' ').length;
}
return result;
}
