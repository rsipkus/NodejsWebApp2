var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 80;

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from the git hub baby express!\n');
});

http.listen(port, function () {
    console.log('listening on *:80');
});



