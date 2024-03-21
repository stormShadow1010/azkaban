const { log } = require('console');
var express = require('express');
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function (req, res) {
    res.send('Hello World from IdenticalClound!');
});

var server = app.listenerCount(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listtening at http://%s:%s',host, port);
})