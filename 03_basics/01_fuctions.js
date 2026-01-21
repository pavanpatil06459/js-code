

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
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pawan"))
console.log(loginUserMessage("Hitesh"))

