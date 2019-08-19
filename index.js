//Install express server
const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(__dirname + '/dist/TFTPaths'));
app.use(express.static(__dirname + '/dist/TFTPaths/assets'));
app.get('*',function(req,res){
    res.sendFile(__dirname + '/dist/TFTPaths/index.html');
});

app.listen(process.env.PORT || 8080, function()
{
    console.log("ok");
});