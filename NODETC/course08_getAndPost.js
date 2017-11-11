var http = require("http")
var url  = require("url")
var querystring = require("querystring")

var server = http.createServer(function(req,res){

    // GET请求
    // var query = url.parse(req.url,true).query; //第二位转成true,形成json格式
    // // var obj = querystring.parse(query)
    // console.log(query)

    //POST请求
    var result = "";
    req.on("data",function(chunk){ //这一部分传递了某个包
        //将小包传入大结果中
        result += chunk;
        console.log("收到一个包");
    });

    req.on("end",function(){
        console.log(result.toString());
    });
});

server.listen(3800,"127.0.0.1");