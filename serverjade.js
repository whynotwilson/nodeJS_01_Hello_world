var express = require('express');
var app = express();

//set view engine
app.set('view engine','jade')
//set view directory
app.set('views','views')

app.get('/',function (req, res){
	res.render('sample'); //render 樣板，執行編譯。
});

var server = app.listen(3000, function() {
	console.log('Node Jade server is running...');
});

/*
	要注意的是：
	1.jade template 必須寫在 .jade檔案裡
	2.將副檔名為 .jade的檔案，儲存在網站根目錄下面的views，express預設從views資料夾取樣版。
	3.如果要自訂樣版存放資料夾，我們在 express server 必須使用 
	  app.set(“veiws","自訂樣版存放資料夾絕對路徑")
*/