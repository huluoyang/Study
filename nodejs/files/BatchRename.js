/**
 * Build Date: 16/1/21 15:24.
 * Copyright (c): NHN China Co.,LTD
 * Author: ZJDGX
 * Description:
 */

var fs = require('fs');

function FormatInteger(num, length) {
	return (num / Math.pow(10, length)).toFixed(length).substr(2);
}

function renameFiles(path, target) {
	fs.readdir(path, function (err, files) {
		var len = files.length,
			digitLen = len.toString().length;

		files.forEach(function (file, index) {
			fs.stat(path + file, function (err, stats) {
				if (stats.isDirectory()) {
					renameFiles(path + file + '/');
				} else {
					var fileName = path.match(/[\/(1)]\d{8}[\/{1}]$/)[0].replace(/\//g,'').replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3'),
							dest = target + fileName + '-' + FormatInteger(index + 1, digitLen) + file.substr(file.lastIndexOf('.'));

					fs.rename(path + file, dest, function (err, data) {
						if (err) {
							console.error('文件 (' + (path + file) + ') 重命名出错, err: ' + JSON.stringify(err));
						}
					});
				}
			});
		});
	});
}

renameFiles('E:/zjdgx/photo/20150318/', 'E:/zjdgx/photo/temp/');