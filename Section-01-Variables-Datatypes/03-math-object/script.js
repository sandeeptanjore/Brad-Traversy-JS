console.log(Math);

let x;
x = Math.sqrt(9);
x = Math.abs(-7);

x = Math.round(4.2);

//round up - ceil
x = Math.ceil(6.2);
//round down - floor
x = Math.floor(6.9);

x = Math.min(2, 20, 3);
x = Math.max(2, 20, 3);

//Random method
x = Math.random(); // this gives random decimal between 0 and 1

x = Math.random() * 10; //this gives random number between 0 to 9 with decimals
x = Math.random() * 10 + 1; // this gives random number between 1 to 10 with decimals

//Now converting the above x to a whole number. This will give random number between 1 and 10
x = Math.floor(Math.random() * 10 + 1);

//This will give random number between 1 and 100
x = Math.floor(Math.random() * 101 + 1);

console.log(x);
