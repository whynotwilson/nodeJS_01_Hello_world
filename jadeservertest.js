//不使用 express 的 jade 樣板 server

var http = require('http'); // 1 - Import Node.js core module
var jade = require('jade');

var data = jade.renderFile('./views/sample.jade');

// 2 - creating server
var server = http.createServer(function (req, res) {

	//check the URL of the current request
	if (req.url == '/') {

		//set response header
		res.writeHead(200, { 'Content-Type':'text/html' });
		//set response content
		res.write(data);
		res.end();

	}else
		res.end('Invalid Request!');

});

//3 - listen for any incoming requests
server.listen(3000);
console.log('Node.js web server at port 3000 is running...');
