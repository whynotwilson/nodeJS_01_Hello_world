var log = {
	info: function (info) {
		console.log('Info: ' + info);
	},
	warning: function(warning) {
		console.log('Warning: ' + warning);
	},
	error: function(error) {
		console.log('Error: ' + error);
	}
};

module.exports = log
 //讓別的模組(程式)可以使用我們的模組(程式)