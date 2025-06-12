// const { use } = require("react")

const userEmail = []

// if (userEmail) {    
//     console.log("Email is present");
// }else {
//     console.log("Email is not present");
// }


// Falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN


// Truthy values// true,1,-1,BigInt 1n," ",[],{},function(){},new Date(),Infinity,-Infinity
//"0", "false", "null", "undefined", "NaN" are all truthy values," ",[],{},function(){},new Date(),Infinity,-Infinity are all truthy values


if(userEmail.length ===0) {
    console.log("Array is empty");
}    

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null or undefined

let val1;
// val1 = 5??10

// val1 = null ?? 10

// val1 = undefined ?? 15


val1 = null ?? 10??20

console.log(val1); // 5


// Ternary Operator

// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 50;
iceTeaPrice>=80 ? console.log("Expensive") : console.log("Cheap");

