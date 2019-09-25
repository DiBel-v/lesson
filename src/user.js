import './user.css'
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `Привет, ${this.firstName} ${this.lastName}`;
    }
}

export{ User };