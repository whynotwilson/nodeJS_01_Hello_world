var express = require('express');
var app = express();

/*
//單個靜態檔案服務
//setting middleware
app.use(express.static(__dirname + '/public'));
//Serves resources from public folder

var server = app.listen(5050);
*/

//多個靜態檔案服務
app.use(express.static('public'));

//Servers all the request which includes /images in the url from images folder
//app.use('/images', express.static(__dirname + 'images'));

//虛擬路徑
app.use('/hello', express.static(__dirname + 'images'));

var server = app.listen(5050);