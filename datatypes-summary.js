// primitive data types

// 7 types : String, Number, Boolean, Null, undefined, Symbol, 
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 32422334543534545n


// Non Primitive / refrerence type 

// Array, Objects, Fuctions

const heros = ["shaktiman", "naagraj", "doga" ];
let myObj = {
    name: "pawan",
    age: 21,
}

const myFuction = function(){
    console.log("Hello World")
}

console.log(myObj);



 