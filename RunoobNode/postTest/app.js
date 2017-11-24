var http = require("http");
var querystring = require("querystring");

var postHTML = 
'<html><head><meta charset="utf-8"><title>postTest</title></head>' +
'<body><form method="post">用户名:<input name="username"><br>密码:<input name="password"><br>' +
'<input type="submit"></form></body></html>';

http.createServer(function(req,res){

    var body = "";
    req.on('data',function(chunk){
        body += chunk;
    });
    req.on('end',function(){

        body = querystring.parse(body);
        res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});

        if(body.username && body.password){
            res.write("username:" + body.username + "<br>");
            res.write("password:" + body.password);
        }else{
            res.write(postHTML);
        }
        res.end();
    });
}).listen(8888);