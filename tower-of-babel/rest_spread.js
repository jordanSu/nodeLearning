var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') args.push(+val);
    });
});

function avg (...args) {
    var total = 0;
    args.forEach((x) => {
        total += x;
    })
    return total / args.length;
}

console.log(avg(...args));
