var Q = require("q");
function alwaysThrows () {
	throw new Error("OH NOES");
}

function iterate (arg) {
	console.log(arg);
	return arg + 1;
}

Q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log)
	.done()
