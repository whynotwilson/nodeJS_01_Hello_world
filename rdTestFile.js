var fs = require('fs');

//非同步讀取檔案
fs.readFile('TestFile.txt', function(err, data){
	if (err) throw err;

	console.log(data.toString());
});


//同步讀取檔案
var data = fs.readFileSync('Syncfile.txt', 'utf8');
console.log(data);


//寫入檔案 fs.writeFile()
fs.writeFile('Write.txt', '寫入檔案測試', function(err){
	if (err)
		console.log(err);
	else
		console.log('資料已被寫入');
});


//添加資料在後面，不附蓋
fs.appendFile('Write.txt', '附加檔案測試', function(err){
	if (err)
		console.log(err);
	else
		console.log('資料已加入');
});
