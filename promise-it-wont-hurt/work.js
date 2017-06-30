var HTTP = require("q-io/http");

var promise = HTTP.read("http://localhost:7000");

promise.then((buf) => {
	var url = "http://localhost:7001/" + buf.toString();
	HTTP.read(url).then((buf2) => {
		console.log(JSON.parse(buf2.toString()));
	});
});
