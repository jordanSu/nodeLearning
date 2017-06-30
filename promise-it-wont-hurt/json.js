var HTTP = require("q-io/http");

var promise = HTTP.read("http://localhost:1337");

promise.then((buf) => {
	console.log(JSON.parse(buf.toString()));
});
