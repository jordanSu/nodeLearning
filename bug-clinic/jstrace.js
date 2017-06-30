var http = require('http');
var jstrace = require('jstrace');
var server = http.createServer(function (req, res) {
	jstrace("request:start", {"url": req.url});
	if (req.method == "GET" && req.url == "/prognosis") {
		res.statusCode = 200;
		res.end('{"ok":true}');
	}
	else {
		res.statusCode = 404;
		res.end('{"error":"notfound"}');
	}
	jstrace("request:end", {"statusCode": res.statusCode, "body": res.body});
});

server.listen(9999, function () {
	console.error("up")
});
