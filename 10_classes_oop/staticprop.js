class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`)
    }

    createId(){
        return `123`
    }
}

const hitesh = new User("Hitest")
console.log(hitesh.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.logMe())