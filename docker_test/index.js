var http = require('http');

http.createServer(function(req, res){
    res.end(`The client's IP Address is: ${req.socket.remoteAddress}`);
}).listen(8080);