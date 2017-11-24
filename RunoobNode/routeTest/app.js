var server  = require("./node_server")
var router  = require("./node_route")
server.start(router.route);