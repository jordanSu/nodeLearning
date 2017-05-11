var promise = new Promise((fulfill, reject) => {
	reject(new Error("NOT GOOD"));
});

promise.catch((err)=> {console.log(err.message)});

var newPromise = Promise.resolve("I AM GOOD");
