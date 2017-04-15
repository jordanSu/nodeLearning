var inputs = process.argv.slice(2);

var result = inputs.map((x)=>{ return x[0].toUpperCase() }).join('');

console.log(result);
