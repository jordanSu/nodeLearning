const max = process.argv[2];
let FizzBuzz = function* () {
    let current = 0;
    while (current < max) {
        current += 1;
        if (current % 3 === 0 && current % 5 === 0)
            yield "FizzBuzz";
        else if (current % 3 === 0)
            yield "Fizz";
        else if (current % 5 === 0)
            yield "Buzz";
        else
            yield current;
    }
}

for (var a of FizzBuzz())
    console.log(a);
