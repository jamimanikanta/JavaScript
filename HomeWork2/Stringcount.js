function countWords(str) {
if(str.trim().length===0)
return str.trim().length
return str.trim().replace(/\s+/g,' ').split(' ').length;
}
