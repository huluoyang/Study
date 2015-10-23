/**
 * Build Date: 15/10/16 11:24.
 * Copyright (c): NHN China Co.,LTD
 * Author: jianggang
 * Description:
 */
var mysql = require('../util/mySqlPool');

exports.main = function (req, res) {
	res.render('student/studentList', {
		cur: 'student'
	});
};

exports.studentList = function (req, res) {
	var offset = req.body.offset || 0,
		limit = req.body.limit;

	mysql.mySqlQuery(
		'SELECT * FROM student' + (limit ? ' limit ' + offset + ', ' + limit : ''),
		{},
		function (result) {
			res.send(result);
		}
	);
};

exports.courses = function (req, res) {
	res.send({courses: [
		{
			primary: [
				{'11': '��ѧ'},
				{'12': '����'},
				{'13': 'Ӣ��'}
			]
		},
		{
			junior: [
				{'21': '��ѧ'},
				{'22': '����'},
				{'23': 'Ӣ��'},
				{'24': '����'},
				{'25': '��ѧ'},
				{'26': '����'},
				{'27': '��ʷ'},
				{'28': '����'}
			]
		},
		{
			senior: [
				{'31': '��ѧ'},
				{'32': '����'},
				{'33': 'Ӣ��'},
				{'34': '����'},
				{'35': '��ѧ'},
				{'36': '����'},
				{'37': '��ʷ'},
				{'38': '����'}
			]
		},
		{
			language: [
				{'41': 'Ӣ��'},
				{'42': '����'},
				{'43': '����'}
			]
		},
		{
			music: [
				{'51': '������'},
				{'52': '����'},
				{'53': '����'},
				{'54': '����'}
			]
		},
		{
			others: [
				{'61': '�鷨'},
				{'61': '��ȭ��'}
			]
		}
	]});
};