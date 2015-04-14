var fs = require('fs'),
	path = require('path'),
	_ = require('underscore'),
	config = require('../../config'),
	formidable = require('formidable'),
	mongo = require('../util/db_mongodb'),
	fileUtil = require('../util/fileUtil'),
	targetPath = config.server.fileUploadPath;

exports.uploadFile = function (req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, file) {
		if (err) {
			res.render('uploadResult.jade', {
				result: -1,
				msg: 'file upload failed...'
			});
		} else {
			var is = fs.createReadStream(file.file.path),
				os = fs.createWriteStream(path.join(targetPath, file.file.name));

			is.pipe(os);
			os.on('end', function () {
				console.log('�ļ��ϴ��ɹ�...');
			});
		}
	});
};

exports.filelist = function (req, res) {
	mongo.find('uploadFiles', {}, {}, function (err, data) {
		if (err) {
			res.json({result: -1, msg: "��ѯʧ��."});
		} else {
			res.json({result: 1, files: data});
		}
	});
};

exports.zjdgxUploadFile = function(req, res) {
	// ����ļ�����ʱ·��
	var tmp_path = req.files.file.path;
	// ָ���ļ��ϴ����Ŀ¼ - ʾ��Ϊ"images"Ŀ¼��
	var target_path = 'uploadFiles/' + req.files.file.name;
	// �ƶ��ļ�
	fs.rename(tmp_path, target_path, function(err) {
		if (err) throw err;
		// ɾ����ʱ�ļ����ļ�,
		fs.unlink(tmp_path, function() {
			if (err) throw err;
			res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes');
		});
	});
}