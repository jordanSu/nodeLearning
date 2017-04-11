var arg1 = process.argv[2];
var arg2 = process.argv[3];
import myMath from './module_module1';

console.log(myMath.PI);
console.log(myMath.sqrt(+arg1));
console.log(myMath.square(+arg2));
