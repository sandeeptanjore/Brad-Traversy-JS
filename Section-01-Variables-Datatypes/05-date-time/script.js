let d, x;
d = new Date();
x = d.toString();
x = d.getTime();
x = d.getFullYear();
x = d.getMonth();
x = d.getHours();

x = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;

console.log(x);
