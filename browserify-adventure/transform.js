var sprintf = require('sprintf');
var fs = require('fs');

var data = fs.readFileSync('wake.txt', 'utf8');
var lines = data.split('\n');

var count = 0;
for (var line of lines) {
	if (count % 5 == 0)
		console.log(sprintf("%3d %s", count, line));
	else
		console.log("    " + line);
	count += 1;
}
