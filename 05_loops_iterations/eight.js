const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);  // using arrow function



const shoppingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "backend",
        price: 5000
    },
    {
        itemName: "data science",
        price: 2500
    },
    {
        itemName: "Mobile dev",
        price: 12000
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);
