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

/*fs.open('TestFile.txt', 'r+', function(err, fd){
	if (err) throw err;
	console.log('檔案開啟成功！');
})*/


//開啟讀取檔案
//而與fs.open有關的，即我們要在open操作時，也讀取文件時，該怎麼做呢？
//我們可以在fs.open時，執行 fs.read()。
//fs.read(fd,buffer,offset,length,position,callback)
//fd：透過fs.open()方法返回的文件描述符。
//buffer：數據寫入的緩衝區。
//offset：緩衝區寫入的寫入偏移量。
//length：要從文件中讀取的字元數。
//position：文件讀取的起始位置，如果 position 的值為 null ，則會從當前文件游標的位置讀取。
//callback：回呼函式，有三個參數 err, bytesRead, buffer。
//			err：錯誤訊息
//			bytesRead：讀取的字元數   
//			buffer：緩衝區對象

fs.open('TestFile.txt', 'r', function(err, fd){
	if (err) {
		return console.error(err);
	}

	var buffr = new Buffer(1024);

	fs.read(fd, buffr, 0, buffr.length, 0, function(err, bytes){
		if (err) throw err;

		//Print only read bytes to avoid junk.
		if(bytes > 0){
			console.log(bytes + ' 字元被讀取');
			console.log(buffr.slice(0,bytes).toString());
		}

		//Close the opened file.
		fs.close(fd, function(err){
			if(err) throw err;
		});

		//fd: 透過 fs.open() 方法返回的文件描述符。
		//call back: 只帶一個錯誤參數err的function，當我們執行close完成時, 要做的事。
		//例如: 失敗時，丟出err。
	});
});


//刪除文件
/*
	fs.unlink(path, callback);
	path: 檔案路徑。
	callback: 只帶一個錯誤參數err的function，當我們執行unlink完成時, 要做的事。
			  例如: 刪除成功的訊息顯示；失敗時，丟出err。
*/

fs.unlink('TestFile.txt',function(err){
	if (err) throw err;
	console.log('刪除檔案成功!');
})

//https://ithelp.ithome.com.tw/articles/10185422
