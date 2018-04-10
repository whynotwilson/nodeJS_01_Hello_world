var express = require('express');
var app = express();

app.get('/', function (req, res) {
	//res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.post('/submit-data', function(req, res){
	res.send('POST Request');
});

app.put('/updata-data', function(req, res){
	res.send('PUT Request');
});

app.delete('/delete-data', function(req, res){
	res.send('DELETE Request');
});



//define routes here...

var server = app.listen(5000, function () {
	console.log('Node server is running...');
});