// valid statement in js
// 77;
// "jaymin darji";

// operator in JavaScript

// 1.Arithmatic operator
let a = 10;
let b = 2;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);

console.log("a**b = ", a ** b); // a to the power b

// console.log("a++ = " , a++);
// console.log("++a = " , ++a);
// console.log("a = " , a);

// console.log("a-- = " , a--);
// console.log("--a = " , --a);
// console.log("a = " , a);

// assignment operator

let assignment = 1;
console.log("+= " + (assignment += 5));
console.log("-= " + (assignment -= 5));
console.log("*= " + (assignment *= 5));
console.log("/= " + (assignment /= 5));
console.log("%= " + (assignment %= 5));
console.log("**= " + (assignment **= 5));


// comparision opertor
let comp1 = 4;
let comp2 = "6";

console.log("== ", comp1 == comp2);
console.log("!= ", comp1 != comp2);

console.log("=== ", comp1 === comp2);
console.log("!== ", comp1 !== comp2);

console.log("< " ,comp1 < comp2);
console.log("<= " ,comp1 <= comp2);
console.log("> " ,comp1 > comp2);
console.log(">= " ,comp1 >= comp2);

console.log("comp1 < comp2 --> " , comp1 < comp2 ? "comp2 is max" : "comp1 is max");


// logical operator
// There are three type of logical operator
// && --> and
// || --> or
// ! --> not

let x = 10; 
let y = 11;
let z = 12;
console.log(x<y && x<z);
console.log(x<y || x>z);
console.log(!(x<y));