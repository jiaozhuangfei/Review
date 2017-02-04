var http = require('http');
var url = require('url');
var app = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    var reg = /([^?&=#]+)=([^?&=#]+)/g;
    var obj = {};
    if (query) {
        query.replace(reg, function () {
            console.log(arguments);
            obj[arguments[1]] = arguments[2];
        });
    }
    console.log(obj);
    res.end(JSON.stringify(obj));
});
app.listen(8899, function () {
    console.log('8899');
});