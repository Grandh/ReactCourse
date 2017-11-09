var http=require("http"); //要求使用的模块

//开启一个异步函数-服务器
var server = http.createServer(function(req,res){
    console.log("创建服务器成功");
    res.setHeader("Content-Type","text/html;charset=UTF-8");
    //res.write(xxx)
    res.end("<h1>Hello</h1>")
});

// Apache take the 80 port
server.listen(3000,"127.0.0.1");
// server是异步函数，一下将继续执行