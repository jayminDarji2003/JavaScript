// chapter 2 practice set

// Q.1
/*
let age = 16;
if(age > 10 && age < 20){
    console.log("your age lies between 10 and 20")
}else{
    console.log("your age doesn't lies between 10 and 20")
}
*/


// Q.2

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

