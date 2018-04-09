var fs = require('fs');

//非同步讀取檔案
/*fs.readFile('TestFile.txt', function(err, data){
	if (err) throw err;

	console.log(data.toString());
});*/


//同步讀取檔案
/*var data = fs.readFileSync('Syncfile.txt', 'utf8');
console.log(data);*/


//寫入檔案 fs.writeFile()
/*fs.writeFile('Write.txt', '寫入檔案測試', function(err){
	if (err)
		console.log(err);
	else
		console.log('資料已被寫入');
});
*/

//添加資料在後面，不附蓋
/*fs.appendFile('Write.txt', '附加檔案測試', function(err){
	if (err)
		console.log(err);
	else
		console.log('資料已加入');
});*/


//開啟檔案進行讀寫動作
//fs.open(path, flags[, mode], callback)
//path：檔案的完整路徑及檔名，格式字串
//flag：操作行為
/*
	Flag
	r 	打開文件進行閱讀，如果文件不存在，則異常
	r+	打開文件進行讀寫，如果文件不存在，則異常
	rs 	打開文件在同步模式下讀取
	rs+ 打開文件進行讀寫，並告訴作業系統同步打開它，「慎用！」
	w 	打開寫入文件，該文件被創建(如文件不存在)，或截斷(如文件存在)
	wx 	類似 'w' 但，如果路徑存在則失敗
	w+ 	打開文件進行讀寫，該文件被創建(如文件不存在)，或截斷(如文件存在)
	wx+ 類似 'w+' 但，如果路徑存在則失敗
	a 	打開要附加的文件。如果文件不存在，則創建該文件。
	ax 	類似 'a' 但，如果路徑存在則失敗
	a+ 	打開文件進行閱讀和附加。如果文件不存在，則創建該文件。
	ax+ 類似 'a+' 但，如果路徑存在則失敗
*/
//mode：mode 代表文件的權限，預設為0666，代表可讀可寫。
//call back：是帶2個參數的function，err 及 file data ，當我們執行 open 完成時要做的事
//			 ，例如：打開成功的訊息顯示；失敗時，丟出 err。

fs.open('TestFile.txt', 'r+', function(err, fd){
	if (err) throw err;
	console.log('檔案開啟成功！');
})