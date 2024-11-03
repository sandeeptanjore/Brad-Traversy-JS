const num = new Number(3.1281239);
let x;
console.log(typeof num);

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toLocaleString('en-US');
console.log(x);
