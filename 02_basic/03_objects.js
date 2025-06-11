// singleton
// Object.create

// object literals


const mySum = Symbol("Key1")

const JsUser ={
    name : "Mohit",
    "full name" : "Mohit Kumar",
    age : 18,
    [mySum] : "myKey1",
    email : "m@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])


JsUser.email = "mk.chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kishu@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())





