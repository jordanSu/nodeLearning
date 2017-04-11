var express = require('express');
var app = express();

app.get('/search', function (req, res) {
	var result = {};
	for (var a in req.query) {
		result[a] = req.query[a];
	}
	res.send(result);
	res.end();
});

app.listen(process.argv[2]);
