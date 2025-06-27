function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 5

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username,score){
    this.username = username
    this.score = score
}

const usr1 = new createUser("Mohit",98)
console.log(usr1)