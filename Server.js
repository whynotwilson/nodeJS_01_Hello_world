// 1 - 載入 Node.js 原生模組 http
var http = require('http');

var server = http.createServer(function (req, res){
	// 2 - 建立 server

});

// 3 - 進入此網站的監聽 port, 就是localhost:xxxx 的 xxxx
server.listen(5000);


console.log('Node.js web server at port 5000 is renning...');
