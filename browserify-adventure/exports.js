var parse = require('./ndjson').parse;
var stringify = require('./ndjson').stringify;

var in1 = prompt();
var in2 = prompt();

console.log(parse(in1));
console.log(stringify(in2));
