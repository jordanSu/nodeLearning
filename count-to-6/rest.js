module.exports = function (...numbers) {
	var total = 0;
	numbers.forEach(function (val) {
		total += val;
	});
	return total/numbers.length;
}
