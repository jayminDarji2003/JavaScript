// simple for loop
// for(let i=0; i<43; i++){
//     console.log(i);
// }


// Q :- add first natural numebrs
/*
let sum = 1;
let n = 5;
for(let i=1; i<=n; i++){
    sum += i;
}
console.log("The sum of natural number is : " + sum);
*/



// type of for loop
// for in loop
// for of loop

//1. For in loop

const obj = {
    jay : 97,
    deep : 88,
    jeel : 77,
    dev : 66,
    harsh : 64,
}
for(let a in obj){
    console.log(a); // print keys
    console.log(obj[a]);    // print values 
}

// 2. For of loop
// this loop is used in String and Array
let name = ["jaymin" , "deep" , "jeel" , "dev"];   // array
for(let b of name){
    console.log(b);
}
