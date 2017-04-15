var sprintf = require('sprintf');
var fs = require('fs');
var through = require('through2');
var split = require('split2');
var quote = require('quote-stream');
var preface = require('preface').PrependStream;
var Stream = require('stream');
var combine = require('stream-combiner2');
module.exports = function (file) {
	if (!/\.txt$/.test(file)) return through();
	var count = 0;
	var prepend = new preface('module.exports = ');

	var tr = through(function (buf, _, next) {
		var line = buf.toString('utf8') + "\n";
		if (count % 5 == 0)
			this.push(sprintf("%3d %s", count, line));
		else
			this.push("    " + line);
		count += 1;
		next();
	})

	return combine(split(), tr, quote(), prepend);
}
