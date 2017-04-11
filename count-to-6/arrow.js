var input = process.argv.slice(2);
var result = input.map((val)=> val[0]).join("");

console.log(`[${input}] becomes "${result}"`);
