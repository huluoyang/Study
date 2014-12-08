/**
 * Created by nhn on 2014/12/5.
 */

var connect = require("connect"),
    app = connect();

function logger(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.setHeader('Set-cookie', 'author:zjdgx');
    res.end('hello world.');
}

function redirect(req, res, next) {
    var auth = req.headers.authorization;

    if (!auth) return next(new Error('Unauthorized.'));

    var parts = auth.split(' '),
        scheme = parts[0],
        aut = new Buffer(parts[1], 'base64').toString().split(':'),
        user = aut[0],
        pass = aut[1];

    authenticateWithDatabase(user, pass, function (err) {
        if (err) return next(err);

        next();
    })
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try/users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
}

app.use(logger).use('/admin', redirect).use('/admin', admin).use(hello).listen(8000);


/*.use(logger).use(function (req, res, next) {
 res.setHeader('Content-Type', 'text/html');
 res.setHeader("Set-Cookie", ["author=zjdgx"]);
 //  res.write("end connect: zjdgx function finished....");
 // console.log("next....");
 //next();
 }).use(function (req, res) {
 res.end("connect middleware zjdgx function with send.\n");
 }).listen(8000);

 */