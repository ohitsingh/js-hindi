// // for 
// ["","",""]
// [{},{},{}] - objects


const arr = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr) {
    // console.log(num)
    
}


const myArray = ["apple", "banana", "cherry", "date"];
for (const fruit of myArray) {
    // console.log(fruit);
}

const greeting = "Hello, World!";
for (const char of greeting) {
    // console.log(char);
}

// Maps -> unique keys and values
// Maps are iterable, allowing you to use for...of loops to iterate over their entries.
// They maintain the insertion order of their elements, unlike objects which do not guarantee order.
// Maps can have keys of any type, including objects, functions, and primitive types.
// Maps are useful when you need to associate values with unique keys and require ordered iteration.
// Example of using a Map

const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for(const [key,Value] of map){
    // console.log(key, "-" ,Value);
}

const myObject = {
    "game1": "Chess",
    "game2": "Checkers"
}

for (const [key,Value] of myObject) {
    console.log(key, "-", Value);
    
}