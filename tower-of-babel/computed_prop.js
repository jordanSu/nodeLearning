var evenOrOdd = +process.argv[2];
var obj = {};

obj[evenOrOdd % 2 === 0 ? "even" : "odd"] = evenOrOdd;
obj[+process.argv[3] + evenOrOdd] = +process.argv[3] + evenOrOdd;

console.log(obj);
