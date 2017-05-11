function all (p1, p2) {
	var counter = 0;
	
	var promise = new Promise((fulfill, reject) => {
		var both = [];
		
		p1.then((val) => {
			both[0] = val;
			counter += 1;
			if (counter === 2)
				fulfill(both);
		});

		p2.then((val) => {
			both[1] = val;
			counter += 1;
			if (counter === 2)
				fulfill(both);
		});
	});
	return promise;
}

all(getPromise1(), getPromise2())
	.then(console.log)
