//Install express server
const express = require('express');
const path = require('path');

var app = express();
// Start the app by listening on the default Heroku port
var port = 8080;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist/assets'));
app.get('*',function(req,res){
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function()
{
    console.log("ok");
});