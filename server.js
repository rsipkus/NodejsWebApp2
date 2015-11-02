//var app = require('express');
var http = require('http');

/*
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>this is page one!');
});

http.listen(80,console.log("text"));*/

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from the git hub baby2!\n');
}).listen(80);


function PerformATask(time, callback) {
    setTimeout(callback, time);
}