var http = require("http");
var url = require("url");
function onstart(route){

    function onRequest(request,response){

        var pathUrl= url.parse(request.url).pathname; //parse to get value
        route(pathUrl);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("<h1>Router Test</h1>");
        response.end();

    }

    http.createServer(onRequest).listen(8888);
    
}

exports.start = onstart;