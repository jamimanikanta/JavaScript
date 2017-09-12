var MainResult = [];
var FirstResult = {};
var SecondResult = {};

var data = [];

function searching() {
   
    var searchtext = document.getElementById("txtsearch").value;
    if (searchtext != "") {
        {
            debugger;
            var wrapper = document.getElementById('outputscreen');
            wrapper.innerHTML = "";
            wrapper.innerHTML = "<h1>Loading</h1>";
            var paginationwrapper = document.getElementById('pagination');

            paginationwrapper.innerHTML = "";
            FirstResult = {};
            SecondResult = {};
            MainResult = [];
            data = [];
        }
        
        AddPromising(searchtext).then(function () {
            debugger;
            getViewCount(FirstResult);
            //AddHtml();
            AddPaging();

        });

    }
    
    else {
        var wrapper = document.getElementById('outputscreen');
        wrapper.innerHTML = "";

        var paginationwrapper = document.getElementById('pagination');

        paginationwrapper.innerHTML = "";
        FirstResult = {};
        SecondResult = {};
        MainResult = [];
        data = [];

    }
    

}

function AddPromising(searchtext) {

    
    return new Promise(function (resolve, reject) {
 
        debugger;

        var res = callURi(searchtext);
        
        if (res.status === 200) {
            
            var Result = JSON.parse(res.responseText);
            FirstResult = Result;

           // SecondResult = getViewCount(FirstResult);

           // if (SecondResult.length !== 0) {

              //  resolve(SecondResult);


          //  } else {

               // reject(SecondResult);
            //}

            resolve(Result);

        } else {

            reject(Result);
        }
    });

}

function callURi(parm) {
    debugger;
    var parts = 'snippet';
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + parm + "&maxResults=25&key=AIzaSyA2yj3s-WbKec_uUhEVc8AVOfjGglVnGiE&type=video&fields=items/id,items/snippet/title,items/snippet/description,items/snippet/publishedAt,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken",false);
    xhr.send();
    return xhr;
}

function getViewCount(promo) {


    debugger;
    var parts = 'snippet';
    var xhr = new XMLHttpRequest();
    for (var i = 0; i < promo.items.length; i++) {

        var finalobj = {};
        var vid = promo.items[i].id.videoId;
        xhr.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + vid + "&key=AIzaSyA2yj3s-WbKec_uUhEVc8AVOfjGglVnGiE",false);
        xhr.send();
        var res = JSON.parse(xhr.responseText);
        finalobj.url = promo.items[i].snippet.thumbnails.default.url
        finalobj.date = promo.items[i].snippet.publishedAt
        finalobj.title = promo.items[i].snippet.title
        finalobj.channeltitle = promo.items[i].snippet.channelTitle
        finalobj.description = promo.items[i].snippet.description
        finalobj.viewcount = res.items[0].statistics.viewCount
        finalobj.id = vid;
        MainResult.push(finalobj);




    }


    return MainResult;



}

function AddHtml(divide)
{
    
    var successurl = MainResult;
    
    
    var OuRHtml = "";
    
         
    data.length = 0;
    if (typeof data === 'undefined' || data.length === 0) {
        var i = 0;
        for (var itm in successurl) {
            i++;
            var url = "https://www.youtube.com/watch?v=" + successurl[itm].id;
            OuRHtml += '<div class="innerdiv">' + '<img src="' + successurl[itm].url + '" alt = "HTML Tutorial"  style="margin-left:10px;margin-top:5px;width:140;height:auto" />' + '</br>' + '<p>&nbsp;&nbsp;channel Name : ' + successurl[itm].channeltitle + '</p>' + '</br>' + '&nbsp;&nbsp;Published At :' + successurl[itm].date + '</br>' + '&nbsp;&nbsp;<a href="' + url + '"target="_blank"style="width:140px;word-wrap:breakword">' + successurl[itm].title + '</a>' + '</br><h1>viewcount:' + successurl[itm].viewcount + '</h1>' + '</div>' + '</br>';
            if (i % divide == 0) {
                i =1;
                //alert(wrapper.innerHTML);
                data.push(OuRHtml);
                OuRHtml = " ";

            }

        }

    }
   
    






   
    


}

function AddPaging() {
    
    var screensize = getscreensize();
    var paginationwrapper = document.getElementById('pagination');
    if (paginationwrapper.innerHTML != "") {
        paginationwrapper.innerHTML = "";
    }

    if (0 < screensize && screensize<361)
    {
        paginationwrapper.innerHTML = "";
        AddHtml(1);
        for (var i = 1; i < 4; i++) {
          paginationwrapper.innerHTML += '<a href="#" onclick="mydatafunction({ param2:' + 1 + '});">page' + i + '</a>&nbsp;&nbsp'
        }
     mydatafunction({ param2: 1 });
        alert("mobile");

    }
    else
        if (360 < screensize && screensize < 769)
    {

            paginationwrapper.innerHTML = "";
            AddHtml(3)
            for (var i = 1; i < 4; i++) {

                paginationwrapper.innerHTML += '<a href="#" onclick="mydatafunction({ param2:' + i + '});">page' + i + '</a>&nbsp;&nbsp'

            }


            mydatafunction({ param2: 1 });

        alert("ipad");
    }
    else if (screensize > 768) {

        paginationwrapper.innerHTML = "";
        AddHtml(5);
        for (var i = 1; i < data.length; i++) {

            paginationwrapper.innerHTML += '<a href="#" onclick="mydatafunction({ param2:' + i + '});">page' + i + '</a>&nbsp;&nbsp'

        }

        mydatafunction({ param2: 1 });
    }

}

function getscreensize() {


    return screen.width;

}

function mydatafunction(params) {


    var wrapper = document.getElementById('outputscreen');
    var page = parseInt(params['param2']);
    wrapper.innerHTML = "";
    wrapper.innerHTML = data[page];

   
}


















