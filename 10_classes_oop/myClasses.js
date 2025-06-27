// ES6

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password    
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

// //     changeusername(){
// //         return `${this.username.toUpperCase()}`
// //     }
// // }


// const chai = new User("chai","chai@gmail.com","12345")

// console.log(chai.encryptPassword())
// console.log(chai.changeusername())


// Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password   
};

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea =new  User("chai","chai@gmail.com",1234)
console.log(tea.changeusername())
console.log(tea.encryptPassword())