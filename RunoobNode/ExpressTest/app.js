var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.end("Hello world");
});

var server = app.listen(8888,function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s",host,port);
})

