// singleton 
// object.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Pawan",
    "full name": "Pawan Patil",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "pawan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pawan@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello JS User location ${this.location}`);
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());