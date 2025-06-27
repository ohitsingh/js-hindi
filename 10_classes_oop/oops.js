const user ={
    username: "hitesh",
    loginCount:8,
    singnedIn: true,


    getUserDetails: function(){
        // console.log("Got user Details")
        // console.log(`username: ${this.username}`)

    }

}

// console.log(user)

// const promiseOne = new Promise()
// const date = new Date()


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount

    return this
}

const userOne = new User("hitesh",12,true)
console.log(userOne)