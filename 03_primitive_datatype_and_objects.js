// primitive datatype
// there are 7 types of primitive datatype
// short hand to remember 
// nn bb ss u

let a = null; // null
let b = 7877;   // number
let c = true;   // boolean
let d = BigInt("6767676");  // bigint
let e = "this is jaymin";   // string
let f = Symbol("this is symbol");   // symbol
let g = undefined;  // undefined 

console.log(a,b,c,d,e,f,g);

// To type of variable
console.log(typeof(a));


// let's learn object
const item = {
    "jay":"darji",
    "deep":"patel",
    "harshal" : "nasit",
    "vraj" : "parmar",
    "poonam" : false,
    "pooja" : 65,
}

console.log("\nprinting the objects using first method \n ")
// first way of printing the object
console.log(item["jay"])
console.log(item["deep"])
console.log(item["harshal"])
console.log(item["poonam"])

// second way to print
console.log("\nprinting the objects using second method \n ")
console.log(item.jay)
console.log(item.harshal)
console.log(item.poonam)
console.log(item.deep)