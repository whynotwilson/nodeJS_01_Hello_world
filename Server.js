// 1 - 載入 Node.js 原生模組 http
var http = require('http');

// 2 - 建立 server
var server = http.createServer (function (req, res){
	// 這邊處理客戶端向 http server 發送過來的 req 。
	if(req.url == '/'){

		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.write('<html><body>This is Home Page.</body></html>');
		res.end();

	}else if(req.url == '/student'){

		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.write('<html><body>This is Student Page.</body></html>');
		res.end();

	}else{

		res.end('Invalid Request!');
	}
});

// 3 - 進入網站監聽 port, 就是localhost:xxxx 的 xxxx
server.listen(5000);

console.log('Node.js web server at port 5000 is running...');