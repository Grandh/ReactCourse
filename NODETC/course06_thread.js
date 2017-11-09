var http = require("http");

//全局变量a
var a = 0;
// 向favio.png发出请求？
var server = http.createServer(function(req,res){
    // a++;  //每个用户都共用一个
    // res.end(a.toString());

    var ip = req.connection.remoteAddress;
    //每个用户分配一个数字
    var s = parseInt(Math.random() * 10);
    a++;
    res.end("<h1>"+a.toString()+"</h1>");
    if(s == 6){
        throw new Error(a.toString()); //抛出的形式要注意
    }
});

server.listen(3800,"127.0.0.1")