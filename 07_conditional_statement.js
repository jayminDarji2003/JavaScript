// Conditional statements
/*
    1. If 
    2. else if 
    3. if else if
    4. Switch

*/
// NOT :- Prompt and Alert is not run on vs code

/*

let age = prompt("Enter  your age : ");
console.log(typeof age);
age = Number.parseInt(age); // converting string to int

// if statement
if (age > 0) {
    alert("This is valid age!!");
}

// if else statement
if (age > 0) {
    alert("This is valid age!!");
}
else {
    alert("This is an invalid age!!");
}


// if else if statement
if(age < 0){
    alert("Invalid age!!");
}
else if(age < 9){
    alert("you are a kid and you can't even think of driving");
}
else if(age < 18 && age > 9){
    alert("you are a kid and you think of driving after 18");
}
else{
    alert("you can drive");
}

*/


// switch statement

let num1 = 5;
let num2 = 8;
let ch = '+';

switch(ch){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
    case '%':
        console.log(num1%num2);
        break;
    default :
        console.log("Invalid choice");
}


// ternary operator
let age = 19;
console.log("You can",(age >= 18) ? "Drive" : "not Drive")