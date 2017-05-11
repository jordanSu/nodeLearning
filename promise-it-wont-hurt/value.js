function attachTitle (str) {
	return "DR. " + str;
}

Promise.resolve("MANHATTAN")
	.then(attachTitle)
	.then(console.log);
