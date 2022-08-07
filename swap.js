let num1 = 5;
let num2 = 7;
console.log(num1, num2);
const temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

let num3 = 10;
let num4 = 17;
console.log(num3, num4);
[num3, num4] = [num4, num3];
console.log(num3, num4);

