//Install express server
const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist/assets'));
app.get('*',function(req,res){
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8080, function()
{
    console.log("ok");
});