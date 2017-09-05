describe("Test the youtube",function(){
it("Test passed",function(){
var Res=callURi('cats');
var res=JSON.parse(Res.status);
expect(res).toEqual(200);

});
});