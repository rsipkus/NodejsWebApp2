var app = require('express')();
var http = require('http').Server(app);
var port = process.env.port || 1337;


app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>this is page one!');
});

http.listen(80);
/*
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from the git hub baby2!\n');
}).listen(port);*/