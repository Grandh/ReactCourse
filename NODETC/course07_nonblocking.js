http = require("http");
fs = require("fs");

var server = http.createServer(function(req,res){
    
    var ip = req.connection.remoteAddress;
    console.log("hello" + ip)

    fs.readFile("./resources/text/text1.txt",function(err,data1){
        fs.readFile("./resources/text/text2.txt",function(err,data2){

            res.setHeader("Content-Type","text/html;charset=UTF-8")
            res.end(data1 + " " + data2);
        });
    });
});

server.listen(3800,"127.0.0.1");