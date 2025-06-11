// singlonton object
const tinderUser = new Object();
//console.log(tinderUser)

// non singlonton objects

const tinderUser1 = {}

tinderUser1.id = "123abc"
tinderUser1.name = "sam"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1)

const regularUser = {
    email : "soomeone.com",
    fullname : {
        username:{
            fristName : "hitesh",
            lastName : "choudhary"
        }

    }
}


// console.log(regularUser.fullname.username.fristName)

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b"}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)


//const obj4 = {obj1,obj2}
//console.log(obj4)

obj4 = {...obj1,...obj2}
//console.log(obj4)


console.log(tinderUser1)
console.log(Object.keys(tinderUser1))
console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))
console.log(tinderUser1.hasOwnProperty('isLoggedIn'))



const course = {
    courseName : "Js In Hindi",
    price : "999",
    courseInstructor : "mohit"
}

const {courseInstructor : instructor } = course
//console.log(courseInstructor)
console.log(instructor)



// {
//     name:"Mohit",
//     courseName :"js in hindi",
//     price : "hindi"
// }

