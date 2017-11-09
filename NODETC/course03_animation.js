var http = require("http");
var fs = require("fs"); //读取服务器硬盘的文件

var server = http.createServer(function(req,res){

    res.setHeader("Content-Type","text/html;charset=UTF-8");
    console.log(req.url);  // /a /b /c
    switch(req.url){
        case "/a":
            // 异步函数，读取到的内容通过回调函数返回，
            fs.readFile("./course03_animation.html",function(err,data){
                res.end(data.toString());
            });  //异步读取文件
            break;
        default:
            console.log("hello");
            res.end("对不起，没有这个页面");
            break;
    }


});

server.listen(3800,"127.0.0.1");