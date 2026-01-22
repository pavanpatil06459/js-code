

function sayMyName() {
    console.log("p");
    console.log("a");
    console.log("w");
    console.log("a");
    console.log("n");
}

// sayMyName()

function addTwoNum(number1, number2) {
    //   let result = number1 + number2
    //     return result

    return number1 + number2
}

const result = addTwoNum(3, 5)
// console.log("Result: ",result);




function loginUserMessage(username = "Sam") {
    if (!username) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pawan"))
// console.log(loginUserMessage("Hitesh"))


function calculateCartPrice(...num1) {
    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "pawan",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "patil",
    price: 999
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));






