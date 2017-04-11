var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
	var result = req.body.str.split('').reverse().join('');
	res.end(result);
})

app.listen(process.argv[2]);
