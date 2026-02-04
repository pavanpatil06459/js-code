// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => {
//           return num > 4                                // num > 4     // this returns emplty array}) 
// console.log(newNums);



// const newNum = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const books = [
    {title: "Book One", Genre: "Finction", Publish: 1987},
    {title: "Book Two", Genre: "Non-Fiction", Publish: 1995},
    {title: "Book Three", Genre: "History", Publish: 2005},
    {title: "Book Four", Genre: "Science", Publish: 2015},
    {title: "Book Five", Genre: "Geography", Publish: 2020},
    {title: "Book six", Genre: "History", Publish: 2021},
    {title: "Book seven", Genre: "Science", Publish: 2016},
    {title: "Book eight", Genre: "Non-Fiction", Publish: 1994},
];

const userBooks = books.filter( (bk) => bk.Genre ==='History' )

console.log(userBooks);
