var express = require('express');
var session = require('express-session');
var app = express();

app.listen(8000, function(){
	console.log('lesson16-cookie-session started on port 8000...');
});

app.use(session({
	secret: 'recommand 128 bytes random string',// ����ʹ��128���ַ�������ַ���
	cookie: {maxAge: 60 * 1000}
}));

app.get('/', function(req, res){
	// ���session�е�isVisit�ֶ�
	// �������������һ��, ����Ϊsession����isVisit�ֶ�, ����ʼ��Ϊ1
	if (req.session.isVisit) {
		req.session.isVisit++;
		res.send('<p>��' + req.session.isVisit + '������ҳ��...');
	} else {
		req.session.isVisit = 1;
		res.end('��ӭ��һ��������...');
		console.log(req.session);
	}
});