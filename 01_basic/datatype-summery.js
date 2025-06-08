// Primitive


// 7
// String, Number, Boolean,null,undefined,Symbol,BigInt

// Refrence type(non primitive)

// Array, Object,function

const score = 100
const scoreValue = 100.3

const isLoggeedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')

const anotherId = Symbol('123')

console.table([id,anotherId])
console.log(id === anotherId)


// const bigNumber = 324558976897656

const heros = ["mohit","naagraj","doga"]

let myObj = {
    name : "Mohit",
    age : 18
}

const myFunction = function(){
    console.log("Hello World")
}


// stack(Primitive), Heap(Non primitive)