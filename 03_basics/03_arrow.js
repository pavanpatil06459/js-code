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

// const addTwo = (num1, num2 ) => {
//     return num1 + num2              // this is called basic arrow function
// }
// console.log(addTwo(3,4));


const addTwo = (num1, num2 ) => num1 + num2              
console.log(addTwo(3,4));
