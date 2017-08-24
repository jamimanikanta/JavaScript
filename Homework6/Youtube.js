

        var datasuccessurl;
        var data = [];

        function Mysearching() {
            data = [];

            AddPromising().then(function (successurl) {

                console.log(successurl);
                datasuccessurl = successurl;
                var countofpages = successurl.items.length / 5;

                var paginationwrapper = document.getElementById('pagination');
                if (paginationwrapper.innerHTML != "") {
                    paginationwrapper.innerHTML = "";
                }
                for (var i = 1; i < countofpages; i++) {

                    paginationwrapper.innerHTML += '<a href="#" onclick="mydatafunction({ param2:' + i + '});">page' + i + '</a>&nbsp;&nbsp'

                }
                mydatafunction({ 'param1': successurl, 'param2': 1 });


            }, function (failureurl) {


            });

        };


        function mydatafunction(params) {

            var successurl = datasuccessurl;

            var page = parseInt(params['param2']);

           
            var wrapper = document.getElementById('outputscreen');
            if (wrapper.innerHTML != "") {
                wrapper.innerHTML = "";
            }
           
            if (typeof data === 'undefined' || data.length === 0) {
                for (var itm in successurl.items) {
                    

                    var url = "https://www.youtube.com/watch?v=" + successurl.items[itm].id.videoId;
                    wrapper.innerHTML += '<div style=" border: solid 3px Red;display:inlineblock ">' + '<img src="' + successurl.items[itm].snippet.thumbnails.default.url + '" alt = "HTML Tutorial"  style="margin-left:10px;margin-top:5px;width:140;height:auto" />' + '</br>' + '<p>&nbsp;&nbsp;channel Name : ' + successurl.items[itm].snippet.channelTitle + '</p>' + '</br>' + '&nbsp;&nbsp;Published At :' + successurl.items[itm].snippet.publishedAt + '</br>' + '&nbsp;&nbsp;<a href="' + url + '"target="_blank"style="width:140px;word-wrap:breakword">' + successurl.items[itm].snippet.title + '</a>' + '</br>' + '</div>' + '</br>'

                    if (itm % 5 == 0) {
                        //alert(wrapper.innerHTML);
                        data.push(wrapper.innerHTML);

                        wrapper.innerHTML = '';

                    }




                }

            }
            console.log(page);
            wrapper.innerHTML = data[page];





        }




        function AddPromising() {

            return new Promise(function (resolve, reject) {


                var res = GetTheVideos()

                if (res.status === 200) {
                    var Result = JSON.parse(res.responseText);

                    resolve(Result);

                } else {

                    reject(Result);

                }


            });
        };



        function GetTheVideos() {
            var searchtext = document.getElementById("txtsearch").value;
            var parts = 'snippet';
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchtext + "&maxResults=25&key=AIzaSyA2yj3s-WbKec_uUhEVc8AVOfjGglVnGiE&type=video&fields=items/id,items/snippet/title,items/snippet/description,items/snippet/publishedAt,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken", false);
            xhr.send();
            //var res=JSON.parse(xhr.responseText);
            return xhr;


        }






  