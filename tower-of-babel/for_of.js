const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        current += 1;
        if (current > max)
            return { done: true };
        else if (current % 3 === 0 && current % 5 === 0)
            return { done: false, value: "FizzBuzz" };
        else if (current % 3 === 0)
            return { done: false, value: "Fizz" };
        else if (current % 5 === 0)
            return { done: false, value: "Buzz" };
        else
            return { done: false, value: current };
      }
  };
  }
};

for (var a of FizzBuzz)
    console.log(a);
