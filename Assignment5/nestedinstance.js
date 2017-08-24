Object.prototype.hash=function(str){
var myobj=obj;
str.split(".").forEach(function(v){
try{
myobj=myobj[v];
}
catch(e) { 
      myobj = undefined;
    }
});
return myobj;
}
