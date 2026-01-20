const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const allnewHeros = [...marvel_heros, ...dc_heros]
// console.log(allnewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);


console.log(Array.isArray("Pawan"))
console.log(Array.from("Pawan"))
console.log(Array.from({ name: "hitesh" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3
));






