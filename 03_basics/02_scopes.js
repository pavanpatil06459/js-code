// var c = 300
let a = 300

if (true) {
    let a = 100
    const b = 200            // This is block scoped
    console.log("Inner: ", a);
    
}   


console.log(a);   // and this is global scoped
// console.log(b);
// console.log(c);
