describe("Test the youtube",function(){
it("Test passed",function(){
var Res=callURi('cats');
var res=JSON.parse(Res.status);
expect(res).toEqual(200);

});
});

describe("Test the screen size",function(){
it("Test passed",function(){
var Res=getscreensize()
expect(Res).toEqual(screen.width);
});
});

describe("Test to get http for the count",function(){
it("Test passed",function(){
  
var Res=callURi('cats');
var res=JSON.parse(Res.status);
 var finalresult=getViewCount(res) 
expect(finalresult.length).toEqual(25);
});
});

AddPromising(searchtext)


describe("Test to get addpromising",function(){
it("Test passed",function(){
  
var Res=AddPromising(searchtext)
var res=JSON.parse(Res.status);
 var finalresult=getViewCount(res) 
expect(( typeof finalresult).toString()).toEqual("Object");
});
});
