

// console.log("m")



function saveMyName(){
    console.log("M")
    console.log("o")
    console.log("h")
    console.log("i")
    console.log("t")
}

// saveMyName()
// saveMyName


// function addTwoNumber(number1,number2){  // parameter
//     console.log(number1+number2)
// }

// const result = addTwoNumber(2,3) // argument
// console.log(result)


function addTwoNumber(number1,number2){  // parameter
    // let result = number1+number2
    // return result;

    return number1+number2
}

const result = addTwoNumber(2,3)
// console.log(result)

function loginUserMessage(userName ="sam"){

    if(!userName){
        console.log("please enter a userName")
        return

    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Mohit"))

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1;

}

// console.log(calculateCartPrice(200,400,500,700,9000))

// const user = {
//     userName : "Mohit",
//     price : 2000
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    userName :"sam",
    price:299
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray))

