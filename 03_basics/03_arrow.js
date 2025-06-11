const user = {
    username : "hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`)

        console.log(this)
    }



}

// console.log(this)

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){

//     let userName = "Hitest"
//     console.log(this.userName)
// }
// chai()


// const chai = function(){
//     let userName = "Mohit"
//     console.log(this.userName)
// }
// chai()




// const chai = () =>{
//     let userName = "Mohit"
//     console.log(this.userName)
// }
// chai()



// Arrow

// () => {}


// const addtwo = (num1,num2) => {
//     return num1+num2
// }

const addtwo = (num1,num2) => num1+num2

const addtwo3 = (num1,num2) => (num1+num2)

console.log(addtwo(2,3))
console.log(addtwo3(2,3))


const add2 = (num1,num2) => ({username:"Hitesh"})

console.log(add2(3,4))

const myArray = [2,4,6,7,8,9,5]

// myArray.forEach()