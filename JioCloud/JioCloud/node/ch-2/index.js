const { add, sub, mul } = require('./module/math');
const h = require('');

console.log(add(30, 20));
console.log(sub(35, 30));
console.log(mul(20, 35));

const students = {
    name: "yash",
    age: 20,
    course: "html css js"
}
const array = [20, 30, 35, "Hello", 67.93, false];
let { name, age, course } = students;
let [a, b, c, d, e, f] = array;

console.log(name);
console.log(age);
console.log(course);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
