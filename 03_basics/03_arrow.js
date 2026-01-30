const user = {
    username: "pawan",
    price: 999,
    // this keyword reffers to the current context
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"   //context means value 
// user.welcomeMessage()

// console.log(this);  // this value is empty =>  {}


// function chai(){
//     let username = "pawan"
//     console.log(this.username);  // this function shows the output undefined

// }
// chai()


const chai = () => {
    let username = "pawan"        // this is arrow function
    // console.log(this); // this shows empty paranthesis {}
    // console.log(this.username); // this shows undefined 
}
// chai()

() => {} // this is arrow fucnction syntax

//this is explicit return

// const addTwo = (num1, num2 ) => {    // if write in curly braces {} write return 
//     return num1 + num2              // this is called basic arrow function
// }                                    
// console.log(addTwo(3,4));


// this is implicit return
// const addTwo = (num1, num2 ) => num1 + num2  

// const addTwo = (num1, num2 ) => ( num1 + num2 )   // if write in parantheis () do not write return 

const addTwo = (num1, num2 ) => ({username: "Pawan"} ) ///when return a {} object use paranthesis around object 

console.log(addTwo(3,4));

// const myArrya = [2, 5, 3, 7,8]

// myArrya.forEach()
